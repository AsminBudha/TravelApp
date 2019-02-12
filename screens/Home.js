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
  // static navigationOptions = ({ navigation }) => ({
  //   title: 'Hellooo',
  //   headerLeft: <Icon.Button
  //     size={24}
  //     name='menu'
  //     color='red'
  //     onPress={() => navigation.openDrawer()} />
  // });

  /**
   * return the key from item.
   *
   * @memberof Home
   */
  _keyExtractor = (item) => item.title;

  /**
   * Handle press on current component view.
   * Opens profile of this item when press.
   *
   * @memberof CardHome
   */
  handleOnPressView = () => {
    this.props.navigation.navigate(appConstants.ROUTE_HOME_STACK_FOR_SINGLE_LOCATION)
  }

  /**
   * return component of an item.
   *
   * @memberof Home
   */
  _renderItem = ({ item }) => (
    <CardHome data={item} handleOnPressView={this.handleOnPressView} />
  );

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
