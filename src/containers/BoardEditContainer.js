import React, { Component } from "react";
import { Text, View, TextInput, Button } from "react-native";
import { connect } from "react-redux";

import { withNavigation } from "react-navigation";
import {
  editBoard
} from "../stores/board/actions";

class BoardEditContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      content: this.props.content,
      mykey: this.props.mykey
    };
  }

  render() {
    return (
      <View>
        <View style={{ marginTop: 30, padding: 10, borderWidth: 1 }}>
          {/* 제목 */}
          <TextInput
            value={this.state.title}
            onChangeText={text => this.setState({ title: text })}
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
            multiline={true}
            value={this.state.content}
            onChangeText={text =>  this.setState({ content: text })}
          />
        </View>

        <Button
          title="수정하기"
          onPress={() => {
            // console.log(this.state.mykey,this.state.title,this.state.content)
            this.props.editBoard(
              this.state.mykey,
              this.state.title,
              this.state.content
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

  };
}
function mapDispatchToProps(dispatch) {
  return {
    editBoard: (mykey, title, content) => dispatch(editBoard(mykey, title, content))
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withNavigation(BoardEditContainer));
