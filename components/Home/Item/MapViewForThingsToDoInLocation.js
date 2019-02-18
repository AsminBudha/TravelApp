import React from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

/**
 * Component for map view in things to do in that location.
 *
 * @class MapViewForThingsToDoInLocation
 * @extends {React.Component}
 */
class MapViewForThingsToDoInLocation extends React.Component {
  /**
   * Creates an instance of MapViewForThingsToDoInLocation.
   * @param {*} props
   * @memberof MapViewForThingsToDoInLocation
   */
  constructor(props) {
    super(props);

    this.state = {
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.02,
        longitudeDelta: 0.02,
      }
    }
  }

  /**
   * This function is called after component is rendered.
   * Update current location of device.
   *
   * @memberof MapViewForThingsToDoInLocation
   */
  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      let { latitude, longitude } = position.coords;
      latitude = parseFloat(latitude) || 37.78825;
      longitude = parseFloat(longitude) || -122.4324;

      this.setState({
        region: { ...this.state.region, latitude, longitude }
      });
    },
      (error) => {
        console.error(error);
      })
  }

  /**
   * Renders JSX element.
   *
   * @returns
   * @memberof MapView
   */
  render() {
    const { region } = this.state;

    return (
      <View style={styles.mapContainer}>

        <Text>Hello</Text>
        <MapView
          style={styles.map}
          initialRegion={region}
        >
          {/* <Marker
            coordinate={{
              latitude: region.latitude,
              longitude: region.longitude
            }}
            title='Your Location'
          /> */}
        </MapView>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  mapContainer: {
    flex: 1,
  },
  map: {
    flex: 1,
  }
});

export default MapViewForThingsToDoInLocation;
