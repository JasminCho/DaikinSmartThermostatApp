import React, { Component } from "react";
import { createStackNavigator } from "react-navigation";

import OtherNoticesScreen from '../screens/LegalNotices/OtherNoticesScreen'
// import whatever screens that go under other notices

const OtherNoticesStack = createStackNavigator(
  {
    OtherNotices: OtherNoticesScreen,
    // whatever screens that go under other notices
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  }
);

export default OtherNoticesStack;
