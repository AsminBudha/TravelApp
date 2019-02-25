import React from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';

import IconEntypo from 'react-native-vector-icons/Entypo';

import * as http from '../constants/http';
import CardHome from '../components/Home/CardHome';
import * as appConstants from '../constants/common';
import * as actionTypes from '../redux/actionTypes';

/**
 * Display view for Favorite tab discover.
 *
 * @class Favorite
 * @extends {React.Component}
 */
class Favorite extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  /**
   * return the key from item.
   *
   * @memberof Favorite
   */
  _keyExtractor = (item) => item.id.toString();

  /**
   * Handles press on favourite icon to change its active state.
   *
   * @memberof CardFavorite
   */
  handleOnPressFav = (id) => {
    this.props.toggleFavoriteLocation(id);
  }


  /**
   * return component of an item.
   *
   * @memberof Favorite
   */
  _renderItem = ({ item }) => (
    <CardHome
      data={item}
      id={item.id}
      navigation={this.props.navigation}
      handleOnPressView={this.handleOnPressView}
      handleOnPressFav={this.handleOnPressFav}
    />
  );

  /**
   * Renders JSX component.
   *
   * @memberof Favorite
   */
  render() {
    const { location } = this.props;

    return (
      <View>
        <FlatList
          data={location}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { locationReducer: { location } } = state;
  let filteredLocation = location.filter((item) => item.isFavorite)

  return { location: filteredLocation };
}

const mapDispatchToProps = (dispatch) => ({
  addLocationList: (location) => dispatch(addAllLocation(location)),
  toggleFavoriteLocation: (id) => dispatch(toggleFavoriteLocation(id)),
});

const addAllLocation = (location) => ({
  type: actionTypes.ADD_LOCATION,
  payload: location,
});

const toggleFavoriteLocation = (id) => ({
  type: actionTypes.TOGGLE_FAVORITE_LOCATION,
  payload: id
});

export default connect(mapStateToProps, mapDispatchToProps)(Favorite);
