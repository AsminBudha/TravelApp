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
    const { image, title, handleOnPressItem } = this.props;
    const mainComponent = <ImageBackground
      source={image}
      style={styles.card}
    >
      <View style={styles.cardTextWrapper}>
        <Text style={styles.cardText}>{title}</Text>
      </View>
    </ImageBackground>;
    const componentWithTouch = handleOnPressItem
      && <TouchableOpacity
        onPress={handleOnPressItem}
      >
        {mainComponent}
      </TouchableOpacity> || mainComponent;

    return (
      <View>
        {componentWithTouch}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'brown',
    margin: 5,
    borderRadius: 5,
    height: 150,
    justifyContent: 'flex-end',
  },
  cardTextWrapper: {
    backgroundColor: 'rgba(85,42,26,0.4)',
    paddingLeft: 10,
  },
  cardText: {
    color: 'white',
  }
})

export default ThingsToDoItemCard;
