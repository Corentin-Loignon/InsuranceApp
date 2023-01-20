import { WebView } from "react-native-webview";
import React from "react";
import {
  View,
  StyleSheet,
} from "react-native";

const Chat = () => {
  return (
    <View style={styles.container}>
    <WebView source={{ uri: "#" }} />
    </View>
  )
  
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F5F6",
    marginTop:'-15%'
  },
});