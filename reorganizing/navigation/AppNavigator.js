import React, { Component } from "react";
import { createStackNavigator } from "react-navigation";

import StartScreen from '../screens/StartScreen';
import LoginScreen from '../screens/LoginScreen';
import CreateAccountNavigator from './CreateAccountNavigator';
import MainApplicationNavigator from './MainApplicationNavigator';

const AppNavigator = createStackNavigator(
  {
    Start: StartScreen,
    Login: LoginScreen,
    CreateAccount: CreateAccountNavigator,
    MainApplication: MainApplicationNavigator,
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  }
);

export default AppNavigator;
