import { Text } from 'react-native';
import React from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation';

import MapViewForThingsToDoInLocation from '../components/Home/Item/MapViewForThingsToDoInLocation';
import ListView from '../components/Home/Item/ListView';
import * as appConstants from '../constants/common';
import DynamicHeightGridView from '../components/DynamicHeightGridView';

let tabNavigator = {};

tabNavigator[appConstants.ROUTE_HOME_ITEM_TAB_ALL] = {
  screen: DynamicHeightGridView,
};
tabNavigator[appConstants.ROUTE_HOME_ITEM_TAB_FOOD_DRINKS] = {
  screen: MapViewForThingsToDoInLocation,
};
tabNavigator[appConstants.ROUTE_HOME_ITEM_TAB_SIGHT_SEEING] = {
  screen: ListView,
};
tabNavigator[appConstants.ROUTE_HOME_ITEM_TAB_NIGHT_VIEW] = {
  screen: MapViewForThingsToDoInLocation,
};
tabNavigator[appConstants.ROUTE_HOME_ITEM_TAB_OTHER_1] = {
  screen: ListView,
};
tabNavigator[appConstants.ROUTE_HOME_ITEM_TAB_OTHER_2] = {
  screen: MapViewForThingsToDoInLocation,
};

export default createMaterialTopTabNavigator(tabNavigator, {
  tabBarOptions: {
    scrollEnabled: true,
    tabStyle: {
      backgroundColor: 'transparent',
      borderRadius: 50,
      borderColor: 'red',
      borderWidth: 2,
      borderStyle: 'solid',
    },
    style: {
    }

  }
});
