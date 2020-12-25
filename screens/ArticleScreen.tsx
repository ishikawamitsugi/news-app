import React from "react";
import { Text, View } from "react-native";
import { WebView } from "react-native-webview";

export const ArticleScreen: React.FC<any> = ({ route }) => {
  // routeから渡したarticleをここで取得する
  const { article } = route.params;
  console.log(article);
  return <WebView source={{ uri: article.url }} style={{ marginTop: 20 }} />;
};
export default ArticleScreen;
