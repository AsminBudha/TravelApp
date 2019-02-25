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
    const data = this.props.navigation.getParam('data', {});

    if (data) {
      var { id, title, img, tags, description, website, openingTime, phone, address } = data;
    }
    const addressText = address
      .reduce((res, item, index) => res + item + (index < address.length - 1 && "\n"), "");

    return (
      <View>
        <View style={styles.horizontalInfo}>
          <MaterialCommunityIcons
            size={24}
            style={styles.infoIcon}
            name='map-marker-outline'
          />
          <Text style={styles.infoText}>{addressText}</Text>
        </View>
        <View style={styles.horizontalInfo}>
          <MaterialCommunityIcons
            size={24}
            name='phone'
            style={styles.infoIcon}
          />
          <Text style={styles.infoText}>Call {phone}</Text>
        </View>
        <View style={styles.horizontalInfo}>
          <MaterialCommunityIcons
            size={24}
            name='clock-outline'
            style={styles.infoIcon}
          />
          <Text style={styles.infoText}>Opens at {openingTime}</Text>
        </View>
        <View style={styles.horizontalInfo}>
          <MaterialCommunityIcons
            size={24}
            name='web'
            style={styles.infoIcon}
          />
          <Text style={styles.infoText}>{website}</Text>
        </View>
        <Text>
          {description}
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
