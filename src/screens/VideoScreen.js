import React, { Component } from "react";
import { Text, View, Button, ScrollView } from "react-native";
import { WebView } from 'react-native-webview';

export default class VideoScreen extends Component {
  render() {
    const { navigation } = this.props;
    const url = navigation.getParam('url', '');    
    return (
      <ScrollView>
        <View style={{flex: 1}}>
          <WebView
            style={{height: 250}}
            javaScriptEnabled={true}
            source={{uri: url }}
          />
        </View>
      </ScrollView>

    );
  }
}
