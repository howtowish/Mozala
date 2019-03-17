import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Row, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { Platform, View, ScrollView, StatusBar, SafeAreaView } from 'react-native';
import variables from '../../../native-base-theme/variables/material'
export default class CardCollect extends Component {
    render() {
        return (
            <ScrollView
                style={{ flex: 1 }}
                scrollEventThrottle={200}
                directionalLockEnabled={true}
                horizontal={true}
            >
                <Row>
                    <Content style={{ width: variables.scale(400) }}>
                        <Card >
                            <CardItem >
                                <Text style={{ fontSize: variables.scale(25), color: "green" }}>Gift for her in 8 Mar></Text>
                                <Text style={{ fontSize: variables.scale(25), color: "green" }}>28k</Text>
                            </CardItem>
                            <Text note style={{ fontSize: variables.scale(23), color: "green" }}>Buy what for your love in 8 mar</Text>
                            <CardItem cardBody>
                                <Image source={{ uri: 'http://sohanews.sohacdn.com/thumb_w/660/2018/11/29/photo-1-15434827229601880588731-crop-1543482876002549927858.jpg' }} style={{ height: variables.scale(200), width: null, flex: 1, resizeMode: "stretch" }} />
                            </CardItem>
                        </Card>
                    </Content>
                </Row>
                <Row>
                    <Content style={{ width: variables.scale(400) }}>
                        <Card >
                            <CardItem >
                                <Text style={{ fontSize: variables.scale(25), color: "green" }}>Gift for her in 8 Mar></Text>
                                <Text style={{ fontSize: variables.scale(25), color: "green" }}>28k</Text>
                            </CardItem>
                            <Text note style={{ fontSize: variables.scale(23), color: "green" }}>Buy what for your love in 8 mar</Text>
                            <CardItem cardBody>
                                <Image source={{ uri: 'http://sohanews.sohacdn.com/thumb_w/660/2018/11/29/photo-1-15434827229601880588731-crop-1543482876002549927858.jpg' }} style={{ height: variables.scale(200), width: null, flex: 1, resizeMode: "stretch" }} />
                            </CardItem>
                        </Card>
                    </Content>
                </Row>
                <Row>
                    <Content style={{ width: variables.scale(400) }}>
                        <Card >
                            <CardItem >
                                <Text style={{ fontSize: variables.scale(25), color: "green" }}>Gift for her in 8 Mar></Text>
                                <Text style={{ fontSize: variables.scale(25), color: "green" }}>28k</Text>
                            </CardItem>
                            <Text note style={{ fontSize: variables.scale(23), color: "green" }}>Buy what for your love in 8 mar</Text>
                            <CardItem cardBody>
                                <Image source={{ uri: 'http://sohanews.sohacdn.com/thumb_w/660/2018/11/29/photo-1-15434827229601880588731-crop-1543482876002549927858.jpg' }} style={{ height: variables.scale(200), width: null, flex: 1, resizeMode: "stretch" }} />
                            </CardItem>
                        </Card>
                    </Content>
                </Row>
                <Row>
                    <Content style={{ width: variables.scale(400) }}>
                        <Card >
                            <CardItem >
                                <Text style={{ fontSize: variables.scale(25), color: "green" }}>Gift for her in 8 Mar></Text>
                                <Text style={{ fontSize: variables.scale(25), color: "green" }}>28k</Text>
                            </CardItem>
                            <Text note style={{ fontSize: variables.scale(23), color: "green" }}>Buy what for your love in 8 mar</Text>
                            <CardItem cardBody>
                                <Image source={{ uri: 'http://sohanews.sohacdn.com/thumb_w/660/2018/11/29/photo-1-15434827229601880588731-crop-1543482876002549927858.jpg' }} style={{ height: variables.scale(200), width: null, flex: 1, resizeMode: "stretch" }} />
                            </CardItem>
                        </Card>
                    </Content>
                </Row>
                <Row>
                    <Content style={{ width: variables.scale(400) }}>
                        <Card >
                            <CardItem >
                                <Text style={{ fontSize: variables.scale(25), color: "green" }}>Gift for her in 8 Mar></Text>
                                <Text style={{ fontSize: variables.scale(25), color: "green" }}>28k</Text>
                            </CardItem>
                            <Text note style={{ fontSize: variables.scale(23), color: "green" }}>Buy what for your love in 8 mar</Text>
                            <CardItem cardBody>
                                <Image source={{ uri: 'http://sohanews.sohacdn.com/thumb_w/660/2018/11/29/photo-1-15434827229601880588731-crop-1543482876002549927858.jpg' }} style={{ height: variables.scale(200), width: null, flex: 1, resizeMode: "stretch" }} />
                            </CardItem>
                        </Card>
                    </Content>
                </Row>
            </ScrollView>
        );
    }
}