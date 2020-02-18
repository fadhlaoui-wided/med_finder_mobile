import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ActivityIndicator,ImageBackground } from 'react-native';
import * as Facebook from 'expo-facebook';

console.disableYellowBox = true;

export default function Fblogin(props) {
   
  const [isLoggedin, setLoggedinStatus] = useState(false);
  const [userData, setUserData] = useState(null);
  const [isImageLoading, setImageLoadStatus] = useState(false);

  facebookLogIn = async () => {
    try {
    Facebook.initializeAsync('220603955648124');
      const {
        type,
        token,
        expires,
        permissions,
        declinedPermissions,
      } = await Facebook.logInWithReadPermissionsAsync('897285013968583', {
        permissions: ['public_profile'],
      });
      if (type === 'success') {
        // Get the user's name using Facebook's Graph API
        fetch(`https://graph.facebook.com/me?access_token=${token}&fields=id,name,email,picture.height(500)`)
          .then(response => response.json())
          .then(data => {
            setLoggedinStatus(true);
            setUserData(data);
          })
          .catch(e => console.log(e))
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  }

  logout = () => {
    setLoggedinStatus(false);
    setUserData(null);
    setImageLoadStatus(false);
  }

  return (
    
    isLoggedin ? 
      userData ?

        <View style={styles.container}>
          <Image
            style={{ width: 200, height: 200, borderRadius: 50 }}
            source={{ uri: userData.picture.data.url }}
            onLoadEnd={() => setImageLoadStatus(true)} />
          <ActivityIndicator size="large" color="#0000ff" animating={!isImageLoading} style={{ position: "absolute" }} />
          <Text style={{ fontSize: 22, marginVertical: 10 }}>Hi {userData.name}!</Text>
          <TouchableOpacity style={styles.logoutBtn} onPress={ props.navigation.navigate('search')}>
            <Text style={{ color: "#fff" }}>Logout</Text>
          </TouchableOpacity>
        </View> :
        null
      :
      <ImageBackground source={require("../assets/hero.png")} style={{width: '100%', height: '100%'}}>
     
        <Image
          style={{ width: 200, height: 200, borderRadius: 50, marginVertical: 20 }}
          source={require("../assets/icon.png")} />
        <TouchableOpacity style={styles.loginBtn} onPress={ this.facebookLogIn}>
          <Text style={{ color: "#fff" }}>Login with Facebook</Text>
        </TouchableOpacity>
     
      </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  loginBtn: {
    backgroundColor: '#4267b2',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20
  },
  logoutBtn: {
    backgroundColor: 'grey',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    position: "absolute",
    bottom: 0
  },
});