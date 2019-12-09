import React, { Component } from "react";
import { Text, View, TextInput, Button } from "react-native";

export default class BoradCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleInput: "",
      contentInput: ""
    };
  }

  submitBoard() {
    const createFunc = this.props.createFunc;
    createFunc(this.state.titleInput, this.state.contentInput);
    return this.props.navigation.popToTop();
  }

  render() {
    return (
      <View>
        <View style={{ marginTop: 30, padding: 10, borderWidth: 1 }}>
          {/* 제목 */}
          <TextInput
            placeholder="제목"
            onChangeText={text => this.setState({ titleInput: text })}
            value={this.state.titleInput}
          />
        </View>

        <View
          style={{
            marginTop: 30,
            padding: 10,
            borderWidth: 1,
            height: 100
          }}
        >
          <TextInput
            placeholder="내용"
            multiline={true}
            onChangeText={text => this.setState({ contentInput: text })}
            value={this.state.contentInput}
          />
        </View>

        <Button title="제출" onPress={this.submitBoard.bind(this)} />
      </View>
    );
  }
}
