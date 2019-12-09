import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
// import MyInlineWeb from "../components/MyInlineWeb"
import { WebView } from 'react-native-webview';


export default class SearchingScreen extends Component {
  constructor( props ) {
    super( props );

    this.webView = null;
  }    
  render() {
    return (
      <View style={{flex: 1}}>
        <WebView
            style={{flex: 1}}
            source={{uri: 'http://210.114.91.91:25754/'}}
            ref={( webView ) => this.webView = webView}
            // onMessage={this.onMessage}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  welcome: {
    flex: 1,
    paddingTop: 20,
    fontSize: 20,
    textAlign: "center",
    backgroundColor: "skyblue"
  },
  webViewContainer: {
    flex: 4
  }
});


{/* <MyInlineWeb
// uri = "http://58.72.237.122"
uri = "http://210.114.91.91:25753/fitsure"
/> */}