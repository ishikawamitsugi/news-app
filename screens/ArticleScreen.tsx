import React from "react";
import { Text, View } from "react-native";
import { WebView } from "react-native-webview";

export const ArticleScreen: React.FC = () => {
  return (
    <WebView source={{ uri: "https://expo.io" }} style={{ marginTop: 20 }} />
  );
};
export default ArticleScreen;
