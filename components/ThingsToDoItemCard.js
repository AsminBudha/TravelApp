import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet, ImageBackground } from 'react-native';

/**
 * Card Component with background image and title.
 *
 * @class ThingsToDoItemCard
 * @extends {React.Component}
 */
class ThingsToDoItemCard extends React.Component {
  /**
   * Render JSX element.
   *
   * @returns
   * @memberof ThingsToDoItemCard
   */
  render() {
    const { data, data: { img, title }, handleOnPressItem } = this.props;

    const mainComponent = <ImageBackground
      source={{ uri: img }}
      style={styles.card}
      imageStyle={styles.cardBackgroundImageStyle}
    >
      <View style={styles.cardTextWrapper}>
        <Text style={styles.cardText}>{title}</Text>
      </View>
    </ImageBackground>;
    const componentWithTouch = handleOnPressItem
      && <TouchableOpacity
        onPress={() => handleOnPressItem({ data })}
      >
        {mainComponent}
      </TouchableOpacity> || mainComponent;

    return (
      <View style={styles.container}>
        {componentWithTouch}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    // backgroundColor: 'brown',
    margin: 1,
    height: 150,
    borderRadius: 10,
    justifyContent: 'flex-end',
  },
  cardBackgroundImageStyle: {
    borderRadius: 10,
  },
  cardTextWrapper: {
    backgroundColor: 'rgba(85,42,26,0.4)',
    paddingLeft: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  cardText: {
    color: 'white',
  }
})

export default ThingsToDoItemCard;
