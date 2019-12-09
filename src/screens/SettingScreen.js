import React, { Component } from "react";
import { Text, View, StyleSheet,Button,TouchableHighlight } from "react-native";
import { WebView } from 'react-native-webview';


export default class SettingScreen extends Component {
  constructor( props ) {
    super( props );

    this.webView = null;
  }  

  render() {
    console.log('WebView test');
    return (
      <View style={{flex: 1}}>
        <WebView
            style={{flex: 1}}
            source={{uri: 'http://210.114.91.91:25754/insureList'}}
            ref={( webView ) => this.webView = webView}
        />      
      </View>
    );
  }
}

const styles=StyleSheet.create({
  Wview:{
    width: "100%"
  }
})


// render() {
//   console.log('WebView test');
//   return (
//     <WebView
//       ref={webView => (this.webView = webView)}
//       source={{uri:"http://210.114.91.91:25753/test.html"}}
//       style={[styles.Wview,{marginTop:20}]}   
//       onMessage={this.onMessage}    
//     />
//   );
// }

// import React, { Component } from "react";
// import { Text, View, StyleSheet } from "react-native";
// import MyInlineWeb from "../components/MyInlineWeb"

// export default class SettingScreen extends Component {
//   onMessage(e) {
//     console.log("On Message : ", e.nativeEvent);
//   }  

//   render() {
//     console.log('WebView test');
//     return (
//       <MyInlineWeb
//         // uri = "http://58.72.237.122"
//         uri = "http://210.114.91.91:25753/test.html"
//         style={{ width: '100%', height: 400 }}
//         onMessage={this.onMessage}  
//       />
//       // {/* <View>
//       //   <Text> Setting </Text>

//       // </View> */}
//     );
//   }
// }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center"
//   },
//   welcome: {
//     flex: 1,
//     paddingTop: 20,
//     fontSize: 20,
//     textAlign: "center",
//     backgroundColor: "skyblue"
//   },
//   webViewContainer: {
//     flex: 4
//   }
// });
