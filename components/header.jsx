import React, { Component } from 'react';

import { Header } from 'react-native-elements';
export default  HeaderComponent = (props) =>  (
        <Header
        statusBarProps={{ barStyle: 'light-content' }}
        barStyle='light-content' // or directly
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'Med-Finder', style: { color: '#fff' } }}
        containerStyle={{
          backgroundColor: "#4C525A",
          justifyContent: 'space-around',
        }}
      />
    );
  


