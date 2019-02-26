import React from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';

import IconEntypo from 'react-native-vector-icons/Entypo';

import * as http from '../constants/http';
import CardHome from '../components/Home/CardHome';
import * as appConstants from '../constants/common';
import * as actionTypes from '../redux/actionTypes';

/**
 * Display view for home tab discover.
 *
 * @class Home
 * @extends {React.Component}
 */
class Home extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  /**
   * return the key from item.
   *
   * @memberof Home
   */
  _keyExtractor = (item) => item.id.toString();

  /**
   * Handles press on favourite icon to change its active state.
   *
   * @memberof CardHome
   */
  handleOnPressFav = (id) => {
    this.props.toggleFavoriteLocation(id);
  }


  /**
   * return component of an item.
   *
   * @memberof Home
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
   * Function is called after component is rendered.
   *
   * @memberof Home
   */
  componentDidMount() {
    const allLocation = http.getAllLocation();
    const favoriteLocation = http.getFavoriteLocation();

    Promise
      .all([allLocation, favoriteLocation])
      .then((res) => {
        const data = res[0].data.map((item) => {
          return { ...item, isFavorite: res[1].data.includes(item.id) };
        });
        this.props.addLocationList(data);
        // this.setState({
        //   data
        // })
      })
      .catch((err) => {
        console.warn(err);
      });
  }

  /**
   * Renders JSX component.
   *
   * @memberof Home
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
  return state.locationReducer;
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
