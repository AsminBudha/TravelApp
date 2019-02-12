import { createStackNavigator } from 'react-navigation';

import HomeTab from './HomeTab';
import * as appConstants from '../constants/common';
import HomeStackForSingleLocation from './HomeStackForSingleLocation';

const HomeStackNavigator = {};
HomeStackNavigator[appConstants.ROUTE_HOME_TAB] = {
  screen: HomeTab,
};
HomeStackNavigator[appConstants.ROUTE_HOME_STACK_FOR_SINGLE_LOCATION] = {
  screen: HomeStackForSingleLocation,
};

/**
 * Add screen or activity to navigation with their corresponding key or name.
 */
export default createStackNavigator(
  HomeStackNavigator
);
