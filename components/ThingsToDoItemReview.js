import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';

import ReviewCard from './ReviewCard';
import * as http from '../constants/http';
import * as actionTypes from '../redux/actionTypes';

/**
 * Componenet which shows review of item in things to do.
 *
 * @class ThingsToDoItemReview
 * @extends {React.Component}
 */
class ThingsToDoItemReview extends React.Component {

  /**
   * return component to render for flat list.
   *
   * @memberof ThingsToDoItemReview
   */
  _renderItem = ({ item }) => {
    return <ReviewCard data={item} />
  }

  /**
   * return keys for every item in flat list.
   *
   * @memberof ThingsToDoItemReview
   */
  _keyExtractor = (item) => {
    return item.id.toString();
  }

  componentDidMount() {
    const data = this.props.navigation.getParam('data', {});
    if (!data) {
      return;
    }
    const { id } = data;

    http.getReviewsById(id).then((res) => {
      this.props.addReviewsById(id, res.data);
    }).catch(err => {
      console.warn(err);
    });
  }

  /**
   * Renders JSX element
   *
   * @returns
   * @memberof ThingsToDoItemReview
   */
  render() {
    const { review } = this.props;
    const data = this.props.navigation.getParam('data', {});
    if (!data) {
      return;
    }
    const { id } = data;
    let reviews = review[id];

    return (
      <View>
        <Text>{reviews.length} Reviews</Text>
        <FlatList
          data={reviews}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return state.reviewReducer;
}

const mapDispatchToProps = (dispatch) => ({
  addReviewsById: (id, reviews) => dispatch(addAllReviewsById(id, reviews)),
});

const addAllReviewsById = (id, reviews) => ({
  type: actionTypes.ADD_ALL_REVIEW_BY_THINGS_TO_DO_ID,
  payload: { id, data: reviews },
});

export default connect(mapStateToProps, mapDispatchToProps)(ThingsToDoItemReview);
