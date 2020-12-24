import React, { useEffect } from "react";
import { StyleSheet, FlatList, SafeAreaView, Platform } from "react-native";
import ListItem from "./components/ListItem";
import articles from "./dummies/articles.json";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
});

export default function App() {
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
