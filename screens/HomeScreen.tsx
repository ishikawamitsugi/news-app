import React, { useEffect, useState } from "react";
import { StyleSheet, FlatList, SafeAreaView, Platform } from "react-native";
import ListItem from "../components/ListItem";
import Constants from "expo-constants";
import axios from "axios";

const HomeScreen: React.FC<any> = ({ navigation }) => {
  var url =
    "http://newsapi.org/v2/top-headlines?" +
    "country=jp&" +
    `apiKey=${Constants.manifest.extra.newsApiKey}`;
  const [articles, setArticles] = useState<any>([]);

  const fetchArticles = async () => {
    try {
      const response = await axios.get(url);
      setArticles(response.data.articles);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <FlatList
      data={articles}
      renderItem={({ item }) => (
        <ListItem
          title={item.title}
          imageUrl={item.urlToImage}
          author={item.author}
          onPress={() => navigation.navigate("Article")}
        />
      )}
      keyExtractor={(item, index) => {
        return index.toString();
      }}
    ></FlatList>
  );
};

export default HomeScreen;
