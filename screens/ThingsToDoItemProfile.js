import React from 'react';
import { createAppContainer } from 'react-navigation';
import thingsToDoItemTab from '../navigation/thingsToDoItemTab';

/**
 * Screen for profile of things todo item.
 *
 * @class ThingsToDoItemProfile
 * @extends {React.Component}
 */
class ThingsToDoItemProfile extends React.Component {
  /**
   * Renders JSX element.
   *
   * @returns
   * @memberof ThingsToDoItemProfile
   */
  render() {
    return (
      <TabNavigation />
    );
  }
}

const TabNavigation = createAppContainer(thingsToDoItemTab);

export default ThingsToDoItemProfile;
