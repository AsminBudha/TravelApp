import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';

import * as appConstants from '../constants/common';
import ThingsToDoInLocation from '../components/ThingsToDoInLocation';
import TabLayout from '../components/TabLayout';
import DynamicHeightGridView from '../components/DynamicHeightGridView';
import MapViewForThingsToDoInLocation from '../components/Home/Item/MapViewForThingsToDoInLocation';

/**
 * Display Profile of an item.
 * This component is rendered after click on item on home.
 *
 * @class ItemProfile
 * @extends {React.Component}
 */
class ThingsToDo extends React.Component {

  /**
   * Creates an instance of ThingsToDo.
   *
   * @param {*} props
   * @memberof ThingsToDo
   */
  constructor(props) {
    super(props);

    this.state = {
      indexOfCurrentActiveChip: appConstants.LOCATION_CHIP_ALL_INDEX
    };

  }
  /**
   *
   *
   * @memberof DynamicHeightGridView
   */
  handleOnPressItem = () => {
    this.props.navigation.navigate(appConstants.ROUTE_HOME_SINGLE_LOCATION_ITEM_PROFILE);
  }

  /**
   * Change value of indexOfCurrentActiveChip in state to currently pressed index.
   *
   * @param {Number} index Index of current pressed chip.
   * @memberof ItemProfile
   */
  handlePressOnChip = (indexOfCurrentActiveChip) => {
    this.setState({
      indexOfCurrentActiveChip
    })
  }

  /**
 * Default object to handle navigation properties or appbar in app.
 *
 * @static
 * @memberof ItemProfile
 */
  static navigationOptions = {
    title: 'Discover',
  };

  /**
   * Renders JSX element.
   *
   * @returns
   * @memberof ItemProfile
   */
  render() {
    const { indexOfCurrentActiveChip } = this.state;
    const chips = appConstants.LOCATION_CHIPS.map((item, index) => {
      let touchableOpacityStyle = [styles.chipItem];
      let textStyle = [styles.chipItemText];

      if (index == indexOfCurrentActiveChip) {
        touchableOpacityStyle.push(styles.chipItemActive);
        textStyle.push(styles.chipItemTextActive);
      }

      return (
        <TouchableOpacity
          key={item}
          style={touchableOpacityStyle}
          onPress={() => this.handlePressOnChip(index)}
        >
          <Text style={textStyle}>{item}</Text>
        </TouchableOpacity>
      );
    });

    const tabs = [
      {
        title: 'List View',
        screen: <DynamicHeightGridView handleOnPressItem={this.handleOnPressItem} />,
      },
      {
        title: 'Map View',
        screen: <MapViewForThingsToDoInLocation />
      }
    ];

    return (
      <View>
        <View>
          <ScrollView
            horizontal={true}
            style={styles.chipContainer}
            showsHorizontalScrollIndicator={false}
          >
            {chips}
          </ScrollView>
        </View>
        <TabLayout tabs={tabs} {...this.props} />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  chipContainer: {
    paddingTop: 10,
    paddingBottom: 10,

  },
  chipItem: {
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 50,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 15,
    paddingRight: 15,
    marginLeft: 10,
    marginRight: 10,
  },
  chipItemText: {
    color: 'red',
  },
  chipItemTextActive: {
    color: 'white',
  },
  chipItemActive: {
    backgroundColor: 'red',
  }
});

export default ThingsToDo;
