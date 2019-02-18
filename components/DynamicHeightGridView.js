import React from 'react';
import { ScrollView, FlatList } from 'react-native-gesture-handler';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

import * as appConstants from '../constants/common';
import ThingsToDoItemCard from './ThingsToDoItemCard';
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
    <ThingsToDoItemCard
      handleOnPressItem={this.props.handleOnPressItem}
      image={require('../assets/img/swayambhu-stupa.jpg')}
      title={item.title}
    />
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
});

export default DynamicHeightGridView;
