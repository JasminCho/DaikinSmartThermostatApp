import React, { Component } from "react";
import { createStackNavigator } from "react-navigation";

import CreateAcctOwnerScreen from '../screens/CreateAcctOwnerScreen';

const CreateAccountNavigator = createStackNavigator(
  {
    Owner: CreateAcctOwnerScreen,
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  }
);

export default CreateAccountNavigator;
