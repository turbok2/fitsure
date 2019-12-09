import React, { Component } from "react";
import { Text, View, TextInput, Button } from "react-native";
import { connect } from "react-redux";

import { withNavigation } from "react-navigation";
import {
  setTitleInput,
  setContentInput,
  createBoard
} from "../stores/board/actions";

class BoardCreateContainer extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props);
  }

  render() {
    return (
      <View>
        <View style={{ marginTop: 30, padding: 10, borderWidth: 1 }}>
          {/* 제목 */}
          <TextInput
            placeholder="제목"
            value={this.props.titleInput}
            onChangeText={text => this.props.setTitleInput(text)}
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
            value={this.props.contentInput}
            onChangeText={text => this.props.setContentInput(text)}
          />
        </View>

        <Button
          title="제출"
          onPress={() => {
            this.props.createBoard(
              this.props.titleInput,
              this.props.contentInput
            );
            return this.props.navigation.popToTop();
          }}
        />
      </View>
    );
  }
}
function mapStateToProps(state) {
  return {
    titleInput: state.titleInput,
    contentInput: state.contentInput
  };
}
function mapDispatchToProps(dispatch) {
  return {
    setTitleInput: text => dispatch(setTitleInput(text)),
    setContentInput: text => dispatch(setContentInput(text)),
    createBoard: (title, content) => dispatch(createBoard(title, content))
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withNavigation(BoardCreateContainer));
