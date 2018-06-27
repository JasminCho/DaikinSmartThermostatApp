import React, { Component } from "react";
import { createStackNavigator } from "react-navigation";

import AccountCreatedScreen from '../screens/CreateAccount/AccountCreatedScreen';
import AfterCreatedLoginScreen from '../screens/CreateAccount/AfterCreatedLoginScreen';
import TermsOfServiceScreen from '../screens/LegalNotices/TermsOfServiceScreen';
import PrivacyStatementScreen from '../screens/LegalNotices/PrivacyStatementScreen';
import OtherNoticesStack from './OtherNoticesStack';

const AcctCreatedStack = createStackNavigator(
  {
    AcctCreated: AccountCreatedScreen,
    AfterCreatedLogin: AfterCreatedLoginScreen,
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

export default AcctCreatedStack;
