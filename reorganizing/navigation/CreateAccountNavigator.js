import React, { Component } from "react";
import { createStackNavigator } from "react-navigation";

import OwnerInfoStack from './OwnerInfoStack';
// import HomeInfoStack from './HomeInfoStack';
// import ConnectThermostatStack from './ConnectThermostatStack';
// import AcctCreatedStack from './AcctCreatedStack';

const CreateAccountNavigator = createStackNavigator(
  {
    OwnerInfoStack: OwnerInfoStack,
    // HomeInfoStack: HomeInfoStack,
    // ConnectThermostatStack: ConnectThermostatStack,
    // AcctCreatedStack: AcctCreatedStack,
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  }
);

export default CreateAccountNavigator;
