import React, { Component } from "react";
import { createStackNavigator } from "react-navigation";

import CreateAcctThermostatScreen from '../screens/CreateAccount/CreateAcctThermostatScreen';
import EnterCodeScreen from '../screens/AcctThermostat/EnterCodeScreen';

const ConnectThermostatStack = createStackNavigator(
  {
    AcctThermostat: CreateAcctThermostatScreen,
    EnterCode: EnterCodeScreen,
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  }
);

export default ConnectThermostatStack;
