// import React, { Component } from 'react';
// import { StyleSheet, Text, View, StatusBar, Platform, AppRegistry } from 'react-native';
// import { StackNavigator } from 'react-navigation';
//
// import Login from './src/pages/Login';
// import Start from './src/pages/Start';
// import CreateAccount from './src/pages/CreateAccount';
// import Homes from './src/pages/Homes';
// import Thermostats from './src/pages/Thermostats';

//Components
// import Name from './src/components/Name';
// import Email from './src/components/Email';
// import Password from './src/components/Password';
// import Messages from './src/components/Messages';
// import AddHome from './src/components/AddHome';
// import HomeName from './src/components/HomeName';
// import Address from './src/components/Address';
// import AddThermostat from './src/components/AddThermostat';
// import ThermostatCode from './src/components/ThermostatCode';
// import CreateAccountOwner from './src/components/CreateAccountOwner';
// import CreateAccountHome from './src/components/CreateAccountHome';
// import CreateAccountThermostat from './src/components/CreateAccountThermostat';
// import AccountCreated from './src/components/AccountCreated';
// import AccountCreatedLogin from './src/components/AccountCreatedLogin';

// export default class App extends React.Component {
//   render() {
//     return (
//       <RootStack/>
//     );
//   }
// }
//
// const AppNavigator = StackNavigator

/*
TODO: Recreate the navigation

Overall App navigation
1)Main Page
  Login -> Login Page
  Create Account (go to Stack/Switch)
2)Create Account Stack
  Account Owner Stack: Name, Email, Password
  Home Stack: Name, Street/Zipcode
  Thermostat Stack: Enter Code
  Account Created Stack
    Login (I agree button) -> Homes
    Terms of Service
    Privacy Statement
    Other Notes
3)Homes Stack
  List of Homes
    (For each home)
    Thermostat Stack
      List of Thermostats
        (For each thermostat go to Thermostat Stack)
      Add Thermostat Stack
        Enter Code
  Add Home Stack
    Name, Street/Zipcode
  My Account Stack (go to stack)
4)Thermostat Stack
  Top Navigation for thermostats (dropdown)
  Navigation within Thermostat
    Primary Screen (Main one w/ Temp)
    Adjust Screen
    Schedule Screen
    Away Screen
    Status Screen Stack
      Air quality
      Weather
      Circulate
      Settings Stack
        System Mode
        Schedule
        Away Stack
          Geofence Range***
        Comfort
        Air Quality
        Efficiency
        Configuration Stack
          Account
          Dealer Contract
          Look Thermostat
          Home and Location
          Messages
          System Components
          Edit/Reset
5)My Account Stack
  Log out button
    Go back to Main Page
  Account Owner
  List of Additional Members
  Add Household Member
  Legal Notices
6)Messages Stack
  Messages List
    (For each message)
  Alerts Stack
    (For each alert)
  Reminders Stack
    (For each reminder)
  Tips Stack
    (For each tip)
*/

// TESTING NAVIGATION
import React from "react";
import { StatusBar, View, StyleSheet, Text } from "react-native";
import {
  createStackNavigator,
  createSwitchNavigator,
  createBottomTabNavigator,
} from "react-navigation";

/* Test Thermostat App Navigation */
import StartScreen from './screens/Main/StartScreen';
import LoginScreen from './screens/Main/LoginScreen';
// Create Account
  // Account Owner Info
import AccountOwner from './screens/CreateAccount/AccountOwner/AccountOwner';
import OwnerName from './screens/CreateAccount/AccountOwner/OwnerName';
import AccountEmail from './screens/CreateAccount/AccountOwner/AccountEmail';
import AccountPassword from './screens/CreateAccount/AccountOwner/AccountPassword';
  // Home Info
import HomeInfo from './screens/CreateAccount/Home/HomeInfo';
import HomeName from './screens/CreateAccount/Home/HomeName';
import HomeAddress from './screens/CreateAccount/Home/HomeAddress';
// Connect Thermostat
import ConnectThermostat from './screens/CreateAccount/ConnectThermostat/ConnectThermostat';
import EnterCode from './screens/CreateAccount/ConnectThermostat/EnterCode';
// Account Created
import AccountCreated from './screens/CreateAccount/AccountCreated/AccountCreated';
import AccountAgreement from './screens/CreateAccount/AccountCreated/AccountAgreement';
  // Legal Notices
import TermsOfService from './screens/CreateAccount/AccountCreated/TermsOfService';
import PrivacyStatement from './screens/CreateAccount/AccountCreated/PrivacyStatement';
import OtherNotices from './screens/CreateAccount/AccountCreated/OtherNotices';

// Account Homes
import AccountHomes from './screens/Homes/AccountHomes';

// Testing Footers
// import MessageFooter from './screens/Components/MessageFooter';
// import AgreeFooter from './screens/Components/AgreeFooter';
// import StepsFooter from './screens/Components/StepsFooter';

