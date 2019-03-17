import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import variables from '../../../native-base-theme/variables/material'
export default class CardDealHome extends Component {
    render() {
        return (

            <Content>
                <Card>
                    <CardItem cardBody>
                        <Image source={{ uri: 'http://sohanews.sohacdn.com/thumb_w/660/2018/11/29/photo-1-15434827229601880588731-crop-1543482876002549927858.jpg' }} style={{ height: variables.scale(200), width: null, flex: 1 }} />
                    </CardItem>
                    <CardItem style={{ flexDirection: "column" }}>
                        <Text style={{ fontSize: variables.scale(20), color: "red" }}>305 Đã bán</Text>
                        <Text style={{ fontSize: variables.scale(30), color: "red" }}>175.000 đ</Text>
                    </CardItem>
                </Card>
            </Content>

        );
    }
}