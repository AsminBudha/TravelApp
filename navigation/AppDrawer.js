import { createDrawerNavigator } from 'react-navigation';

import Drawer1 from '../components/Drawer1';
import Drawer2 from '../components/Drawer2';
import Drawer3 from '../components/Drawer3';
import * as appConstants from '../constants/common';
import HomeTab from '../components/Home/HomeTab';

let drawerNavigator = {};
drawerNavigator[appConstants.ROUTE_HOME] = {
  screen: HomeTab,
  navigationOptions: {
    title: appConstants.ROUTE_HOME
  }
};
drawerNavigator[appConstants.ROUTE_DRAWER_1] = {
  screen: Drawer1,
  navigationOptions: {
    title: appConstants.ROUTE_DRAWER_1
  }
};
drawerNavigator[appConstants.ROUTE_DRAWER_2] = {
  screen: Drawer2,
  navigationOptions: {
    title: appConstants.ROUTE_DRAWER_2
  }
};
drawerNavigator[appConstants.ROUTE_DRAWER_3] = {
  screen: Drawer3,
  navigationOptions: {
    title: appConstants.ROUTE_DRAWER_3
  }
}

export default Drawer = createDrawerNavigator(
  drawerNavigator
);


// const rootNavigator = {};
// rootNavigator['Drawer'] = {
//   screen: Drawer,
// };
// rootNavigator['Tab'] = Tab;
// rootNavigator['Stack'] = stack;

// /**
//  * Add screen or activity to navigation with their corresponding key or name.
//  */
// export const rootNavigation = createSwitchNavigator(
//   rootNavigator
// );
