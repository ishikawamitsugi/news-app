import React from "react";
import { useSelector } from "react-redux";
import { SafeAreaView, StyleSheet, Platform, FlatList } from "react-native";
import { RootState } from "../store";
import ListItem from "../components/ListItem";

const styles = StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? 25 : 0,
    height: "100%",
  },
});

const ClipScreen: React.FC<any> = ({ navigation }) => {
  const user = useSelector((state: RootState) => state.user);
  const { clips } = user;

  return (
    <SafeAreaView style={styles.droidSafeArea}>
      <FlatList
        data={clips}
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
        keyExtractor={(index) => index.toString()}
      ></FlatList>
    </SafeAreaView>
  );
};

export default ClipScreen;
