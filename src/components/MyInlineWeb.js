import React, { Component } from 'react'
import { StyleSheet} from 'react-native'
import { WebView } from 'react-native-webview';

export default class MyInlineWeb extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <WebView
        ref={webView => (this.webView = webView)}
        source={{uri:this.props.uri}}
        style={[styles.Wview,{marginTop:20}]}     
      />
    )
  }
}

const styles=StyleSheet.create({
  Wview:{
    width: "100%"
  }
})
