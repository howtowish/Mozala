import React, { Component } from 'react';
import { Row } from 'native-base';
// import { Actions } from 'react-native-router-flux'
import { View, TextInput,Dimensions,Image } from 'react-native'
import variables from '../../../native-base-theme/variables/material'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Swiper from 'react-native-swiper'
const deviceWidth = Dimensions.get('window').width
class HeaderHome extends Component {
    constructor(props){
        super(props)
        this.state={
            color:"red"
        }
        this.arrayColor= [
            "red","green","blue","yellow","pink"
        ]
    }
   _onchange = (index)=>{
       this.setState({
           color:this.arrayColor[index]
       })
      
   }
    render() {
        // const { search } = this.state;
        return (
            <View style={{ flex: 0.3, backgroundColor: this.state.color }}>
                <View style={{ flex: 1,marginTop:variables.scale(40) }}>
                    <Row style={{ alignItems: "center" }}>
                        <View style={{ marginLeft: variables.scale(20), marginRight: variables.scale(20) }}>
                            <Icon size={variables.scale(40)} color="white" name="camera" />
                        </View>
                        <View style={{ flex: 1 }}>
                            <TextInput style={{ textAlign: "center", backgroundColor: "white", borderRadius: 5 }} placeholder="Search" />
                        </View>
                        <View style={{ marginLeft: variables.scale(20), marginRight: variables.scale(20) }}>
                            <Icon size={variables.scale(40)} color="white" name="window-maximize" />
                        </View>
                    </Row>
                    <Swiper onIndexChanged={this._onchange} style={{ height: variables.scale(300), width: deviceWidth * 0.9, alignSelf: 'center', marginBottom: variables.scale(50) }} showsButtons={true} autoplay={true} autoplayTimeout={4}>
                        <View style={{ flex: 1 }}>
                            <Image style={{ height: variables.scale(500), width: null, resizeMode: "contain" }} source={require('@assets/images/poster02.jpg')} />
                        </View>
                        <View style={{ flex: 1 }}>
                            <Image style={{ height: variables.scale(500), width: null, resizeMode: "contain" }} source={require('@assets/images/poster02.jpg')} />
                        </View>
                        <View style={{ flex: 1 }}>
                            <Image style={{ height: variables.scale(500), width: null, resizeMode: "contain" }} source={require('@assets/images/poster02.jpg')} />
                        </View>
                        <View style={{ flex: 1 }}>
                            <Image style={{ height: variables.scale(500), width: null, resizeMode: "contain" }} source={require('@assets/images/poster02.jpg')} />
                        </View>
                        <View style={{ flex: 1 }}>
                            <Image style={{ height: variables.scale(500), width: null, resizeMode: "contain" }} source={require('@assets/images/poster02.jpg')} />
                        </View>
                    </Swiper>
                </View>
                {/* <View style={{
                    width: 0,
                    height: 0,
                    backgroundColor: 'transparent',
                    borderStyle: 'solid',
                    borderRightWidth: 500,
                    borderTopWidth: 100,
                    borderRightColor: 'transparent',
                    borderTopColor: 'red',
                    transform: [
                        { rotate: '0deg' },

                    ]
                }} >

                </View> */}

            </View>
        );
    }
}

export default HeaderHome
