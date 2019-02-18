import React from 'react';
import { View } from 'react-native';
import TabLayout from '../components/TabLayout';

import ThingsToDoItemInfo from '../components/ThingsToDoItemInfo';
import ThingsToDoItemReview from '../components/ThingsToDoItemReview';
import DynamicHeightGridView from '../components/DynamicHeightGridView';

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
      <View>
        <TabLayout tabs={tabs} />
      </View>
    );
  }
}

const tabs = [
  {
    title: 'Info',
    screen: <ThingsToDoItemInfo />,
  },
  {
    title: 'Pictures',
    screen: <DynamicHeightGridView />,
  }, {
    title: 'Reviews',
    screen: <ThingsToDoItemReview />,
  }
]

export default ThingsToDoItemProfile;
