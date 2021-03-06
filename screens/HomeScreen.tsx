import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  FlatList,
  SafeAreaView,
  Platform,
  RefreshControl,
} from "react-native";
import ListItem from "../components/ListItem";
import Constants from "expo-constants";
import axios from "axios";
import Loading from "../components/Loading";

const styles = StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
});

const HomeScreen: React.FC<any> = ({ navigation }) => {
  var url =
    "http://newsapi.org/v2/top-headlines?" +
    "country=jp&" +
    `apiKey=${Constants.manifest.extra.newsApiKey}`;
  const [articles, setArticles] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [refresh, setRefresh] = useState<boolean>(false);

  const onRefresh = React.useCallback(() => {
    setRefresh(true);
    fetchArticles();
    setRefresh(false);
  }, [refresh]);

  const fetchArticles = async () => {
    try {
      setLoading(true);
      const response = await axios.get(url);
      setArticles(response.data.articles);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <SafeAreaView style={styles.droidSafeArea}>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={refresh} onRefresh={() => onRefresh()} />
        }
        data={articles}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            imageUrl={item.urlToImage}
            author={item.author}
            onPress={() =>
              navigation.navigate("Article", {
                article: item,
              })
            }
          />
        )}
        keyExtractor={(item, index) => {
          return index.toString();
        }}
      ></FlatList>
      {loading && <Loading />}
    </SafeAreaView>
  );
};

export default HomeScreen;
