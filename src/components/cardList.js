import React, { Component } from 'react';
import { Image } from 'react-native';
import { Content, Card, CardItem,  Text,  Body } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';


let move;

const result = function(cards) {
  return(
    cards.map((item, index) => (
      <Card key={index}>
        <TouchableOpacity onPress={() => navigation.navigate("Video",{url:item.url })}>
          <CardItem style={{height:170}}>
            <Image 
              source={item.img} style={{ flex:1, width:'100%',resizeMode: 'contain'}}/>
          </CardItem>    
          <CardItem >
            <Body>
              <Text>{item.text}</Text>
              <Text note>{item.note}</Text>
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