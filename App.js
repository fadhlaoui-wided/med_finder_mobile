import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './components/login';
import Signup from './components/signup';
import SignUpView from './components/signup2';
import Map from './components/map'
import { render } from 'react-dom';
import { Header } from 'react-native-elements';
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

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }
    render(){
      return (
 
    
    <View style={styles.container}>
      <Header
  statusBarProps={{ barStyle: 'light-content' }}
  barStyle='light-content' // or directly
  leftComponent={{ icon: 'menu', color: '#fff' }}
  centerComponent={{ text: 'Med-Finder', style: { color: '#fff' } }}
  containerStyle={{
    backgroundColor: '#4C525A',
    justifyContent: 'space-around',
  }}
/>

<SearchBar  lightTheme icon={{ type: 'font-awesome', name: 'search' }}  containerStyle={{
    backgroundColor: '#4C525A',
    justifyContent: 'space-around',
  }} />
<Map />
</View>
  );
  }
}



