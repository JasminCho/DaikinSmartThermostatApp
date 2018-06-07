import React, { Component } from "react";
import { createStackNavigator } from "react-navigation";

import CreateAcctOwnerScreen from '../screens/CreateAccount/CreateAcctOwnerScreen';
import NameScreen from '../screens/AcctOwner/NameScreen';
import EmailScreen from '../screens/AcctOwner/EmailScreen';
// import PasswordScreen from '../screens/PasswordScreen';

const OwnerInfoStack = createStackNavigator(
  {
    AcctOwner: CreateAcctOwnerScreen,
    Name: NameScreen,
    Email: EmailScreen,
    // Password: PasswordScreen,
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  }
);

export default OwnerInfoStack;
