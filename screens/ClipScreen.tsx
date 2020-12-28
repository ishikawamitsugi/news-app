import React from "react";
import { Text, SafeAreaView, StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
});

const ClipScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.droidSafeArea}>
      <Text>ClipScreen</Text>
    </SafeAreaView>
  );
};

export default ClipScreen;
