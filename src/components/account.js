import React, { Component } from 'react';
import { 
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    Image,
    Dimensions
} from 'react-native';

const {width,height} = Dimensions.get('window');

export default class Account extends Component {
    state = { 
        br : [
            'red',
            'blue',
            'yellow',
            'lightblue',
            'gray',
            '#fff',
            'black'
          ],
          selectedColor: 'red'
     }
    randomBRStatusbar(){
        var item = this.state.br[Math.floor(Math.random()*this.state.br.length)];
        this.setState({selectedColor: item});
    }
    render() {
        return (
            <View  style={{flex:1}}>
                <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true}/>
                <View style={{height:height/5,backgroundColor:this.state.selectedColor}}>
                    <View style={{height:50,flexDirection:'row',alignItems: 'center',marginTop: 15,marginLeft: 10,}}>
                        <Image 
                            style={{width:26,height:26,resizeMode:'cover',borderRadius: 13}}
                            source={{uri:'https://scontent.fsgn5-6.fna.fbcdn.net/v/t1.0-1/c0.0.160.160a/p160x160/50221123_305850343391627_5159029039947579392_n.jpg?_nc_cat=109&_nc_eui2=AeFcmzp4RtXvgaLzN7ovdsi926yZuhRPOOB7sz10la90ohTl-mEcJcoihIZuXMz9QoO8mWoWzlI7fWg47XFwR9y-tB9tUAJtl5tcpUy-Yjrf2A&_nc_oc=AQlzgz5N2CDKeFB8itcmLxxvzI59gH3P_hmcv6QBB0DVLSwc1t5AZyDBollg2EC1Mfw&_nc_ht=scontent.fsgn5-6.fna&oh=ad8d591a137528af0e2d74cd7f9e4a4d&oe=5D50A210'}}
                        />
                        <View style={{marginLeft: 5}}>
                            <Text style={{color:'#fff',fontWeight:'bold',fontSize: 12}}>Hinh Văn</Text>
                            <Text style={{color:'#fff',fontSize: 10,fontWeight:'bold'}}>Thêm số điện thoại để bảo mật tài khoản ></Text>
                        </View>
                        <View style={{flex:1,alignItems:'flex-end',marginRight: 10,}}>
                            <Image 
                                style={{width:16,height:16,resizeMode:'cover',borderRadius: 13}}
                                source={{uri:'https://img.icons8.com/ios/2x/settings.png'}}
                            />
                        </View>
                        
                    </View>
                    <View style={{flex:1,flexDirection:'row',alignItems: 'center',justifyContent: 'center'}}>
                        <View style={{flex:1,justifyContent:"center",alignItems:'center'}}>
                            <Text style={{color:'#fff',fontWeight:'bold',fontSize: 15}}>0</Text>
                            <Text style={{color:'#fff',fontSize:10}}>Yêu thích</Text>
                            <Text style={{color:'#fff',fontSize:10}}>của tôi</Text>
                        </View>
                        <View style={{flex:1,justifyContent:"center",alignItems:'center'}}>
                            <Text style={{color:'#fff',fontWeight:'bold',fontSize: 15}}>0</Text>
                            <Text style={{color:'#fff',fontSize:10}}>Gian hàng</Text>
                            <Text style={{color:'#fff',fontSize:10}}>đã theo dõi</Text>
                        </View>
                        <View style={{flex:1,justifyContent:"center",alignItems:'center'}}>
                            <Text style={{color:'#fff',fontWeight:'bold',fontSize: 15}}>1</Text>
                            <Text style={{color:'#fff',fontSize:10}}>Mã giảm</Text>
                            <Text style={{color:'#fff',fontSize:10}}>giá</Text>
                        </View>
                    </View>
                    
                </View>
                <View style={{height:height/3,backgroundColor:'#fff'}}>
                    <View style={{flexDirection:'row',alignItems:'center',margin:7}}>
                        <Text style={{color:'black',fontWeight:'bold'}}>Đơn hàng của tôi</Text>
                        <View style={{flex:1,alignItems:'flex-end'}}>
                            <Text style={{color:'red',fontSize:10}}>Xem tất cả đơn hàng ></Text>
                        </View>
                    </View>
                    <View style={{flex:2,flexDirection:'row',alignItems: 'center',justifyContent: 'center'}}>
                        <View style={{flex:1,justifyContent:"center",alignItems:'center'}}>
                            <Image 
                                style={{width:26,height:26,resizeMode:'cover'}}
                                source={{uri:'https://img.icons8.com/dusk/2x/horizontal-settings-mixer-filled.png'}}
                            />
                            <Text style={{color:'black',fontSize:10,marginTop:8}}>Chờ</Text>
                            <Text style={{color:'black',fontSize:10}}>thanh toán</Text>
                        </View>
                        <View style={{flex:1,justifyContent:"center",alignItems:'center'}}>
                            <Image 
                                style={{width:26,height:26,resizeMode:'cover'}}
                                source={{uri:'https://img.icons8.com/nolan/2x/pictures-folder.png'}}
                            />
                            <Text style={{color:'black',fontSize:10,marginTop:8}}>Chờ</Text>
                            <Text style={{color:'black',fontSize:10}}>vận chuyển</Text>
                        </View>
                        <View style={{flex:1,justifyContent:"center",alignItems:'center'}}>
                            <Image 
                                style={{width:26,height:26,resizeMode:'cover'}}
                                source={{uri:'https://img.icons8.com/color/2x/fiat-500.png'}}
                            />
                            <Text style={{color:'black',fontSize:10,marginTop:8}}>Chờ</Text>
                            <Text style={{color:'black',fontSize:10}}>giao hàng</Text>
                        </View>
                        <View style={{flex:1,justifyContent:"center",alignItems:'center'}}>
                            
                            <Image 
                                style={{width:26,height:26,resizeMode:'cover'}}
                                source={{uri:'https://img.icons8.com/color/2x/speech-bubble-with-dots.png'}}
                            />
                            
                            <Text style={{color:'black',fontSize:10,marginTop:8}}>Chưa</Text>
                            <Text style={{color:'black',fontSize:10}}>đánh giá</Text>
                        </View>
                    </View>
                    <View style={{flex:1,backgroundColor:'',flexDirection:'row'}}>
                        <View style={{flex:1,justifyContent:"center",alignItems:'center',flexDirection: 'row'}}>
                            <Image 
                                style={{width:16,height:16,resizeMode:'cover'}}
                                source={{uri:'https://img.icons8.com/dusk/2x/return.png'}}
                            />
                            <Text style={{color:'black',fontSize:10,marginLeft:7}}>Đơn hàng đổi trả</Text>
                        </View>
                        <View style={{flex:1,justifyContent:"center",alignItems:'center',flexDirection: 'row'}}>
                            <Image 
                                style={{width:16,height:16,resizeMode:'cover'}}
                                source={{uri:'https://img.icons8.com/color/2x/delete-property.png'}}
                            />
                            <Text style={{color:'black',fontSize:10,marginLeft:7}}>Đơn hàng đã hủy</Text>
                        </View>
                    </View>
                    <View style={{flex:2,backgroundColor:'#EEEEEE',margin:10,justifyContent:'center'}}>
                        <Text style={{margin:7,color:'black',fontSize:10,fontWeight:'normal'}}>Kiểm tra kiện hàng</Text>
                        <View style={{flex:1,flexDirection:'row'}}>
                            <Image 
                                style={{width:40,height:36,resizeMode:'cover',marginLeft: 7,marginRight:7}}
                                source={{uri:'https://vn-test-11.slatic.net/p/a0affaa0836a47ac00c98ac94f85e995.jpg'}}
                            />
                            <View style={{flex:3}}>
                                <Text style={{color:'#43CD80',fontSize:11,fontWeight:'bold'}}>Đã giao hàng ></Text>
                                <Text style={{fontSize:10}}>Kiện hàng của bạn đã được giao thành công</Text>
                            </View>
                            <View style={{flex:1}}>
                                <Text style={{fontSize:12}}>10:00 thg 3 14</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{height:height/4,backgroundColor:'#fff',marginTop:13,padding:7}}>
                    <View style={{borderBottomWidth:1,borderColor:'#EEEEEE',justifyContent:'center',padding:7}}>
                        <Text style={{color:'black',fontWeight:'bold'}}>Dịch vụ của tôi</Text>
                    </View>
                    <View style={{borderBottomWidth:1,borderColor:'#EEEEEE',flex:1,justifyContent:'center',flexDirection: 'row'}}>
                        <View style={{flex:1,flexDirection: 'row',padding:7,borderRightWidth: 1,borderColor:'#EEEEEE'}}>
                            <Text style={{fontSize:12}}>Tin nhắn</Text>
                            <View style={{flex:1,alignItems:'flex-end'}}>
                                <Text style={{fontSize:12}}>></Text>
                            </View>
                        </View>
                        <View style={{flex:1,flexDirection: 'row',padding:7}}>
                            <Text style={{fontSize:12}}>Đánh giá của tôi</Text>
                            <View style={{flex:1,alignItems:'flex-end'}}>
                                <Text style={{fontSize:12}}>></Text>
                            </View>
                        </View>
                    </View>
                    <View style={{borderBottomWidth:1,borderColor:'#EEEEEE',flex:1,justifyContent:'center',flexDirection: 'row'}}>
                        <View style={{flex:1,flexDirection: 'row',padding:7,borderRightWidth: 1,borderColor:'#EEEEEE'}}>
                            <Text style={{fontSize:12}}>Tùy chọn thanh toán</Text>
                            <View style={{flex:1,alignItems:'flex-end'}}>
                                <Text style={{fontSize:12}}>></Text>
                            </View>
                        </View>
                        <View style={{flex:1,flexDirection: 'row',padding:7}}>
                            <Text style={{fontSize:12}}>Chat với CLEO</Text>
                            <View style={{flex:1,alignItems:'flex-end'}}>
                                <Text style={{fontSize:12}}>></Text>
                            </View>
                        </View>
                    </View>
                    <View style={{borderBottomWidth:1,borderColor:'#EEEEEE',flex:1,justifyContent:'center',flexDirection: 'row'}}>
                        <View style={{flex:1,flexDirection: 'row',padding:7,borderRightWidth: 1,borderColor:'#EEEEEE'}}>
                            <Text style={{fontSize:12}}>Trợ giúp</Text>
                            <View style={{flex:1,alignItems:'flex-end'}}>
                                <Text style={{fontSize:12}}>></Text>
                            </View>
                        </View>
                        <View style={{flex:1,flexDirection: 'row',padding:7}}>
                            <Text style={{fontSize:12}}>Miễn phí vận chuyển</Text>
                            <View style={{flex:1,alignItems:'flex-end'}}>
                                <Text style={{fontSize:12}}>></Text>
                            </View>
                        </View>
                    </View>
                    <View style={{flex:1,justifyContent:'center',flexDirection: 'row'}}>
                        <View style={{flex:1,flexDirection: 'row',padding:7,borderRightWidth: 1,borderColor:'#EEEEEE'}}>
                            <Text style={{fontSize:12}}>Bán hàng trên Mozala</Text>
                            <View style={{flex:1,alignItems:'flex-end'}}>
                                <Text style={{fontSize:12}}>></Text>
                            </View>
                        </View>
                        <View style={{flex:1,flexDirection: 'row',padding:7}}>
                            {/* <Text style={{fontSize:12}}>Đánh giá của tôi</Text>
                            <View style={{flex:1,alignItems:'flex-end'}}>
                                <Text style={{fontSize:12}}>></Text>
                            </View> */}
                        </View>
                    </View>
                    
                </View>
            </View>
        );
    }
}