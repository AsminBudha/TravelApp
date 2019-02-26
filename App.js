/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { createAppContainer } from 'react-navigation';
import { StyleSheet, SafeAreaView } from 'react-native';

import AppDrawer from './navigation/AppDrawer';
import locationReducer from './redux/locationReducer';
import rootReducer from './redux/rootReducer';

//container for navigation drawer
const AppContainer = createAppContainer(AppDrawer);

const store = createStore(rootReducer);

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
      <Provider store={store}>
        <SafeAreaView style={styles.container}>
          <AppContainer />
        </SafeAreaView>
      </Provider>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
