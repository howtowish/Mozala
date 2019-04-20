import React, { Component } from 'react';
import { 
    View,
    WebView
} from 'react-native';

export default class Help extends Component {
    state = {  }
    static navigationOptions = {
        header: null,
      };
    render() {
        return (
            <View style={{flex:1}}>
                <WebView 
                    source={{uri:'https://www.lazada.vn/helpcenter/'}}
                />
            </View>
        );
    }
}