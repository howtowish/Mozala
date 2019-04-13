/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import {StatusBar } from 'react-native';
import {Container,Content } from 'native-base'
import SplashScreen from 'react-native-splash-screen'
import AppT from './src/App'

export default class App extends Component{
  componentDidMount() {
      SplashScreen.hide();
  }
  render() {
    return (
      <Container>
         <StatusBar hidden />
        <AppT />
      </Container>
    );
  }
}