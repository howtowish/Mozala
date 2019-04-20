import React, { Component } from 'react';
import { 
    View,Text,TouchableOpacity,Dimensions,Image,FlatList
} from 'react-native';
const {w,h} = Dimensions.get('window');
export default class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            
            data : [
                {key : 1,title : 'Tận hưởng cuối tuần thảnh thơi',Decripton : 'Điện gia dụng, TV, âm thanh giảm đến 49%:Các loại âm thanh chỉ từ 199k',image : 'https://laz-img-cdn.alicdn.com/images/ims-web/TB1z73kRHvpK1RjSZFqXXcXUVXa.jpg_1200x1200Q100.jpg_.webp'},
                {key : 2,title : 'Tận hưởng cuối tuần thảnh thơi',Decripton : 'Điện gia dụng, TV, âm thanh giảm đến 49%:Các loại âm thanh chỉ từ 199k',image : 'https://laz-img-cdn.alicdn.com/images/ims-web/TB1Od3yRNYaK1RjSZFnXXa80pXa.jpg_1200x1200.jpg'},
                {key : 3,title : 'Tận hưởng cuối tuần thảnh thơi',Decripton : 'Điện gia dụng, TV, âm thanh giảm đến 49%:Các loại âm thanh chỉ từ 199k',image : 'https://laz-img-cdn.alicdn.com/images/ims-web/TB1dCAyRNYaK1RjSZFnXXa80pXa.jpg_1200x1200Q100.jpg_.webp'},
                {key : 4,title : 'Tận hưởng cuối tuần thảnh thơi',Decripton : 'Điện gia dụng, TV, âm thanh giảm đến 49%:Các loại âm thanh chỉ từ 199k',image : 'https://laz-img-cdn.alicdn.com/images/ims-web/TB1QVkjRRLoK1RjSZFuXXXn0XXa.jpg_1200x1200Q100.jpg_.webp'},
                {key : 5,title : 'Tận hưởng cuối tuần thảnh thơi',Decripton : 'Điện gia dụng, TV, âm thanh giảm đến 49%:Các loại âm thanh chỉ từ 199k',image : 'https://laz-img-cdn.alicdn.com/images/ims-web/TB1uaUFRNYaK1RjSZFnXXa80pXa.jpg_1200x1200Q100.jpg_.webp'},
                {key : 6,title : 'Tận hưởng cuối tuần thảnh thơi',Decripton : 'Điện gia dụng, TV, âm thanh giảm đến 49%:Các loại âm thanh chỉ từ 199k',image : 'https://laz-img-cdn.alicdn.com/images/ims-web/TB1e3kpRRLoK1RjSZFuXXXn0XXa.jpg_1200x1200Q100.jpg_.webp'}
            ],
            
        }
    }
    _renderItem = ({item}) => (
        <TouchableOpacity style={{flex:1,flexDirection:'row',padding:10,elevation:7,backgroundColor:'#fff',marginTop:10}} key = {item.key}>
            <View style={{flex:1}}>
                <Image 
                    source={{uri:'https://img.icons8.com/cotton/2x/commercial--v2.png'}}
                    style={{width:26,height:26}}
                />
            </View>
            <View style={{flex:8}}>
                <Text style={{color:'black',fontWeight:'bold'}}>{item.title}</Text>
                <Text numberOfLines={2}>{item.Decripton}</Text>
                <Image 
                    source={{uri:item.image}}
                    style={{height:100}}
                />
            </View>
            
        </TouchableOpacity>
      );
    render() {
        return (
            <View style={{flex:1}}>
                <View style={{flex:1,backgroundColor:'#ff4500',justifyContent:'center',alignItems:'center'}}>
                    <Text style={{color:'#fff',fontWeight:'bold'}}>Tin nhắn</Text>
                </View>
                <View style={{flex:1,elevation:7,flexDirection:'row',backgroundColor:'#fff'}}>
                    <TouchableOpacity style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <Image 
                            style={{width:26,height:26}}
                            source={{uri:'https://img.icons8.com/ultraviolet/2x/sms.png'}}
                        />
                        <Text style={{fontSize:10}}>Trò chuyện</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <Image 
                            style={{width:26,height:26}}
                            source={{uri:'https://img.icons8.com/dusk/2x/purchase-order.png'}}
                        />
                        <Text style={{fontSize:10}}>Đơn hàng</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <Image 
                            style={{width:26,height:26}}
                            source={{uri:'https://img.icons8.com/ultraviolet/2x/novel.png'}}
                        />
                        <Text style={{fontSize:10}}>Yêu thích</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <Image 
                            style={{width:26,height:26}}
                            source={{uri:'https://img.icons8.com/dusk/2x/commercial.png'}}
                        />
                        <Text style={{fontSize:10}}>Khuyễn mãi</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flex:10}}>
                    <FlatList 
                        data={this.state.data}
                        renderItem={this._renderItem}
                    />
                </View>
            </View>
        );
    }
}