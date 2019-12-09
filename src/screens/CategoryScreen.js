import React, { Component } from "react";
import { Text, View, StyleSheet,TouchableHighlight } from "react-native";
import { Button,Input } from "native-base";

const msgs =["무직,관리직,프로그래머,연구원,디자이너,전문직(의사,변호사등),주부, 학생,태아, 어린이 등","영업직, 장치&기계 조작, 자영업, 기술&기능 현장직 등","단순 노무, 군인, 경찰, 소방관, 농축업, 어업 등"]

export default class CategoryScreen extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      birthday : "",
      gender : "0",
      job : "0",
      msg :  msgs[0]
    }
  }  

  handleChange = (text) => {
    this.setState({
      birthday : text
    })
  }

  setGenderMan = () => {   
    // alert('search: '+search)
      this.setState({
        gender : "0"
      })        
  }
  

  setGenderWoman = () => {   
    // alert('search: '+search)
    this.setState({
      gender : "1"
    })     
  }
  
  setJob0 = () => {   
    // alert('search: '+search)
    this.setState({
      job : "0",
      msg : msgs[0]
    })       
    // alert(this.state.job)
    // console.log(this.state.job)
    // console.log('job0')
  }
  setJob1 = () => {   
    // alert('search: '+search)
    this.setState({
      job : "1",
      msg : msgs[1]
    })  
    // alert(this.state.job)
    // console.log(this.state.job)
    // console.log('job1')
  }
  setJob2 = () => {   
    // alert('search: '+search)
    this.setState({
      job : "2",
      msg : msgs[2]
    })  
    // alert(this.state.job)
    // console.log(this.state.job)
    // console.log('job2')
  }  

  goSearch = () => {
    console.log(this.state.birthday)
    console.log(this.state.gender)
    console.log(this.state.job)

    // alert(this.state.birthday, this.state.gender, this.state.job)
    // alert(this.state.birthday)
  }

  render() {
    return (
      <View style={{flex: 2, marginLeft : 20, marginTop : 20 }}>
        <View style={{flex: 1}}>
          <Text style={{fontSize : 16}}>이용자분의 정보를 확인해주세요.</Text>
          <Text style={{fontSize : 10}}>정보를 입력하시면 시원하게 당신에게</Text>
          <Text style={{fontSize : 10}}>맞는 보험을 비교해드릴께요.</Text>
        </View>

        <View style={{flex: 2, marginTop : 20 }}>
          <Text>생년월일</Text>
          <Input
            placeholder='YYYYMMDD' 
            style={{backgroundColor:"#ffffff", borderColor : "#000000", borderWidth : 1, height : 15, marginLeft : 10, marginRight : 10, marginTop : 10, marginBottom : 10}}  
            value = {this.state.birthday}
            onChangeText = {this.handleChange}            
          />
        </View>

        <View style={{flex: 1,marginTop: 10}}>
          <Text>성별</Text>         
          <View style={{ marginTop: 10, alignItems : "center", justifyContent: 'center', flexDirection : 'row' }}>
            <Button large block primary style={{flex:1, marginLeft : 50 , marginRight : 25, padding : 20}}
                  onPress={
                  () => this.setGenderMan()
              }>
              <Text>남성</Text>
            </Button>   
            <Button  large block danger style={{flex:1,marginLeft : 25 , marginRight : 50, padding : 20}}
                  onPress={
                  () => this.setGenderWoman()
              }>
              <Text>여성</Text>
            </Button>                          
          </View>
        </View>  

        <View style={{flex: 4, marginTop: 50}}>
          <Text>직업군</Text>
          <View style={{ marginTop: 10, marginBottom: 20, alignItems : "center", justifyContent: 'center', flexDirection : 'row' }}>
            <Button  block  style={{flex:1, backgroundColor : "gray", marginLeft : 10 , marginRight : 5, padding : 20}}
                  onPress={
                  () => this.setJob0()
              }>
              <Text>비위험직</Text>
            </Button>   
            <Button  block  style={{flex:1,  backgroundColor : "gray", marginLeft : 5 , marginRight : 5, padding : 20}}
                  onPress={
                  () => this.setJob1()
              }>
              <Text>중위험직</Text>
            </Button>     
            <Button block  style={{flex:1,  backgroundColor : "gray", marginLeft : 5 , marginRight : 10, padding : 20}}
                  onPress={
                  () => this.setJob2()
              }>
              <Text>고위험직</Text>
            </Button>                                    
          </View> 
          <Text style={{fontSize : 10}}>{this.state.msg}</Text>
        </View> 
        <View style={{flex: 1, marginTop: 0, marginBottom : 0}}>
          <View style={{ marginTop: 0, marginBottom: 0,  justifyContent: 'center', marginLeft:50, marginRight: 50 }}>
            <Button block primary
              onPress={
              () => this.goSearch(this.state.search)
            }>
              <Text>검색하기</Text>
            </Button>
          </View>
        </View>
      
      </View>
    );
  }
}

