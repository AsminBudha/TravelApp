import React from 'react';
import { ScrollView, FlatList } from 'react-native-gesture-handler';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

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
      data={item}
    />
  );

  /**
   * Renders JSX element.
   *
   * @memberof DynamicHeightGridView
   */
  render() {
    const { data } = this.props;
    let distributedData = [];
    const totalColumn = 2;

    for (let i = 0; i < totalColumn; i++) {
      distributedData.push([]);
    }
    for (let i = 0; i < data.length; i++) {
      distributedData[i % totalColumn].push(data[i]);
    }

    const listView = distributedData
      .map((item) => (
        <FlatList
          key={item}
          data={item}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
        />
      ));

    return (
      <View>
        <ScrollView contentContainerStyle={styles.container}>
          {listView}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingBottom: 100,
  },
});

DynamicHeightGridView.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    img: PropTypes.string,
  })),
}

export default DynamicHeightGridView;
