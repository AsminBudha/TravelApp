import { createMaterialTopTabNavigator } from 'react-navigation';

import * as appConstants from '../constants/common';
import DynamicHeightGridView from '../components/DynamicHeightGridView';
import MapViewForThingsToDoInLocation from '../components/Home/Item/MapViewForThingsToDoInLocation';

let tabNavigator = {};

tabNavigator[appConstants.ROUTE_HOME_ITEM_TAB_LIST_VIEW] = {
  screen: DynamicHeightGridView,
};

tabNavigator[appConstants.ROUTE_HOME_ITEM_TAB_MAP_VIEW] = {
  screen: MapViewForThingsToDoInLocation,
};

export default createMaterialTopTabNavigator(tabNavigator);
