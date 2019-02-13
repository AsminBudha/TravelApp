import React from 'react';
import { View, FlatList } from 'react-native';

import Icon from 'react-native-vector-icons/Entypo';

import CardHome from '../components/Home/CardHome';
import * as appConstants from '../constants/common';

/**
 * Display view for home tab discover.
 *
 * @class Home
 * @extends {React.Component}
 */
class Home extends React.Component {

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
    <CardHome
      data={item}
      navigation={this.props.navigation}
      handleOnPressView={this.handleOnPressView}
    />
  );

  /**
   * Function is called after component is rendered.
   *
   * @memberof Home
   */
  componentDidMount() {
    this.props.navigation.setParams({
      props: this.props
    });
  }

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
          numberOfThingsToDo: i,
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
