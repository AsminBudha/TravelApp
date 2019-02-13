import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

/**
 * Component for tab layout.
 *
 * @class TabLayout
 * @extends {React.Component}
 */
class TabLayout extends React.Component {
  /**
   * Creates an instance of TabLayout.
   * @param {*} props
   * @memberof TabLayout
   */
  constructor(props) {
    super(props);

    this.state = {
      indexOfCurrentTab: 0,
    };
  }

  /**
   * Change the current tab into pressed tab.
   *
   * @memberof TabLayout
   */
  handlePressOnTabTitle = (index) => {
    if (index !== this.state.indexOfCurrentTab) {
      this.setState({
        indexOfCurrentTab: index,
      })
    }
  }

  /**
   * Renders JSX element.
   *
   * @returns
   * @memberof TabLayout
   */
  render() {
    const { tabs } = this.props;
    console.warn('view', tabs[0].screen);
    const tabList = tabs && tabs.map((item, index) => {
      let tabStyle = [styles.tab];
      let tabTitleStyle = [];
      if (index === this.state.indexOfCurrentTab) {
        tabStyle.push(styles.tabActive);
        tabTitleStyle.push(styles.tabTitleActive);
      }
      return (
        <TouchableOpacity
          key={index}
          onPress={() => this.handlePressOnTabTitle(index)}
        >
          <View style={tabStyle}>
            <Text style={tabTitleStyle}>{item.title}</Text>
          </View>
        </TouchableOpacity>
      )
    });
    const CurrentViewOfTab = tabs && tabs[this.state.indexOfCurrentTab].screen;

    return (
      <View>
        <View style={styles.tabBar}>
          {tabList}
        </View>
        {CurrentViewOfTab && <CurrentViewOfTab {...this.props} />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
  },
  tabTitleActive: {
    color: 'brown',
  },
  tabActive: {
    borderBottomWidth: 2,
    borderBottomColor: 'red',
  },
  tab: {
    margin: 10,
  }
});

export default TabLayout;
