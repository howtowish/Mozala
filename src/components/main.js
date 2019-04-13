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
import Walk from '../components/walk/walk';
import Giohang from './giohang';
import Chat from './chat';
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
                <TabNavigator  tabBarStyle={{backgroundColor:'#fff',padding:2}}>
                    <TabNavigator.Item 
                        selected={this.state.selectedTab === 'Home'}
                        //title="Home"
                        
                        renderIcon={() => <Image style={{width:26,height:26,resizeMode:'cover'}} source={{uri:'https://png.icons8.com/ios/2x/home-page.png'}} />}
                        renderSelectedIcon={() => <Image style={{width:26,height:26,resizeMode:'cover'}}  source={{uri:'https://png.icons8.com/office/2x/home-page.png'}} />}
                        //badgeText="1"
                        selected={this.state.selected}
                        onPress={() => this.setState({ selectedTab: 'Home',selected:true })}>
                        {<Home />}
                    </TabNavigator.Item>
                    <TabNavigator.Item 
                        selected={this.state.selectedTab === 'Page'}
                        //title="Home"
                        
                        renderIcon={() => <Image style={{width:26,height:26,resizeMode:'cover'}} source={{uri:'https://img.icons8.com/wired/2x/browser-window.png'}} />}
                        renderSelectedIcon={() => <Image style={{width:26,height:26,resizeMode:'cover'}}  source={{uri:'https://img.icons8.com/dusk/2x/browser-window.png'}} />}
                        //badgeText="1"
              
                        onPress={() => this.setState({ selectedTab: 'Page',selected:false })}> 
                        {<Walk />}
                    </TabNavigator.Item>
                    
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'Messenger'}
                        //title="Profile"
                        renderIcon={() => <Image style={{width:26,height:26,resizeMode:'cover'}} source={{uri:'https://img.icons8.com/wired/2x/facebook-messenger.png'}} />}
                        renderSelectedIcon={() => <Image style={{width:26,height:26,resizeMode:'cover'}}  source={{uri:'https://img.icons8.com/dusk/2x/facebook-messenger.png'}} />}
                        //badgeText="1"
                        onPress={() => {this.setState({ selectedTab: 'Messenger',selected : false })}}>
                        {<Chat style={{flex:1}}/>}
                    </TabNavigator.Item>
                    
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'Giohang'}
                        // title="Giỏ hàng"
                        renderIcon={() => <Image style={{width:26,height:26,resizeMode:'cover'}} source={{uri:'https://img.icons8.com/wired/2x/add-shopping-cart.png'}} />}
                        renderSelectedIcon={() => <Image style={{width:26,height:26,resizeMode:'cover'}}  source={{uri:'https://img.icons8.com/dusk/2x/add-shopping-cart.png'}} />}
                        badgeText="2"
                        onPress={() => {this.setState({ selectedTab: 'Giohang',selected : false })}}>
                        {<Giohang style={{flex: 1}}/>}
                    </TabNavigator.Item>

                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'Account'}
                        // title="Profile"
                        renderIcon={() => <Image style={{width:26,height:26,resizeMode:'cover'}} source={{uri:'https://img.icons8.com/ios/2x/gender-neutral-user.png'}} />}
                        renderSelectedIcon={() => <Image style={{width:26,height:26,resizeMode:'cover'}}  source={{uri:'https://img.icons8.com/ultraviolet/2x/guest-male.png'}} />}
                        // badgeText="1"
                        onPress={() => {this.setState({ selectedTab: 'Account',selected : false })}}>
                        {<Account style={{flex: 1}}/>}
                    </TabNavigator.Item>


                    
                    
                </TabNavigator>
            </View>
        );
    }
}
