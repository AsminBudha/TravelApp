import React from 'react';
import { Text, View } from 'react-native';
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
      latitude = parseFloat(latitude) || 0;
      longitude = parseFloat(longitude) || 0;

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
      <View style={{ flex: 1 }}>
        <MapView
          initialRegion={region}
          style={{ flex: 1 }}
        >
          <Marker
            coordinate={{
              latitude: region.latitude,
              longitude: region.longitude
            }}
            title='Your Location'
          />
        </MapView>
      </View>
    );
  }

}

export default MapViewForThingsToDoInLocation;
