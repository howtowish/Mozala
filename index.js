/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import allReducers from './src/reducers/index.js';
import thunk from 'redux-thunk'
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import Main from './src/components/main';
const store = createStore(allReducers, applyMiddleware(thunk));

export default class NativeBaseRedux extends Component {
  render() {
    return (
      <Provider store= {store}>
        <App />
      </Provider>
    );
  }
}
AppRegistry.registerComponent(appName, () => NativeBaseRedux);
