import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './components/login';
import Signup from './components/signup';
import HeaderComponent from './components/header';
import SignUpView from './components/signup2';
import Map from './components/map'
import { render } from 'react-dom';
import SearchComponent from './components/searchComponent'

import { SearchBar } from 'react-native-elements'
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  }, 
  searBar : {
    width: 50,
    padding:20
  }
});

export default  App =(props) =>  (
          <SearchComponent />
      );
 


