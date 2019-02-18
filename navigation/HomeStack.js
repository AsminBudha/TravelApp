import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import IconEntypo from 'react-native-vector-icons/Entypo';

import HomeTab from './HomeTab';
import * as appConstants from '../constants/common';
import ThingsToDo from '../screens/ThingsToDo';
import ThingsToDoItemProfile from '../screens/ThingsToDoItemProfile';

const HomeStackNavigator = {};

HomeStackNavigator[appConstants.ROUTE_HOME_TAB] = {
  screen: HomeTab,
  navigationOptions: ({ navigation }) => {
    return ({
      title: 'Discovers',
      headerLeft: (
        <IconEntypo.Button
          name='menu'
          onPress={() => navigation.openDrawer()}
          backgroundColor='transparent'
          color='white'
        />
      ),
      headerRight: (
        <IconEntypo.Button
          name='magnifying-glass'
          backgroundColor='transparent'
          color='white'
        />
      ),
      headerStyle: {
        backgroundColor: '#EB7854',
      },
      headerTitleStyle: {
        color: '#FFE5CC',
      },
    });
  }
};
HomeStackNavigator[appConstants.ROUTE_HOME_SINGLE_LOCATION_PROFILE] = ThingsToDo;

HomeStackNavigator[appConstants.ROUTE_HOME_SINGLE_LOCATION_ITEM_PROFILE] = ThingsToDoItemProfile;

// HomeStackNavigator[appConstants.ROUTE_HOME_STACK_FOR_SINGLE_LOCATION] = {
//   screen: HomeStackForSingleLocation,
// };

const styles = StyleSheet.create({
  hamburgerMenu: {
    backgroundColor: 'transparent',
    color: 'gray',
  }
});

/**
 * Add screen or activity to navigation with their corresponding key or name.
 */
export default createStackNavigator(
  HomeStackNavigator
);
