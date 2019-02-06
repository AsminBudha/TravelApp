import React from 'react';
import { View, FlatList } from 'react-native';
import CardHome from './CardHome';

/**
 * Display view for home tab discover.
 *
 * @class Home
 * @extends {React.Component}
 */
class Home extends React.Component {

  /**
   * Default object to handle navigation properties or appbar in app.
   *
   * @static
   * @memberof Home
   */
  static navigationOptions = {
    title: 'Discover',
  };

  /**
   * return the key from item.
   *
   * @memberof Home
   */
  _keyExtractor = (item) => item.title;

  /**
   * return component of an item.
   *
   * @memberof Home
   */
  _renderItem = ({ item }) => (
    <CardHome data={item} />
  );

  /**
   * Renders JSX component.
   *
   * @memberof Home
   */
  render() {
    let data = [];
    for (let i = 1; i < 50; i++) {
      data.push(
        {
          title: 'Title ' + i,
          img: require('../assets/img/ktm.jpg'),
          numToDo: i,
        }
      );
    }

    return (
      <View>
        <FlatList
          data={data}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
        />
      </View>
    );
  }
}

export default Home;
