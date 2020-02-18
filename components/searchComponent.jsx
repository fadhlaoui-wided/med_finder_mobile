import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HeaderComponent from './header';
import Map from './map'
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

export default  class SearchComponent extends React.Component {
  constructor(props){
    super(props)
      this.state = {  
        search: '',
    }
    this.updateSearch = this.updateSearch.bind(this)
  } 
  updateSearch = search => {
    this.setState({ search });
    console.log(this.state)
  };
  render() {
    const { search } = this.state;
     return (
        <View style={styles.container}>
        <HeaderComponent />
        <SearchBar onChangeText={this.updateSearch}
        placeholder="Type Here..."
         value={search}
         lightTheme icon={{ type: 'font-awesome', name: 'search' }} 
          containerStyle={{
            backgroundColor: "#4C525A",
            justifyContent: 'space-around',
          }} />
         <Map query= {this.state.search}/>
        </View>
      );
     } 
    }