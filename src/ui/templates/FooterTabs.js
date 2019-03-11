import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import { Actions } from 'react-native-router-flux'
class FooterTabs extends Component {
    render() {
        return (
                <Footer>
                    <FooterTab>
                        <Button vertical onPress={() => { Actions.wellcome() }} >
                            <Icon name="apps" />
                            <Text>Apps</Text>
                        </Button>
                        <Button vertical>
                            <Icon name="camera" />
                            <Text>Camera</Text>
                        </Button>
                        <Button vertical active>
                            <Icon active name="navigate" />
                            <Text>Navigate</Text>
                        </Button>
                        <Button vertical>
                            <Icon name="person" />
                            <Text>Contact</Text>
                        </Button>
                    </FooterTab>
                </Footer>
        );
    }
}
export default FooterTabs
