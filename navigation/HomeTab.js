import React from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation';

import Icon from 'react-native-vector-icons/Entypo';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import IconMaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from '../screens/Home';
import Profile from '../screens/Profile';
import * as appConstants from '../constants/common';

let HomeTabNavigator = {};

HomeTabNavigator[appConstants.ROUTE_HOME] = {
  screen: Home,
  navigationOptions: {
    tabBarLabel: 'Home',
    tabBarIcon: ({ tintColor, focused }) => (
      <IconMaterialCommunity name={focused ? 'home' : 'home-outline'} color={tintColor} size={24} />
    )
  }
};
HomeTabNavigator['Favourite'] = {
  screen: Home,
  navigationOptions: {
    tabBarLabel: 'Favorite',
    tabBarIcon: ({ tintColor, focused }) => (
      <Icon name={focused ? 'heart' : 'heart-outlined'} color={tintColor} size={24} />
    )
  }
};
HomeTabNavigator['Starred'] = {
  screen: Home,
  navigationOptions: {
    tabBarLabel: 'Star',
    tabBarIcon: ({ tintColor, focused }) => (
      <Icon name={focused ? 'star' : 'star-outlined'} color={tintColor} size={24} />
    )
  }
};
HomeTabNavigator['Profile'] = {
  screen: Profile,
  navigationOptions: {
    tabBarLabel: 'Profiles',
    tabBarIcon: ({ tintColor, focused }) => (
      <IconMaterial name={focused ? 'person' : 'person-outline'} color={tintColor} size={24} />
    )
  }
};

export default HomeTab = createMaterialTopTabNavigator(
  HomeTabNavigator, {
    tabBarPosition: 'bottom',
    tabBarOptions: {
      showLabel: false,
      showIcon: true,
      activeTintColor: '#732B19',
      inactiveTintColor: '#732B19',
      indicatorStyle: {
        height: 0
      },
      style: {
        backgroundColor: 'transparent'
      }
    }
  }
);
