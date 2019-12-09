import React, { Component } from "react";
import { Text, View } from "react-native";
export default class BoardDetail extends Component {
  static defaultProps = {
    title: "",
    content: ""
  };
  render() {
    return (
      <View style={{ flex: 1, width: "100%", padding: 20 }}>
        <View style={{ marginTop: 50 }}>
          {/*제목*/}
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>
            {this.props.title}
          </Text>
        </View>
        <View
          style={{
            borderWidth: 1,
            flex: 1,
            padding: 10,
            marginTop: 20
          }}
        >
          {/*내용*/}
          <Text>{this.props.content}</Text>
        </View>
      </View>
    );
  }
}
