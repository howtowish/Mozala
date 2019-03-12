// RNRF logic here
import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Welcome from './components/welcome.js';
import RepoList from './components/repolist.js';
import RepoInfo from './components/repoinfo.js';
import Main from './components/main';
import * as contants from './constants'
import Home from './components/home'
export default class App extends Component{
  render(){
    return(
      <Router hideNavBar= "true">
        <Scene key="root">
          <Scene key="main" component={Main} title="Main" initial={true} />
          <Scene key="wellcome" component={Welcome} title="Welcome"  />
          <Scene key="RepoList" component={RepoList} title="RepoList" />
          <Scene key="RepoInfo" component={RepoInfo} title="RepoInfo" />
        </Scene>
      </Router>
    );
  }
}