const OwnerStack = createStackNavigator (
  {
    AccountOwner: AccountOwner,
    Name: OwnerName,
    Email: AccountEmail,
    Password: AccountPassword,
  },
  {
    initialRouteName: "AccountOwner",
  }
);

const HomeInfoStack = createStackNavigator (
  {
    HomeInfo: HomeInfo,
    HomeName: HomeName,
    HomeAddress: HomeAddress,
  },
  {
    initialRouteName: "HomeInfo",
  }
);

const ConnectThermostatStack = createStackNavigator (
  {
    ConnectThermostat: ConnectThermostat,
    EnterCode: EnterCode,
  },
  {
    initialRouteName: "ConnectThermostat",
  }
);

const AgreementStack = createStackNavigator (
  {
    AccountCreated: AccountCreated,
    AccountAgreement: AccountAgreement,
    TOS: TermsOfService,
    PS: PrivacyStatement,
    ON: OtherNotices,
  }
);

const LegalNoticesStack = createStackNavigator (
  {
    TOS: TermsOfService,
    PS: PrivacyStatement,
    ON: OtherNotices,
  },
  {
    initialRouteName: "TOS",
  }
)

const AccountHomesStack = createStackNavigator (
  {
    AccountHomes: AccountHomes,
    AddHome: HomeInfoStack,
  }
)

// AccountHomeScreen navs to stacks to different homes, add home stack, account stack, and messages stack
const AccountStack = createStackNavigator (
  {
    AccountHomesStack: AccountHomesStack,
  },
  {
    navigationOptions: {
      headerTitle: 'Daikin Smart Thermostat',
      headerStyle: {
        backgroundColor: 'black',
        height: 20,
      },
      headerTintColor: '#bdbdbd',
      headerTitleStyle: {
        fontSize: 18,
      },
    },
  }
)

const AccountCreatedStack = createStackNavigator (
  {
    Agreement: AgreementStack,
  },
  {
    navigationOptions: {
      headerTitle: 'Daikin Smart Thermostat',
      headerStyle: {
        backgroundColor: 'black',
        height: 20,
      },
      headerTintColor: '#bdbdbd',
      headerTitleStyle: {
        fontSize: 18,
      },
    },
  }
);

const CreateAccountStack = createStackNavigator (
  {
    Owner: OwnerStack,
    Home: HomeInfoStack,
    ConnectThermostat: ConnectThermostatStack,
    Agreement: AgreementStack,
  },
  {
    navigationOptions: {
      headerTitle: 'create account',
      headerStyle: {
        backgroundColor: 'black',
        height: 20,
      },
      headerTintColor: '#bdbdbd',
      headerTitleStyle: {
        fontSize: 18,
      },
    }
  }
);

const AppNavigator = createStackNavigator(
  {
    Main: StartScreen,
    Login: LoginScreen,
    CreateAccount: CreateAccountStack,
    // AccountCreated: AccountCreatedStack,
    Account: AccountStack,
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  }
);

export default class App extends React.Component {
  render() {
    return (
      <AppNavigator />


// Testing
  // <AccountHomesStack />
// <AccountCreatedStack />
// <PrivacyStatement />
      // <View style={styles.container}>
      //   <View style={{flex:1,}}>
      //     <Text style={{color:'white'}}>Howdy</Text>
      //   </View>
      //
      //   <StepsFooter/>
      //
      //   <MessageFooter />
      //
      //   <AgreeFooter/>
      //
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    flexDirection: 'column',
    paddingLeft: 30,
    paddingTop: 30,
  },
})



// const RootStack = StackNavigator({
//   Start: { screen: Start },
//   Login: { screen: Login },
//   CreateAccount: { screen: CreateAccount },
//   CreateAccountOwner: { screen: CreateAccountOwner },
//   CreateAccountHome: { screen: CreateAccountHome },
//   CreateAccountThermostat: { screen: CreateAccountThermostat },
//   AccountCreated: { screen: AccountCreated },
//   AccountCreatedLogin: { screen: AccountCreatedLogin },
//   Homes: { screen: Homes },
//   NamePage: { screen: Name },
//   EmailPage: { screen: Email },
//   Password: { screen: Password },
//   Messages: { screen: Messages },
//   AddHome: { screen: AddHome },
//   HomeName: { screen: HomeName },
//   Address: { screen: Address },
//   Thermostats: { screen: Thermostats },
//   AddThermostat: { screen: AddThermostat },
//   ThermostatCode: { screen: ThermostatCode }},
//   { headerMode: 'none' }
// );
//
// AppRegistry.registerComponent('DaikinSmartThermostatApp', () => RootStack);
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'black',
//   },
//   statusBar: {
//     height: (Platform.OS === 'ios') ? 20 : 0,
//     height: (Platform.OS === 'android') ? 24 : 0,
//   },
//   content: {
//     flex:1,
//   },
// });
