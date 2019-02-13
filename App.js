/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React from 'react';
import { createAppContainer } from 'react-navigation';
import { StyleSheet, SafeAreaView } from 'react-native';

import AppDrawer from './navigation/AppDrawer';

//container for navigation drawer
const AppContainer = createAppContainer(AppDrawer);

/**
 * Main component of an app.
 *
 * @class App
 * @extends {React.Component}
 */
class App extends React.Component {
  /**
   * Renders JSX element.
   *
   * @returns
   * @memberof App
   */
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <AppContainer />
      </SafeAreaView>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
