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
    const tabs = [
      {
        title: 'Info',
        screen: <ThingsToDoItemInfo  {...this.props} />,
      },
      {
        title: 'Pictures',
        screen: <DynamicHeightGridView  {...this.props} />,
      }, {
        title: 'Reviews',
        screen: <ThingsToDoItemReview  {...this.props} />,
      }
    ];

    return (
      <View>
        <TabLayout tabs={tabs} />
      </View>
    );
  }
}

export default ThingsToDoItemProfile;
