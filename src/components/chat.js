import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {GiftedChat, Actions, Bubble, SystemMessage} from 'react-native-gifted-chat';
import CustomActions from '../ui/templates/chat/CustomActions';
import CustomView from '../ui/templates/chat/CustomView';

export default class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      loadEarlier: true,
      typingText: null,
      isLoadingEarlier: false,
      m : [
        'My name is Funny. What is yours ?',
        'Nice to meet you, too !',
        'Pp. See ya',
        'What proplem ?',
        "oh. I also want to but we can't. you knowed that: ((",
        'Talk to me whenever you need',
        'Pp',
        'Nice to meet you, too !',
        'Pp. See ya'
      ],
      dem : 0
    };

    this._isMounted = false;
    this.onSend = this.onSend.bind(this);
    this.onReceive = this.onReceive.bind(this);
    this.renderCustomActions = this.renderCustomActions.bind(this);
    this.renderBubble = this.renderBubble.bind(this);
    this.renderSystemMessage = this.renderSystemMessage.bind(this);
    this.renderFooter = this.renderFooter.bind(this);
    this.onLoadEarlier = this.onLoadEarlier.bind(this);

    this._isAlright = null;
  }

  componentWillMount() {
    this._isMounted = true;
    this.setState(() => {
      return {
        messages: require('../ui/templates/chat/messages'),
      };
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  onLoadEarlier() {
    this.setState((previousState) => {
      return {
        isLoadingEarlier: true,
      };
    });

    setTimeout(() => {
      if (this._isMounted === true) {
        this.setState((previousState) => {
          return {
            messages: GiftedChat.prepend(previousState.messages, require('../ui/templates/chat/old_messages')),
            loadEarlier: false,
            isLoadingEarlier: false,
          };
        });
      }
    }, 1000); // simulating network
  }
  
  onSend(messages = []) {
    
    this.setState((previousState) => {
      return {
        messages: GiftedChat.append(previousState.messages, messages),
      };
    });

    // this.answerDemo(messages);
  }
  
  answerDemo(messages) {

    console.log(messages);
    // setTimeout(() => {
    //   if (messages.length > 0) {
    //     if ((messages[0].text || messages[0].location) || !this._isAlright) {
    //       this.setState((previousState) => {
    //         return {
    //           typingText: 'Funny is replying'
    //         };
    //       });
    //     }
    //   }
    // }, 3000);
    if (messages.length > 0) {
          if ((messages[0].text || messages[0].location) || !this._isAlright) {
            this.setState((previousState) => {
              return {
                typingText: 'Funny is replying'
              };
            });
          }
        }
    
    setTimeout(() => {
      // if (this._isMounted === true) {
      //   if (messages.length > 0) {
      //     if (messages[0].image) {
      //       this.onReceive('Nice picture!');
      //     } else if (messages[0].location) {
      //       this.onReceive('My favorite place');
      //     } else {
      //       if (!this._isAlright) {
      //         this._isAlright = true;
      //         // this.onReceive('I am Funny. Nice to meet you !');
      //       }
      //     }
      //   }
      
      // }
      this._isAlright = true;
      this.onReceive(this.state.m[this.state.dem]);
      this.setState({dem:this.state.dem+1});
      this.setState((previousState) => {
        return {
          typingText: null,
        };
      });
    }, 1000);
  }

  onReceive(text) {
    this.setState((previousState) => {
      return {
        messages: GiftedChat.append(previousState.messages, {
          _id: Math.round(Math.random() * 1000000),
          text: text,
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'Funny',
            // avatar: 'https://facebook.github.io/react/img/logo_og.png',
          },
        }),
      };
    });
  }

  renderCustomActions(props) {
    if (Platform.OS === 'ios') {
      return (
        <CustomActions
          {...props}
        />
      );
    }
    const options = {
      'Action 1': (props) => {
        alert('option 1');
      },
      'Action 2': (props) => {
        alert('option 2');
      },
      'Cancel': () => {},
    };
    return (
      <Actions
        {...props}
        options={options}
      />
    );
  }

  renderBubble(props) {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          left: {
            backgroundColor: '#f0f0f0',
          }
        }}
      />
    );
  }

  renderSystemMessage(props) {
    return (
      <SystemMessage
        {...props}
        containerStyle={{
          marginBottom: 15,
        }}
        textStyle={{
          fontSize: 14,
        }}
      />
    );
  }

  renderCustomView(props) {
    return (
      <CustomView
        {...props}
      />
    );
  }

  renderFooter(props) {
    if (this.state.typingText) {
      return (
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>
            {this.state.typingText}
          </Text>
        </View>
      );
    }
    return null;
  }

  render() {
    return (
      <View style={{flex: 1,backgroundColor: ''}}>
        <View  style={{height: 40,backgroundColor: 'lightblue',justifyContent: 'center',alignItems: 'center',}}>
          <Text style={{color: '#fff',fontSize: 20}}>Demo auto response</Text>
        </View>
        <GiftedChat
        messages={this.state.messages}
        onSend={this.onSend}
        loadEarlier={this.state.loadEarlier}
        onLoadEarlier={this.onLoadEarlier}
        isLoadingEarlier={this.state.isLoadingEarlier}
        user={{
          _id: 1, // sent messages should have same user._id
        }}

        renderActions={this.renderCustomActions}
        renderBubble={this.renderBubble}
        renderSystemMessage={this.renderSystemMessage}
        renderCustomView={this.renderCustomView}
        renderFooter={this.renderFooter}
        
      />
      </View>
      // <GiftedChat
      //   messages={this.state.messages}
      //   onSend={this.onSend}
      //   loadEarlier={this.state.loadEarlier}
      //   onLoadEarlier={this.onLoadEarlier}
      //   isLoadingEarlier={this.state.isLoadingEarlier}

      //   user={{
      //     _id: 1, // sent messages should have same user._id
      //   }}

      //   renderActions={this.renderCustomActions}
      //   renderBubble={this.renderBubble}
      //   renderSystemMessage={this.renderSystemMessage}
      //   renderCustomView={this.renderCustomView}
      //   renderFooter={this.renderFooter}
        
      // />
      
    );
  }
}

const styles = StyleSheet.create({
  footerContainer: {
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  footerText: {
    fontSize: 14,
    color: '#aaa',
  },
});