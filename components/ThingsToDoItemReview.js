import React from 'react';
import { View, Text, FlatList } from 'react-native';
import ReviewCard from './ReviewCard';

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
    return item.name;
  }

  /**
   * Renders JSX element
   *
   * @returns
   * @memberof ThingsToDoItemReview
   */
  render() {
    let reviews = [];
    for (let i = 0; i < 25; i++) {
      reviews.push({
        image: require('../assets/img/1-testimonal.jpg'),
        name: 'Williad Scoutt' + i,
        rating: i % 5 + 1,
        reviewSubject: 'Awesome Experience' + i,
        reviewText: 'It\'s such a beautiful to be in lazimpat at the evening time. Food, Place and hospitality all are good here',
        time: '2 days ago',
      });
      // reviews.push(<ReviewCard />);
    }

    return (
      <View>
        <Text>25 Reviews</Text>
        <FlatList
          data={reviews}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
        />
      </View>
    );
  }
}

export default ThingsToDoItemReview;
