import React, { Component } from 'react';
import { Row } from 'native-base';
// import { Actions } from 'react-native-router-flux'
import Search from 'react-native-search-box';
import { View } from 'react-native'
import variables from '../../../native-base-theme/variables/material'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
class HeaderHome extends Component {

    render() {
        // const { search } = this.state;
        return (
            <View style={{ flex: 0.3 }}>
                <View style={{ flex: 1, backgroundColor: "red" }}>

                    <Row style={{ alignItems: "center" }}>
                        <View style={{ marginLeft: variables.scale(20), marginRight: variables.scale(20) }}>
                            <Icon size={variables.scale(40)} name="camera" />
                        </View>
                        <View style={{ flex: 1 }}>
                            <Search
                                ref="search_box"
                            />
                        </View>
                        <View style={{ marginLeft: variables.scale(20), marginRight: variables.scale(20) }}>
                            <Icon size={variables.scale(40)} name="camera" />
                        </View>
                    </Row>
                </View>
                {/* <View style={{
                    width: 0,
                    height: 0,
                    backgroundColor: 'transparent',
                    borderStyle: 'solid',
                    borderRightWidth: 500,
                    borderTopWidth: 100,
                    borderRightColor: 'transparent',
                    borderTopColor: 'red',
                    transform: [
                        { rotate: '0deg' },

                    ]
                }} >

                </View> */}
            
            </View>
        );
    }
}

export default HeaderHome
