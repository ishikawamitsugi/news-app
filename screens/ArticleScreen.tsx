import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  AppState,
} from "react-native";
import { WebView } from "react-native-webview";
import { useDispatch, useSelector } from "react-redux";
import {
  addClip,
  ADD_CLIP,
  deleteClip,
  DELETE_CLIP,
} from "../store/actions/user";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
export const ArticleScreen: React.FC<any> = ({ route }) => {
  // routeから渡したarticleをここで取得する
  const { article } = route.params;
  const dispatch = useDispatch();
  const clip = useSelector((state) => state);
  console.log("ReduxState: ", clip);

  return (
    <React.Fragment>
      <SafeAreaView style={styles.container}>
        <TouchableOpacity
          onPress={(): void => {
            dispatch(addClip({ type: ADD_CLIP, article }));
          }}
        >
          <Text style={{ marginTop: 15, fontSize: 30 }}>Add_Clip</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={(): void => {
            dispatch(deleteClip({ type: DELETE_CLIP, article }));
          }}
        >
          <Text style={{ marginTop: 5, fontSize: 30 }}>DELETE_Clip</Text>
        </TouchableOpacity>
        <WebView source={{ uri: article.url }} />
      </SafeAreaView>
    </React.Fragment>
  );
};
export default ArticleScreen;
