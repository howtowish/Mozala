import React, { Component } from 'react';
import { View, Text } from 'react-native'
import { Container, Header, Tab, Tabs, ScrollableTab,Left, Right,Body } from 'native-base';
// import { Header } from '../../ui/templates/HeaderHome'
import FOLLOW from './follow';
import DISCOVER from './discover'
class Walk extends Component {
    render() {
        return (
            <Container>
                <Header hasTabs style={{ backgroundColor: 'red' }}>
                    <Left>
                        <Text style={{color:"white",fontSize:23}}>Dạo</Text>
                    </Left>
                    <Body>

                    </Body>
                    <Right>

                    </Right>
                </Header>
                <Tabs >
                    <Tab heading="ĐANG THEO DÕI" tabStyle={{ backgroundColor: 'red' }} activeTabStyle={{ backgroundColor: 'red' }} activeTextStyle={{ color: '#fff', fontWeight: 'normal' }}>
                        <FOLLOW />
                    </Tab>
                    <Tab heading="KHÁM PHÁ" tabStyle={{ backgroundColor: 'red' }} activeTabStyle={{ backgroundColor: 'red' }} activeTextStyle={{ color: '#fff', fontWeight: 'normal' }}>
                        <DISCOVER />
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}
export default Walk;
