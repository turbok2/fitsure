import React, { Component } from "react";
import { Text, View, TextInput, Button } from "react-native";

import BoardEditContainer from "../containers/BoardEditContainer";

export default class BoardEditScreen extends Component {
  constructor(props) {
    super(props);
    const item = this.props.navigation.getParam("item");
    this.state = {
      title: item.title,
      content: item.content,
      key: item.key
    };
    // console.log('key = ',this.state.key)
  }

  // submitButton() {
  //   const editFunc = this.props.navigation.getParam("editFunc");
  //   editFunc(this.state.key, this.state.title, this.state.content);
  //   this.props.navigation.popToTop();
  // }

  render() {
    return (
      <View>
        <Text style={{ fontSize: 25, fontWeight: "bold" }}>글수정</Text>

        <BoardEditContainer 
          mykey={this.state.key}
          title={this.state.title}
          content={this.state.content}
        />


      </View>
    );
  }
}

