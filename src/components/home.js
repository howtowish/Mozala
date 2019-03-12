import React, { Component } from 'react';
import { Container, Header, Content, Footer, Button, Icon, Text } from 'native-base';
import {Actions} from 'react-native-router-flux'
import FooterTabs from '../ui/templates/FooterTabs'
class Home extends Component {
    static navigationOptions = {
        header:null
      };
    render() {
        return (
            <Container>
                <Header />
                <Content />
             <FooterTabs />
            </Container>
        );
    }
}
export default Home
