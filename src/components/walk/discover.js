import React, { Component } from 'react';
import { View, Text, ScrollView, Image } from 'react-native'
import { Container, Header, Row, Col, Icon, Title, Content, Footer, Button, Body, Left, Right } from 'native-base';
import image1 from '../../ui/assets/images/qc.png'
import variables from '../../../native-base-theme/variables/material'
import CardLike from '../../ui/templates/CardLike'
// import { Header } from '../../ui/templates/HeaderHome'
class DISCOVER extends Component {
    render() {
        return (
            <ScrollView>
                <Image style={{ width: null, height: variables.scale(350), resizeMode: 'cover' }} source={image1} />
                <CardLike />
                <CardLike />
                <CardLike />
            </ScrollView>
        )
    }
}
export default DISCOVER;
