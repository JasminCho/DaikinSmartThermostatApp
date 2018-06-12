import React, { Component } from "react";
import { createStackNavigator } from "react-navigation";

import LegalNoticesScreen from '../screens/LegalNotices/LegalNoticesScreen';
import TermsOfServiceScreen from '../screens/LegalNotices/TermsOfServiceScreen';
import PrivacyStatementScreen from '../screens/LegalNotices/PrivacyStatementScreen';
import OtherNoticesStack from './OtherNoticesStack';

const LegalNoticesStack = createStackNavigator(
  {
    LegalNotices: LegalNoticesScreen,
    TermsOfService: TermsOfServiceScreen,
    PrivacyStatement: PrivacyStatementScreen,
    OtherNoticesStack: OtherNoticesStack,
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  }
);

export default LegalNoticesStack;
