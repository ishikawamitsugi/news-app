import React from "react";
import { SafeAreaView, StyleSheet, Platform } from "react-native";
import { WebView } from "react-native-webview";
import { useDispatch, useSelector } from "react-redux";
import {
  addClip,
  ADD_CLIP,
  deleteClip,
  DELETE_CLIP,
} from "../store/actions/user";
import ClipButton from "../components/ClipButton";
import { RootState } from "../store";

const styles = StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? 25 : 0,
    height: "100%",
  },
});

export const ArticleScreen: React.FC<any> = ({ route }) => {
  // routeから渡したarticleをここで取得する
  const { article } = route.params;
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  const { clips } = user;

  const isCliped = () => {
    return clips.some((clip: any) => clip.url === article.url);
  };

  const toggleClip = () => {
    if (isCliped()) {
      dispatch(deleteClip({ type: DELETE_CLIP, clip: article }));
    } else {
      dispatch(addClip({ type: ADD_CLIP, clip: article }));
    }
  };

  return (
    <React.Fragment>
      <SafeAreaView style={styles.droidSafeArea}>
        <ClipButton onPress={toggleClip} enabled={isCliped()} />
        <WebView source={{ uri: article.url }} />
      </SafeAreaView>
    </React.Fragment>
  );
};
export default ArticleScreen;
