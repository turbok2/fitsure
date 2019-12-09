import React, { Component } from "react";
import { Text, View } from "react-native";
import { withNavigation } from "react-navigation";

import { connect } from 'react-redux'
import { createBoard } from "../stores/actions";



export default class BoardCreateContainer extends Component {
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}


// State를 Props로 바로 전달
const mapStateToProps = state => {
  return {
    board: state.board
  };
};

// Action Creator를 전달
const mapDispatchToProps = dispatch => {
  return {
    createBoard: (title, content) => dispatch(createBoard(title, content))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withNavigation(BoardCreateContainer));