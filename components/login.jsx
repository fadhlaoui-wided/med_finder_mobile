import React, { Component } from 'react';
import { Alert, Button, TextInput, View, StyleSheet } from 'react-native';
import * as axios from 'axios';
import { AuthSession } from 'expo';


export default class Login extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      email:'',
      password:'',
      result: null
    };
  }
  _handlePressAsync = async () => {
    let redirectUrl = AuthSession.getRedirectUrl(); 
    let result = await AuthSession.startAsync(
       {
        
        authUrl:
          `https://www.facebook.com/v2.8/dialog/oauth?response_type=token`  +
          `&client_id=${FB_APP_ID}` +
          `&redirect_uri=${
            encodeURIComponent(
              redirectUrl
            ) }`,
      }
    );
    this.setState({ result });
  };

  onLogin() {
    const { email, password } = this.state;
    const config = {
      headers: { 'headerstype': 'patient' }
  }
   const obj = {
    email:this.state.email,
    password: this.state.password
   }
   console.log(obj)
    axios.post('https://fathomless-ocean-09181.herokuapp.com/api/auth/logIn' ,obj, config) 
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

   // Alert.alert('Credentials', `${username} + ${password}`);
   this.props.navigation.navigate('signup')
  }

  
  render() {
    return (
      <View style={styles.container}>
        <Button title="Open FB Auth" onPress={this._handlePressAsync} />
        {this.state.result ? <Text>{JSON.stringify(this.state.result)}</Text> : null}
          <TextInput
          value={this.state.email}
          onChangeText={(email) => this.setState({ email })}
          placeholder={'email'}
          style={styles.input}
        />
          <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'password'}
          secureTextEntry={true}
          style={styles.input}
        />
        <Button
          title={'Login'}
          style={styles.input}
          onPress={this.onLogin.bind(this)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
    margin: 10,
    padding: 8,
    borderRadius: 14,
  },
});