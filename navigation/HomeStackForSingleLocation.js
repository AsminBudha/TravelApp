import { createStackNavigator } from 'react-navigation';

import Home from '../screens/Home';
import ThingsToDo from '../screens/ThingsToDo';
import * as appConstants from '../constants/common';
import ThingsToDoItemProfile from '../screens/ThingsToDoItemProfile';
import thingsToDoItemTab from './thingsToDoItemTab';

const HomeStackNavigatorForSingleLocation = {};

HomeStackNavigatorForSingleLocation[appConstants.ROUTE_HOME_SINGLE_LOCATION_PROFILE] = ThingsToDo;

HomeStackNavigatorForSingleLocation[appConstants.ROUTE_HOME_SINGLE_LOCATION_ITEM_PROFILE] = thingsToDoItemTab;//ThingsToDoItemProfile;

/**
 * Add screen or activity to navigation with their corresponding key or name.
 */
export default HomeStackForSingleLocation = createStackNavigator(
  HomeStackNavigatorForSingleLocation
);
