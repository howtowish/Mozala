import React, { Component } from 'react';
import { ListView, Dimensions,View,Image,FlatList,TouchableOpacity } from 'react-native';
import { Container, Header, Content, Button, Icon, List, ListItem, Text, Card, CardItem,SwipeRow,CheckBox,Body } from 'native-base';
import NumberFormat from 'react-number-format';
import { showMessage, hideMessage } from "react-native-flash-message";
import FlashMessage from "react-native-flash-message";
const {width,height}  = Dimensions.get('window');
console.disableYellowBox=true;
export default class GioHang extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      basic: true,
      checked : false,
      data: [
        { key: "1", Anh: 'https://vn-test-11.slatic.net/p/f1381cc89fc2a773882e258c0edae2c5.jpg_80x80Q100.jpg_.webp',TenSP:'Đồng hồ thời trang nam 1',MoTaSP:"Kiểu máy: Quartz (linh kiện Nhật) Chất liệu vỏ: Thép không gỉ Chất liệu dây: Thép không gỉ (dây lưới) Chất liệu mặt trước: Kính cứng pha khoáng, chống trầy cơ bản",GiaSP:2000000,check:true }, 
        { key: "2", Anh: 'https://vn-test-11.slatic.net/p/f1381cc89fc2a773882e258c0edae2c5.jpg_80x80Q100.jpg_.webp',TenSP:'Đồng hồ thời trang nam 2',MoTaSP:"Kiểu máy: Quartz (linh kiện Nhật) Chất liệu vỏ: Thép không gỉ Chất liệu dây: Thép không gỉ (dây lưới) Chất liệu mặt trước: Kính cứng pha khoáng, chống trầy cơ bản",GiaSP:2000000 ,check:false }, 
        { key: "3", Anh: 'https://vn-test-11.slatic.net/p/f1381cc89fc2a773882e258c0edae2c5.jpg_80x80Q100.jpg_.webp',TenSP:'Đồng hồ thời trang nam 3',MoTaSP:"Kiểu máy: Quartz (linh kiện Nhật) Chất liệu vỏ: Thép không gỉ Chất liệu dây: Thép không gỉ (dây lưới) Chất liệu mặt trước: Kính cứng pha khoáng, chống trầy cơ bản",GiaSP:2000000 ,check:true }, 
        { key: "4", Anh: 'https://vn-test-11.slatic.net/p/f1381cc89fc2a773882e258c0edae2c5.jpg_80x80Q100.jpg_.webp',TenSP:'Đồng hồ thời trang nam 4',MoTaSP:"Kiểu máy: Quartz (linh kiện Nhật) Chất liệu vỏ: Thép không gỉ Chất liệu dây: Thép không gỉ (dây lưới) Chất liệu mặt trước: Kính cứng pha khoáng, chống trầy cơ bản",GiaSP:2000000 ,check:false }, 
        { key: "5", Anh: 'https://vn-test-11.slatic.net/p/f1381cc89fc2a773882e258c0edae2c5.jpg_80x80Q100.jpg_.webp',TenSP:'Đồng hồ thời trang nam 5',MoTaSP:"Kiểu máy: Quartz (linh kiện Nhật) Chất liệu vỏ: Thép không gỉ Chất liệu dây: Thép không gỉ (dây lưới) Chất liệu mặt trước: Kính cứng pha khoáng, chống trầy cơ bản",GiaSP:2000000 ,check:false }, 
        { key: "6", Anh: 'https://vn-test-11.slatic.net/p/f1381cc89fc2a773882e258c0edae2c5.jpg_80x80Q100.jpg_.webp',TenSP:'Đồng hồ thời trang nam 6',MoTaSP:"Kiểu máy: Quartz (linh kiện Nhật) Chất liệu vỏ: Thép không gỉ Chất liệu dây: Thép không gỉ (dây lưới) Chất liệu mặt trước: Kính cứng pha khoáng, chống trầy cơ bản",GiaSP:2000000,check:false  }, 
      ],
      tien : 0
    };
  }
  componentWillMount(){
    this.ThanhToan();
  }
  _renderList(){
    if(this.state.data.length<1){
      return(
        <View style={{flex:10,justifyContent:'center',alignItems: 'center'}}>
          <Text style={{color:'blue'}}>Giỏ hàng trống</Text>
        </View>
      )
    }
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    return(
      <Container style={{flex:10}}>

          <Content>
          
          <View style={{height:height/20,backgroundColor:'#fff',justifyContent:'center',padding: 10,marginBottom: 15,elevation:7}}>
            <View style={{flexDirection:'row'}}>
                <Image
                  style={{width:16,height:16,resizeMode:'cover'}}
                  source={{uri:'https://img.icons8.com/small/2x/marker.png'}}
                />
                <Text style={{color:'gray',fontSize:11,marginLeft:7}}>Hồ Chí Minh,Quận Thủ Đức,Phường Linh Xuân</Text>
                <View style={{flex:1,alignItems:'flex-end'}}>
                    {/* <Text style={{fontSize:14,color:'gray'}}>></Text> */}
                    <Image 
                      style={{width:14,height:14,resizeMode:'cover'}}
                      source={require('../ui/assets/images/back.png')}
                    />
                </View>
            </View>
          </View>
            <List
        
              // leftOpenValue={75}
              rightOpenValue={-120}
              dataSource={ds.cloneWithRows(this.state.data)}
              renderRow={data =>
                <View style={{backgroundColor:'#fff',padding:10,marginBottom:15,height:height/5,elevation:7}}>
                  <View>
                    <Text style={{color:'#00CC99',fontSize:12}}>Minh Long    ></Text>
                  </View>
                  <View style={{height:1,backgroundColor:'#EEEEEE',marginTop:5}} />
                  <View style={{flex: 1,elevation:7,flexDirection:'row',alignItems: 'center'}}>
                      {/* <CheckBox color={'blue'} style={{width:20,height:20,marginRight:10}} checked={data.check} onPress={()=>{data.check=true}} color="green"/> */}
                      <Image 
                        style={{width:60,height:60,resizeMode:'cover',marginLeft: 10}}
                        source={{uri:data.Anh}}
                      />
                      <View style={{flex:1,padding:10}}>
                        <Text numberOfLines={1} style={{maxWidth:width/3*2,fontSize:10}}>{data.TenSP}</Text>
                        <Text numberOfLines={1} style={{maxWidth:width/3*2,fontSize:10,color:'gray'}}>{data.MoTaSP}</Text>
                        <NumberFormat
                            value={data.GiaSP}
                            displayType={'text'}
                            thousandSeparator={true}
                            suffix={' đ'}
                            renderText={value => <Text style={{color:'red',marginTop:15,fontSize:14,fontWeight:'bold'}}>{value}</Text>} 
                        /> 
                      </View>
                  </View>
                </View>
                }
              // renderLeftHiddenRow={data =>               
              //   <Button style={{flex:1}} full onPress={() => alert(data)}>
              //     <Icon active name="information-circle" />
              //   </Button>
              //  } 
              renderRightHiddenRow={(data, secId, rowId, rowMap) =>
                // <Button full danger onPress={() => {this.deleteRow(secId, rowId, rowMap);alert(data)}}>
                //   <Icon active name="trash" />
                // </Button>
                <View style={{height: height/5,flexDirection:'row',backgroundColor: 'blue',marginBottom: 15,elevation:7}}>
                  <TouchableOpacity style={{flex:1,justifyContent:'center',alignItems: 'center',backgroundColor: 'yellow'}}>
                    <Image 
                      style={{width:20,height:26,resizeMode:'cover'}}
                      source={{uri:'https://img.icons8.com/ios/2x/hearts.png'}}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>{this.deleteRow(secId,rowId,rowMap)}} style={{flex:1,justifyContent:'center',alignItems: 'center',backgroundColor:'red'}}>
                    <Image 
                      style={{width:26,height:26,resizeMode:'cover'}}
                      source={{uri:'https://img.icons8.com/wired/2x/trash.png'}}
                    />
                  </TouchableOpacity>
                </View>
              }
            />
            
          </Content>
          
        </Container>
        
    )
  }
  removeItem(key) {
    let data = this.state.data
    data = data.filter((item) => item.key !== key)
    this.setState({ data })
  }
  ThanhToan(){
    let tien = 0;
    this.state.data.forEach(i=>{
      tien += i.GiaSP
    })
    this.setState({tien})
  }

  async deleteRow(secId, rowId, rowMap) {
    // alert('da xoa ' + this.state.data[rowId].TenSP);
    showMessage({
      message: "Thông báo",
      description: "Đã xóa " + this.state.data[rowId].TenSP,
      type: "info",
      color : '#fff'
    });
   
    await rowMap[`${secId}${rowId}`].props.closeRow();
    const newData = [...this.state.data];
    await newData.splice(rowId, 1);
    await this.setState({ data: newData });
    await this.ThanhToan();
    // setTimeout(()=>this.ThanhToan(),0); 
  }
  
  render() {
    
    return (
      <View style={{flex:1}}>
        
        <View style={{}}>
          <View style={{height:height/14,backgroundColor:'#FF3300',justifyContent:'center',alignItems: 'center'}}>
            <Text style={{color:'#fff',fontSize:12,fontWeight:'bold'}}>Giỏ hàng của tôi ({this.state.data.length})</Text>
          </View>
          
        </View>
        {this._renderList()}
        <View style={{flex:1,backgroundColor:'yellow',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
          <Text style={{color:'blue'}}>Tổng tiền : </Text>
          <NumberFormat
            value={this.state.tien}
            displayType={'text'}
            thousandSeparator={true}
            suffix={' đ'}
            renderText={value => <Text style={{color:'red',fontSize:14,fontWeight:'bold'}}>{value}</Text>} 
          /> 
        </View>
        <FlashMessage position="top" floating={true} duration={1000} icon={'success'}  /> 
      </View>
      
    );
  }
}

