import { createStackNavigator } from 'react-navigation';

import Home from './Home';
import ItemProfile from './ItemProfile';
import * as appConstants from '../../constants/common';

const HomeStackNavigator = {};
HomeStackNavigator[appConstants.ROUTE_HOME] = {
  screen: Home,
};
HomeStackNavigator[appConstants.ROUTE_ITEM_PROFILE] = ItemProfile;

/**
 * Add screen or activity to navigation with their corresponding key or name.
 */
export default HomeStack = createStackNavigator(
  HomeStackNavigator
);
