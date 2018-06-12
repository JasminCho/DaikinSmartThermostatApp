import React, { Component } from "react";
import { createStackNavigator } from "react-navigation";

import CreateAcctHomeScreen from '../screens/CreateAccount/CreateAcctHomeScreen';
import NameScreen from '../screens/AcctHome/NameScreen';
import AddressScreen from '../screens/AcctHome/AddressScreen';

const HomeInfoStack = createStackNavigator(
  {
    AcctHome: CreateAcctHomeScreen,
    Name: NameScreen,
    Address: AddressScreen,
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  }
);

export default HomeInfoStack;
