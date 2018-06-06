import React, { Component } from "react";
import { createStackNavigator } from "react-navigation";

import HomeScreen from '../screens/HomeScreen';

const MainApplicationNavigator = createStackNavigator(
  {
    Home: HomeScreen,
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  }
);

export default MainApplicationNavigator;
