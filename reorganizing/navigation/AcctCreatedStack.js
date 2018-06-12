import React, { Component } from "react";
import { createStackNavigator } from "react-navigation";

import AccountCreatedScreen from '../screens/CreateAccount/AccountCreatedScreen';
import AfterCreatedLogin from '../screens/CreateAccount/AfterCreatedLoginScreen';

const AcctCreatedStack = createStackNavigator(
  {
    AcctCreated: AccountCreatedScreen,
    AfterCreatedLogin: AfterCreatedLogin,
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  }
);

export default AcctCreatedStack;
