import React from 'react';
import { SafeAreaView } from 'react-native';
import { createAppContainer } from 'react-navigation';

import tabForThingsToDoInLocation from '../navigation/tabForThingsToDoInLocation';

/**
 * Tab Navigation of List View and Map View.
 * Used in Things to do in some Location profile.
 *
 * @class ThingsToDoInLocation
 * @extends {React.Component}
 */
class ThingsToDoInLocation extends React.Component {

  /**
   * Renders JSX Element
   *
   * @memberof ThingsToDoInLocation
   */
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <TabContainer />
      </SafeAreaView>
    );
  }
}

//Container for tab in things to do in location i.e list view and map view in design.
const TabContainer = createAppContainer(tabForThingsToDoInLocation);

export default ThingsToDoInLocation;
