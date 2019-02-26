import { createMaterialTopTabNavigator } from 'react-navigation';

import * as appConstants from '../constants/common';
import ThingsToDoItemInfo from '../components/ThingsToDoItemInfo';

let tabNavigator = {};

tabNavigator[appConstants.ROUTE_HOME_SINGLE_LOCATION_ITEM_PROFILE_INFO] = {
  screen: ThingsToDoItemInfo
};

export default createMaterialTopTabNavigator(tabNavigator);
