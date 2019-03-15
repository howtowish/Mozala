import React, { Component } from 'react'
import { 
    View,
    Text,
    StatusBar
 } from 'react-native';
 import { Actions } from 'react-native-router-flux';
 export default class A extends Component {
     state = {  }
     render() {
         return (
             
             <View  style={{flex:1,backgroundColor:'#fff',justifyContent:"center",alignItems: 'center',}}>
                <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true}/>
                <Text onPress={()=>Actions.RepoList()}>Test navigate</Text>
             </View>
         );
     }
 }