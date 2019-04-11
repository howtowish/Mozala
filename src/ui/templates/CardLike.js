import React, { Component } from 'react';
import { Image,TouchableOpacity,View } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Textarea } from 'native-base';
export default class CardLike extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://lambiendep.com/image/data/poster/1.png'}} />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>GeekyAnts</Text>
                </Body>
              </Left>
              <Right>
                <Button style={{backgroundColor:"#fff",borderColor:"red",borderWidth:1,borderRadius:7}}>
                  <Text style={{color:"black"}}>Theo dõi</Text>
                </Button>
              </Right>
            </CardItem>
            <View style={{padding:10}}>
            <Text>SINH VIÊN ĐẠI HỌC #SƯ_PHẠM_KỶ_THUẬT HỌC TIẾNG ANH HIỆU QUẢ BẰNG MESSENGER

Chức năng: 
- Như một người bạn, một người thầy nhắc nhỡ bạn mỗi ngày. 
- Ví dụ sinh động, giải thích dễ hiểu.
- Mỗi ngày bạn sẽ được học KỸ lưỡng nhờ phần mềm tự học.
- Trong 30 ngày cải thiện rõ rệt.

Bạn Click nút ĐĂNG KÝ để sử dụng MIỄN PHÍ TRỌN ĐỜI nhé</Text>
            <TouchableOpacity>
              <Text style={{color:"red"}}>Xem thêm</Text>
            </TouchableOpacity>
            </View>
            <CardItem cardBody style={{marginHorizontal:10}}>
            
              <Image source={{uri: 'https://lambiendep.com/image/data/poster/1.png'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>15 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}