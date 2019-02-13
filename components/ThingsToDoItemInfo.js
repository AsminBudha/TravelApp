import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

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
        <View style={styles.horizontalInfo}>
          <MaterialCommunityIcons
            size={24}
            style={styles.infoIcon}
            name='map-marker-outline'
          />
          <Text style={styles.infoText}>Lazimpat {'\n'}Kathmandu, Nepal</Text>
        </View>
        <View style={styles.horizontalInfo}>
          <MaterialCommunityIcons
            size={24}
            name='phone'
            style={styles.infoIcon}
          />
          <Text style={styles.infoText}>Call 01-4410200</Text>
        </View>
        <View style={styles.horizontalInfo}>
          <MaterialCommunityIcons
            size={24}
            name='clock-outline'
            style={styles.infoIcon}
          />
          <Text style={styles.infoText}>Opens at 10am</Text>
        </View>
        <View style={styles.horizontalInfo}>
          <MaterialCommunityIcons
            size={24}
            name='web'
            style={styles.infoIcon}
          />
          <Text style={styles.infoText}>trisararestaurant.com</Text>
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

const styles = StyleSheet.create({
  horizontalInfo: {
    flexDirection: 'row',
  },
  infoIcon: {
  },
  infoText: {
  }
});

export default ThingsToDoItemInfo;
