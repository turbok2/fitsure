import React, { Component } from "react";
import { Text, View, Button } from "react-native";

import { connect } from "react-redux";
import { deleteBoard } from "../stores/board/actions";
import { withNavigation } from "react-navigation";

class BoardDeleteButtonContainer extends Component {
  // static defaultProps = {
  //   key: "0"
  // };
  // constructor(props) {
  //   super(props);
    // const item = this.props.navigation.getParam("item");

    // this.state = {
    //   title: item.title,
    //   content: item.content
    // };
  // }  
  render() {
    return (
      <Button
        title="삭제"
        onPress={() => {
          console.log('key: ',this.props.mykey);
          this.props.deleteBoard(this.props.mykey);
          return this.props.navigation.popToTop();
        }}
      />
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    deleteBoard: key => dispatch(deleteBoard(key))
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withNavigation(BoardDeleteButtonContainer));
