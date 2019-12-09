import React, { Component } from "react";
import { Text, View, Button, ScrollView } from "react-native";
import { WebView } from 'react-native-webview';
import CardList from  "../components/cardList"
import CardList2 from  "../components/cardList2"
import { TouchableOpacity } from "react-native-gesture-handler";

const card1 = require("../../assets/card1.jpg");
const card2 = require("../../assets/card2.jpg");
const card3 = require("../../assets/card3.jpg");

const cards1 = [
  {
    text: "보험 이해 3분 개념 잡기",
    note: "속보와 함께 쉽고 빠르게 보험에 대한 개념을 잡아보자",
    img: card1,
    url : "https://www.youtube.com/embed/zilbWTLXbMA?rel=0&autoplay=1&showinfo=0&controls=0"
  },   
];

const cards2 = [
  {
    text: "가입하지 말아야 할 보험사는?",
    note: "보험사 파산하면“보험 계약자도 손실분담?!”",
    img: card2,
    url : "https://www.youtube.com/embed/WrYhogvCd_M?rel=0&autoplay=1&showinfo=0&controls=0"
  },   
  {
    text: "무해지환급형 종신보험! ",
    note: "강의 가성비 3사 비교 (이보다 더 저렴할순 없다)",
    img: card3,
    url : "https://www.youtube.com/embed/WJi8P6Ou8ic?rel=0&autoplay=1&showinfo=0&controls=0"
  },  
];

export default class AboutScreen extends Component {
  render() {
    return (
      <ScrollView>
        <View style={{flex: 1}}>
          <View style={{ alignItems: "center" }}>
            {/* <Text style={{ fontSize: 25 }}>속보</Text> */}
            <Text style={{ fontSize: 16 }}>속보와 함께 하는 보험 이해하기</Text>
          </View>
          {/* <View style={{ alignItems: "center", paddingTop: 20 }}>
            <Text style={{ fontSize: 12 }}>
            고구마같이 꽉만힌 보험은 그만
            </Text>          
            <Text style={{ fontSize: 12 }}>
            속 시원한 보험, 속 보이는 보험
            </Text>
            <Text style={{ fontSize: 12 }}>
            사이다같이 시원한 보험비교 앱
            </Text>
          </View>           */}

          <CardList cards={cards1} navigation={this.props.navigation} />

          <View style={{ alignItems: "center", paddingTop: 50 }}>
            <Text style={{ fontSize: 20 }}>실손보험이란</Text>
          </View>          
          <View style={{ alignItems: "center", paddingTop: 20 }}>
            <Text style={{ fontSize: 12 }}>
            실손보험은 ..........
            </Text>          
            <Text style={{ fontSize: 12 }}>
            속 시원한 보험, 속 보이는 보험
            </Text>
            <Text style={{ fontSize: 12 }}>
            사이다같이 시원한 보험비교 앱
            </Text>
            <Text style={{ fontSize: 12 }}>
            속보
            </Text>
          </View>  
          <CardList2 cards={cards2} navigation={this.props.navigation} />
        </View>
      </ScrollView>

    );
  }
}
