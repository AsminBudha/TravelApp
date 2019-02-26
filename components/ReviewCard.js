import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

/**
 * Card for review in things to do item profile review.
 *
 * @class ReviewCard
 * @extends {React.Component}
 */
class ReviewCard extends React.Component {

  /**
   * Renders JSX element
   *
   * @returns
   * @memberof ReviewCard
   */
  render() {
    const { image, name, rating, reviewSubject, reviewText, time } = this.props.data;
    let ratingImg = [];
    for (let i = 0; i < rating; i++) {
      ratingImg.push(<FontAwesomeIcon name='star' style={styles.ratingStarIcon} />);
    }

    return (
      <View
        style={styles.wrapper}>
        <Image
          resizeMode='cover'
          style={styles.image}
          source={{ uri: image }}
        />
        <View style={styles.details}>
          <Text>{name}</Text>
          <View style={styles.rating}>
            {ratingImg}
          </View>
          <Text>{reviewSubject}</Text>
          <View style={styles.reviewTextView}>
            <Text style={styles.reviewText}>
              {reviewText}
            </Text>
          </View>
          <Text>
            {time}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    // flexDirection: 'row',
    padding: 10,
    // paddingTop: 5,
    // paddingBottom: 5,
  },
  image: {
    borderRadius: 50,
    width: 50,
    height: 50,
    position: 'absolute',
    left: 10,
    top: 10,
  },
  details: {
    flexDirection: 'column',
    paddingLeft: 10,
    marginLeft: 50,
  },
  rating: {
    flexDirection: 'row',
  },
  ratingStarIcon: {
    padding: 2,
    color: 'yellow',
  },
  reviewTextView: {
  },
  reviewText: {
  },
});

export default ReviewCard;
