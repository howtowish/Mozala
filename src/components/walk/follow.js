import React, { Component } from 'react';
import { View,Text, Image, TouchableOpacity, Dimensions} from 'react-native'
import { Container, Header, Row, Col, Icon, Title, Content, Footer, Button, Body, Left, Right } from 'native-base';
// import { Header } from '../../ui/templates/HeaderHome'
const deviceWidth= Dimensions.get("screen").width;
const deviceHeight = Dimensions.get("screen").height
class FOLLOW extends Component {
    render() {
        return ( 
            <View style={{flex:1,  backgroundGradient: "vertical",
            backgroundGradientTop: "#333333",
            backgroundGradientBottom: "#666666",justifyContent:"center",alignItems:"center"}}>
                <Image style={{width:deviceHeight/4,height:deviceHeight/4,resizeMode:"contain"}} source={require("@assets/images/monero.png")} />
                <Text style={{marginHorizontal:deviceWidth*0.1,marginVertical:deviceHeight/30}}>Bạn đã cập nhật toàn bộ những thông tin mới nhất. Xem thêm những gian hàng mới ngay,</Text>
                <TouchableOpacity style={{backgroundColor:"red",borderRadius:5,width:deviceWidth*0.8,paddingBottom:deviceHeight/80, paddingTop:deviceHeight/80}}>
                    <Text style={{textAlign:"center",color:"#ffff",fontSize:20}}>Khám phá ngay</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
export default FOLLOW;
