import React, { Component } from "react";
import { Text, View } from "react-native";
import BoardCreate from "../components/board/BoradCreate";
import BoardCreateContainer from "../containers/BoardCreateContainer";

export default class BoardCreateScreen extends Component {
  constructor(props) {
    super(props);

    const createFunc = this.props.navigation.getParam("createFunc");
    this.createFunc = createFunc;
  }

  render() {
    return (
      <View>
        <Text style={{ fontSize: 25 }}> 글 작성 </Text>
        {/* <BoardCreate createFunc={this.createFunc} {...this.props} />  */}
        <BoardCreateContainer />
      </View>
    );
  }
}
