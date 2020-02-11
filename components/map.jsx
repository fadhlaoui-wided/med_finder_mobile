import React from 'react';
import MapView , { AnimatedRegion } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions,  Button, Marker} from 'react-native';
import * as Permissions from 'expo-permissions';
import * as axios from 'axios';

export default class Map extends React.Component {
 
  constructor(props){
    super(props)
    this.state = {
      markers: [
        {
          coordinate: {
            latitude: 45.524548,
            longitude: -122.6749817,
          },
          title: "Best Place",
          description: "This is the best place in Portland"
        },
        {
          coordinate: {
            latitude:18.6316742,
            longitude: 105.629523,
          },
          title: "Second Best Place",
          description: "This is the second best place in Portland"
        },
        {
          coordinate: {
            latitude:42.6580023,
            longitude: 141.6664383,
          },
          title: "Third Best Place",
          description: "This is the third best place in Portland"
        },
        {
          coordinate: {
            latitude: 13.78694,
            longitude: 108.386208,
          },
          title: "Fourth Best Place",
          description: "This is the fourth best place in Portland"
        },
      ],
      region: {
        latitude: 45.52220671242907,
        longitude: -122.6653281029795,
        latitudeDelta: 0.04864195044303443,
        longitudeDelta: 0.040142817690068,
      },
    };
  
    this.getCurrentLocation = this.getCurrentLocation.bind(this)
  }
    switchMapType = () => {
    console.log('changing');
  }
    
     getCurrentLocation = async () =>  {
      const {status} = await Permissions.getAsync(Permissions.LOCATION )
    
      if(status !== 'granted'){
          const response = await Permissions.askAsync(Permissions.LOCATION)
     }
      navigator.geolocation.getCurrentPosition(
      
          position => {
          let region = {
                  latitude: parseFloat(position.coords.latitude),
                  longitude: parseFloat(position.coords.longitude),
                  latitudeDelta:1.1,
                  longitudeDelta: 1.1,
              };
             this.setState({
                  initialRegion: region
              });
          },
          error => console.log(error),
          {
              enableHighAccuracy: true,
              timeout: 20000,
              maximumAge: 1000
          }
      );
  }
  async componentDidMount() {
  this.getCurrentLocation()
}
 
  goToInitialLocation() {
      let initialRegion = Object.assign({}, this.state.initialRegion);
      initialRegion["latitudeDelta"] = 0.05;
      initialRegion["longitudeDelta"] = 0.05;
      this.mapView.animateToRegion(initialRegion, 2000);
    }

     makeRequest = () => {
      axios.get('https://fathomless-ocean-09181.herokuapp.com/api/doctor')
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });    
  }
    
  render() {
    return (
     <View>
       <Button title = "tap Here to look for doctors" color="#4C525A"
        onPress={this.makeRequest} 
      />
    <MapView
            style={styles.mapStyle}
            region={this.state.mapRegion}
            followUserLocation={true}
            ref={ref => (this.mapView = ref)}
            zoomEnabled={true}
            showsUserLocation={true}
            onMapReady={this.goToInitialRegion}
            initialRegion={this.state.initialRegion}>
              {this.state.markers.map((marker, index) => {
                console.log(marker.coordinate.latitude, index, "latitude") 
                return (
    <MapView.Marker  key={index}
      coordinate={{latitude:marker.coordinate.latitude, longitude:marker.coordinate.longitude}}
    />
  )})}
</MapView>
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
    width: 380,
    // Dimensions.get('window').width,
    height: 500,
    marginBottom:5
  },
});
