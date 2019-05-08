import React, { Component } from 'react';
import { View, Text, ScrollView, Image,TouchableOpacity } from 'react-native'
import { Container, Header, Row, Col, Icon, Title, Content, Footer, Button, Body, Left, Right } from 'native-base';
import image1 from '../../ui/assets/images/qc.png'
import variables from '../../../native-base-theme/variables/material'
import CardLike from '../../ui/templates/CardLike'
import TabNavigator from 'react-native-tab-navigator';
import FontAwesome  from 'react-native-vector-icons/FontAwesome'
// import { Header } from '../../ui/templates/HeaderHome'
import {Platform} from 'react-native'

const fontAwesome = {
    iconFamily: 'FontAwesome',
    iconFontSize: (Platform.OS === 'ios' ) ? 30 : 28,
    iconMargin: 7,
    iconLineHeight: (Platform.OS === 'ios' ) ? 37 : 30,
}
class ProductDetails extends Component {
    render() {
        return (
          <View style={{flex:1}}>
                <ScrollView>
                <Image style={{ width: null, height: variables.deviceHeight/2, resizeMode: 'cover' }} source={image1} />
                <Image style={{ width: null, height: variables.deviceHeight/2, resizeMode: 'cover' }} source={image1} />
                <Image style={{ width: null, height: variables.deviceHeight/2, resizeMode: 'cover' }} source={image1} />
                <Image style={{ width: null, height: variables.deviceHeight/2, resizeMode: 'cover' }} source={image1} />
             </ScrollView>
             <TouchableOpacity>
             <FontAwesome name={'store'} size={50} light />
             </TouchableOpacity>
          </View>

        )
    }
}
export default ProductDetails;
