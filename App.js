import React, { Component } from "react";
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';

import store from './reorganizing/store/index';

import AppNavigator from './reorganizing/navigation/AppNavigator';

export default class App extends Component {
  render() {
    return(
      <Provider store={store}>
        <AppNavigator />
      </Provider>

    );
  }
}

AppRegistry.registerComponent('DaikinSmartThermostatApp', () => AppNavigator);
