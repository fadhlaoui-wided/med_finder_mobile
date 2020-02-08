import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import * as Permissions from 'expo-permissions'

export default class Map extends React.Component {
    state= {
        latitude:null,
        longitude:null
    }
    async componentDidMount() {
        const {status} = await Permissions.getAsync(Permissions.LOCATION )
        
        if(status !== 'granted'){
            const response = await Permissions.askAsync(Permissions.LOCATION)
        }
        navigator.geolocation.getCurrentPosition(
            ({coords:{latitude, longitude}}) => this.setState({latitude, longitude},
            (error) => console.log(error))
        )
    }
    
  render() {
    return (
      <View style={styles.container}>
        <MapView style={styles.mapStyle} 
         initialRegion={{
            latitude: this.state.latitude,
            longitude: this.state.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: 350,
    // Dimensions.get('window').width,
    height: 500,
    marginBottom:5
  },
});
