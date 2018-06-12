import React, { Component } from "react";
import { Font, AppLoading } from 'expo';
import { View, Text, AppRegistry } from 'react-native';
import { Provider } from 'react-redux';

import store from './reorganizing/store/index';

import LoadingScreen from './reorganizing/screens/LoadingScreen';
import AppNavigator from './reorganizing/navigation/AppNavigator';

import CheckBoxRowItem from './reorganizing/components/CheckBoxRowItem/index';

import { FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      fontsLoaded: false
    }
  }

  async componentWillMount() {
    await Font.loadAsync({
      'Material Icons': require('@expo/vector-icons/fonts/MaterialIcons.ttf'),
      'FontAwesome': require('@expo/vector-icons/fonts/FontAwesome.ttf'),
      'Ionicons': require('@expo/vector-icons/fonts/Ionicons.ttf'),
    })
    this.setState({ fontsLoaded: true })
  }

  render() {
    if(this.state.fontsLoaded) {
      return(
        <Provider store={store}>
          <AppNavigator />
        </Provider>
      )
    } else {
      return (
        null
      )
    }
  }
}

// AppRegistry.registerComponent('DaikinSmartThermostatApp', () => AppNavigator);
