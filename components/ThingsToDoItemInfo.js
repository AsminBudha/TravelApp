import React from 'react';
import { View, Text } from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

/**
 * Component for info tab of things to do item.
 *
 * @class ThingsToDoItemInfo
 * @extends {React.Component}
 */
class ThingsToDoItemInfo extends React.Component {

  /**
   * Renders JSX element.
   *
   * @returns
   * @memberof ThingsToDoItemInfo
   */
  render() {

    return (
      <View>
        <View>
          <MaterialCommunityIcons name='map-marker-outline' />
          <Text>Lazimpat {'\n'}Kathmandu, Nepal</Text>
        </View>
        <View>
          <MaterialCommunityIcons name='phone' />
          <Text>Call 01-4410200</Text>
        </View>
        <View>
          <MaterialCommunityIcons name='clock-outline' />
          <Text>Opens at 10am</Text>
        </View>
        <View>
          <MaterialCommunityIcons name='web' />
          <Text>trisararestaurant.com</Text>
        </View>
        <Text>
          Trisara, the third garden of heaven, is a picturesque outdoor restaurant
          offering the most sumptuous food and drinks along with.
        </Text>
        <Text>
          We serve great food with the perfect ambience. We have live music everyday
          and we try to promote the local artist from various part of the world.
        </Text>
      </View>
    );
  }
}

export default ThingsToDoItemInfo;
