import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, Col, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Row } from 'native-base';
import variables from '../../../native-base-theme/variables/material'
import { View } from 'react-native'
export default class CardDealHome extends Component {
    render() {
        return (
            <Content>
                <Card >
                    <CardItem cardBody>
                        <Icon name="heart" style={{ color: '#ED4A6A' }} />
                        <Col>
                            <Text style={{ fontSize: variables.scale(20), fontWeight: "bold" }}>Còi xe máy</Text>
                            <Text note style={{ fontSize: variables.scale(20) }}> 1042 Người muốn mua</Text>
                        </Col>

                        <Image source={{ uri: 'http://sohanews.sohacdn.com/thumb_w/660/2018/11/29/photo-1-15434827229601880588731-crop-1543482876002549927858.jpg' }} style={{ height: variables.scale(150), width: variables.scale(150) }} />
                    </CardItem>
                </Card>
            </Content>

        );
    }
}