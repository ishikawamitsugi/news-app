import React, { useEffect, useState } from "react";
import { StyleSheet, FlatList, SafeAreaView, Platform } from "react-native";
import ListItem from "./components/ListItem";
import dummyArticles from "./dummies/articles.json";
import Constants from "expo-constants";
import axios, { AxiosResponse } from "axios";

const styles = StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
});

export default function App() {
  var url =
    "http://newsapi.org/v2/top-headlines?" +
    "country=jp&" +
    `apiKey=${Constants.manifest.extra.newsApiKey}`;
  const [articles, setArticles] = useState<any>([]);

  const fetchArticles = async () => {
    try {
      const response = await axios.get(url);
      console.log(response);
      setArticles(response.data.articles);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log(Constants.manifest.extra.newApiKey);
    fetchArticles();
  }, []);

  return (
    <SafeAreaView style={styles.droidSafeArea}>
      <FlatList
        data={articles}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            imageUrl={item.urlToImage}
            author={item.author}
          />
        )}
        keyExtractor={(item, index) => {
          return index.toString();
        }}
      ></FlatList>
    </SafeAreaView>
  );
}
