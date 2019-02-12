import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { ScrollView, FlatList } from 'react-native-gesture-handler';

/**
 * Components which display two column grid view with dynamic height.
 *
 * @class DynamicHeightGridView
 * @extends {React.Component}
 */
class DynamicHeightGridView extends React.Component {

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
    <ImageBackground
      source={require('../assets/img/swayambhu-stupa.jpg')}
      style={styles.card}
    >
      <Text>{item.title}</Text>
    </ImageBackground>

  );

  /**
   * Renders JSX element.
   *
   * @memberof DynamicHeightGridView
   */
  render() {
    let data = [];
    for (let i = 1; i < 50; i++) {
      data.push(
        {
          title: 'Title ' + i,
        }
      );
    }

    return (
      <View>
        <ScrollView contentContainerStyle={styles.container}>
          <FlatList
            data={data}
            renderItem={this._renderItem}
            keyExtractor={this._keyExtractor}
          />
          <FlatList
            data={data}
            renderItem={this._renderItem}
            keyExtractor={this._keyExtractor}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  card: {
    backgroundColor: 'brown',
    margin: 5,
    borderRadius: 5,
    height: 150,

  },
  cardText: {
    color: 'white',
    backgroundColor: 'brown',
  }
});

export default DynamicHeightGridView;
