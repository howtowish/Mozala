import React, { Component } from 'react';
import { Container, Header, Row, Col, Icon, Title, Content, Footer, Button, Body, Text, Left, Right } from 'native-base';
// import { Actions } from 'react-native-router-flux'
import { Image, TouchableOpacity, ScrollView, FlatList,View,Dimensions } from 'react-native'
const rowHeight = 40;
import HeaderHome from '../../ui/templates/HeaderHome'
// import CarouselHome from '../../ui/templates/Carouse/CarouselHome'
import CardCollect from '../../ui/templates/CardCollect'
// import {} from '../../../native-base-theme/components/Header'
import image1 from '../../ui/assets/images/1.png'
import variables from '../../../native-base-theme/variables/material'
import CardDealHome from '../../ui/templates/CardDealHome'
import CardPopularSearch from '../../ui/templates/CardPopularSearch'


import Swiper from 'react-native-swiper'
const deviceWidth = Dimensions.get('window').width
const deviceHeight = Dimensions.get('window').height
class Home extends Component {
    constructor(props) {
        super(props);
        this.renderItem = this.renderItem.bind(this)
 
    }
    renderItem(data) {
        return (
            <CardDealHome />
        )
    }

    render() {

        return (
            <ScrollView contentContainerStyle={{backgroundColor:"white" }}>
                
                <HeaderHome /> 
                {/* <CarouselHome /> */}
               
                <Row style={{marginTop:variables.scale(30)}}>
                    <Col style={{ alignItems: "center" }}>
                        <TouchableOpacity style={{ width: variables.scale(100), height: variables.scale(100), backgroundColor: "red", borderRadius: variables.scale(100) / 2, alignItems: "center", justifyContent: "center" }}>
                            <Image style={{ width: variables.scale(50), height: variables.scale(50), resizeMode: 'cover' }} source={image1} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: variables.scale(20), textAlign: "center" }}>LazMall</Text>
                    </Col>
                    <Col style={{ alignItems: "center" }}>
                        <TouchableOpacity style={{ width: variables.scale(100), height: variables.scale(100), backgroundColor: "red", borderRadius: variables.scale(100) / 2, alignItems: "center", justifyContent: "center" }}>
                            <Image style={{ width: variables.scale(50), height: variables.scale(50), resizeMode: 'cover' }} source={image1} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: variables.scale(20), textAlign: "center" }}>Hàng Quốc Tế</Text>
                    </Col>
                    <Col style={{ alignItems: "center" }}>
                        <TouchableOpacity style={{ width: variables.scale(100), height: variables.scale(100), backgroundColor: "red", borderRadius: variables.scale(100) / 2, alignItems: "center", justifyContent: "center" }}>
                            <Image style={{ width: variables.scale(50), height: variables.scale(50), resizeMode: 'cover' }} source={image1} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: variables.scale(20), textAlign: "center" }}>Dịch Vụ & Nạp Thẻ</Text>
                    </Col>
                    <Col style={{ alignItems: "center" }}>
                        <TouchableOpacity style={{ width: variables.scale(100), height: variables.scale(100), backgroundColor: "red", borderRadius: variables.scale(100) / 2, alignItems: "center", justifyContent: "center" }}>
                            <Image style={{ width: variables.scale(50), height: variables.scale(50), resizeMode: 'cover' }} source={image1} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: variables.scale(20), textAlign: "center" }}>Mã Giảm Giá</Text>
                    </Col>
                    <Col style={{ alignItems: "center" }}>
                        <TouchableOpacity style={{ width: variables.scale(100), height: variables.scale(100), backgroundColor: "red", borderRadius: variables.scale(100) / 2, alignItems: "center", justifyContent: "center" }}>
                            <Image style={{ width: variables.scale(50), height: variables.scale(50), resizeMode: 'cover' }} source={image1} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: variables.scale(20), textAlign: "center" }}>Danh Mục</Text>
                    </Col>

                </Row>
                <Text>Deal Chớp Nhoáng</Text>
                <Row>
                    <CardDealHome />
                    <CardDealHome />
                    <CardDealHome />
                </Row>
                <Text>Tìm kiếm phổ biến</Text>
                <Row>
                    <CardPopularSearch />
                    <CardPopularSearch />
                </Row>
                <Row>
                    <CardPopularSearch />
                    <CardPopularSearch />
                </Row>
                <Text>Bộ sưu tập</Text>
                <CardCollect />
                <Text>Dành riêng cho bạn</Text>
                <FlatList
                    data={[{ key: 'a' }, { key: 'b' },{ key: 'b' },{ key: 'b' }]}
                    horizontal={false}
                    numColumns={2}
                    renderItem={this.renderItem}
                />
            </ScrollView>
        );
    }
}
export default Home
