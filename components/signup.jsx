
import React, { Component } from 'react';
import { Alert, Button, TextInput, View, StyleSheet } from 'react-native';

export default class Signup extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      firstName: '',
      lastName: '',
      email:'',
      phoneNumber:'',
      password:'',
      password2:''
    };
  }
  
  onRegister() {
    const { firstName, lastName, email,phoneNumber } = this.state;
    console.log(this.state)
    this.props.navigation.navigate('search')
   // Alert.alert('Credentials', `${username} + ${password}`);
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          value={this.state.firstName}
          onChangeText={(firstName) => this.setState({ firstName })}
          placeholder={'first name'}
          style={styles.input}
        />
        <TextInput
          value={this.state.lastName}
          onChangeText={(lastName) => this.setState({ lastName })}
          placeholder={'last name'}
          style={styles.input}
        />
         <TextInput
          value={this.state.email}
          onChangeText={(email) => this.setState({ email })}
          placeholder={'email'}
          style={styles.input}
        />
          <TextInput
          value={this.state.phoneNumber}
          onChangeText={(phoneNumber) => this.setState({ phoneNumber })}
          placeholder={'phoneNumber'}
          style={styles.input}
        />
         
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'password'}
          secureTextEntry={true}
          style={styles.input}
        />
         <TextInput
          value={this.state.password2}
          onChangeText={(password2) => this.setState({ password2 })}
          placeholder={'Retype password'}
          secureTextEntry={true}
          style={styles.input}
        />
        <Button
          title={'Signup'}
          style={styles.input}
          onPress={this.onRegister.bind(this)}
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