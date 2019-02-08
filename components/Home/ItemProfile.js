import React from 'react';
import { View, Text } from 'react-native';
import CardHome from './CardHome';
/**
 * Display Profile of an item.
 * This component is rendered after click on item on home.
 *
 * @class ItemProfile
 * @extends {React.Component}
 */
class ItemProfile extends React.Component {
  /**
 * Default object to handle navigation properties or appbar in app.
 *
 * @static
 * @memberof ItemProfile
 */
  static navigationOptions = {
    title: 'Discover',
  };


  render() {
    const data = this.props.data;
    return (
      <View>
        <Text>Helloss</Text>
      </View>
    );
  }
}

export default ItemProfile;
