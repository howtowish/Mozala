import React, { Component } from 'react'
import { 
    View,
    Image,
    StatusBar
} from 'react-native';
import Welcome from './welcome';
import RepoInfo from './welcome';
import TabNavigator from 'react-native-tab-navigator';
import A from './a';
import Account from './account';
import Home from '../components/home/home'
export default class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            selected : true
        }
    }
    static navigationOptions = {
        header:null
      };
    render() {
        return (
            <View style={{flex:1,backgroundColor:''}}>
                <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true}/>
                <TabNavigator  tabBarStyle={{backgroundColor:'fff',padding:2}}>
                    <TabNavigator.Item 
                        selected={this.state.selectedTab === 'Welcome'}
                        //title="Home"
                        
                        renderIcon={() => <Image style={{width:26,height:26,resizeMode:'cover'}} source={{uri:'https://png.icons8.com/ios/2x/home-page.png'}} />}
                        renderSelectedIcon={() => <Image style={{width:26,height:26,resizeMode:'cover'}}  source={{uri:'https://png.icons8.com/office/2x/home-page.png'}} />}
                        //badgeText="1"
                        selected={this.state.selected}
                        onPress={() => this.setState({ selectedTab: 'Welcome',selected:true })}>
                        {<Home />}
                    </TabNavigator.Item>
                    
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'A'}
                        //title="Profile"
                        renderIcon={() => <Image style={{width:26,height:26,resizeMode:'cover'}} source={{uri:'https://png.icons8.com/carbon-copy/2x/gender-neutral-user.png'}} />}
                        renderSelectedIcon={() => <Image style={{width:26,height:26,resizeMode:'cover'}}  source={{uri:'https://png.icons8.com/plasticine/2x/gender-neutral-user.png'}} />}
                        //badgeText="1"
                        onPress={() => {this.setState({ selectedTab: 'A',selected : false })}}>
                        {<A style={{flex:1}}/>}
                    </TabNavigator.Item>

                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'RepoInfo'}
                        //title="Profile"
                        renderIcon={() => <Image style={{width:26,height:26,resizeMode:'cover'}} source={{uri:'https://img.icons8.com/ios/2x/worldwide-location.png'}} />}
                        renderSelectedIcon={() => <Image style={{width:26,height:26,resizeMode:'cover'}}  source={{uri:'https://img.icons8.com/color/2x/worldwide-location.png'}} />}
                        //badgeText="1"
                        onPress={() => {this.setState({ selectedTab: 'RepoInfo',selected : false })}}>
                        {<RepoInfo style={{flex:1}}/>}
                    </TabNavigator.Item>
                    
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'Account'}
                        // title="Profile"
                        renderIcon={() => <Image style={{width:26,height:26,resizeMode:'cover'}} source={{uri:'https://cdn4.iconfinder.com/data/icons/users-v1/64/person_user_boss-128.png'}} />}
                        renderSelectedIcon={() => <Image style={{width:26,height:26,resizeMode:'cover'}}  source={{uri:'https://cdn4.iconfinder.com/data/icons/users-v1/64/avatar_person_user-2-128.png'}} />}
                        // badgeText="1"
                        onPress={() => {this.setState({ selectedTab: 'Account',selected : false })}}>
                        {<Account style={{flex: 1}}/>}
                    </TabNavigator.Item>

                    
                </TabNavigator>
            </View>
        );
    }
}