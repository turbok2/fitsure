import React, { Component } from 'react';
import { Image } from 'react-native';
import { Content, Card, CardItem,  Text,  Body, View } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';


let move;

const result = function(cards) {
  return(
    cards.map((item, index) => (
      <Card key={index} >
          <TouchableOpacity onPress={() => navigation.navigate("Video",{url:item.url })}>
            <CardItem style={{height:80}} style={{flex: 1, flexDirection: 'row'}}>
              <Image 
                source={item.img} style={{ flex:2, height:80}}/>
              <Body style={{ flex:3, paddingLeft: 10}}>
                <Text style={{fontSize: 12}}>{item.text}</Text>
                <Text note style={{fontSize: 10}}>{item.note}</Text>
              </Body>
            </CardItem>    
          </TouchableOpacity>    
      </Card>
    ))
  )
}


export default  class CardList extends Component {
  constructor(props) {
      super(props);
      this.state = {

      }
      navigation = this.props.navigation
  }
  


  render() {
    // console.log(this.props.cards)
    console.log(this.props.data)

    return (
      <Content
        style={{margin : 20}}
      >{result(this.props.cards)}</Content>
    );
  }
}