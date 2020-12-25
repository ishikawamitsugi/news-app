import React from "react";
import { StyleSheet, SafeAreaView, Platform } from "react-native";
import AppNavigator from "./Navigation/AppNavigator";

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
      <AppNavigator />
    </SafeAreaView>
  );
}
