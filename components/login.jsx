import React, { Component } from 'react';
import { Alert, Button, TextInput, View, StyleSheet } from 'react-native';




export default class Login extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      email:'',
      password:''
    };
  }
  
  onLogin() {
    const { firstName, lastName, email, password } = this.state;

   // Alert.alert('Credentials', `${username} + ${password}`);
   this.props.navigation.navigate('signup')
  }

  render() {
    return (
      <View style={styles.container}>
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