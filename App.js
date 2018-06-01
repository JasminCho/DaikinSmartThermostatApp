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
// import React from "react";
// import { StatusBar, View, StyleSheet, Text } from "react-native";
// import {
//   createStackNavigator,
//   createSwitchNavigator,
//   createBottomTabNavigator,
// } from "react-navigation";
//
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
//
// /* Test Thermostat App Navigation */
// import StartScreen from './screens/Main/StartScreen';
// import LoginScreen from './screens/Main/LoginScreen';
// // Create Account
//   // Account Owner Info
// import AccountOwner from './screens/CreateAccount/AccountOwner/AccountOwner';
// import OwnerName from './screens/CreateAccount/AccountOwner/OwnerName';
// import AccountEmail from './screens/CreateAccount/AccountOwner/AccountEmail';
// import AccountPassword from './screens/CreateAccount/AccountOwner/AccountPassword';
//   // Home Info
// import HomeInfo from './screens/CreateAccount/Home/HomeInfo';
// import HomeName from './screens/CreateAccount/Home/HomeName';
// import HomeAddress from './screens/CreateAccount/Home/HomeAddress';
// // Connect Thermostat
// import ConnectThermostat from './screens/CreateAccount/ConnectThermostat/ConnectThermostat';
// import EnterCode from './screens/CreateAccount/ConnectThermostat/EnterCode';
// // Account Created
// import AccountCreated from './screens/CreateAccount/AccountCreated/AccountCreated';
// import AccountAgreement from './screens/CreateAccount/AccountCreated/AccountAgreement';
//   // Legal Notices
// import TermsOfService from './screens/CreateAccount/AccountCreated/TermsOfService';
// import PrivacyStatement from './screens/CreateAccount/AccountCreated/PrivacyStatement';
// import OtherNotices from './screens/CreateAccount/AccountCreated/OtherNotices';
//
// // Account Homes
// import AccountHomes from './screens/Homes/AccountHomes';
//
// // Testing Footers
// // import MessageFooter from './screens/Components/MessageFooter';
// // import AgreeFooter from './screens/Components/AgreeFooter';
// // import StepsFooter from './screens/Components/StepsFooter';
//
// // Testing pages
// import Messages from './screens/Messages/Messages';
// import HomeThermostats from './screens/Homes/HomeThermostats';
//
// const OwnerStack = createStackNavigator (
//   {
//     AccountOwner: AccountOwner,
//     Name: OwnerName,
//     Email: AccountEmail,
//     Password: AccountPassword,
//   },
//   {
//     initialRouteName: "AccountOwner",
//   }
// );
//
// const HomeInfoStack = createStackNavigator (
//   {
//     HomeInfo: HomeInfo,
//     HomeName: HomeName,
//     HomeAddress: HomeAddress,
//   },
//   {
//     initialRouteName: "HomeInfo",
//   }
// );
//
// const ConnectThermostatStack = createStackNavigator (
//   {
//     ConnectThermostat: ConnectThermostat,
//     EnterCode: EnterCode,
//   },
//   {
//     initialRouteName: "ConnectThermostat",
//   }
// );
//
// const AgreementStack = createStackNavigator (
//   {
//     AccountCreated: AccountCreated,
//     AccountAgreement: AccountAgreement,
//     TOS: TermsOfService,
//     PS: PrivacyStatement,
//     ON: OtherNotices,
//   }
// );
//
// const LegalNoticesStack = createStackNavigator (
//   {
//     TOS: TermsOfService,
//     PS: PrivacyStatement,
//     ON: OtherNotices,
//   },
//   {
//     initialRouteName: "TOS",
//   }
// )
//
// const AccountHomesStack = createStackNavigator (
//   {
//     AccountHomes: AccountHomes,
//     AddHome: HomeInfoStack,
//   }
// )
//
// // AccountHomeScreen navs to stacks to different homes, add home stack, account stack, and messages stack
// const AccountStack = createStackNavigator (
//   {
//     AccountHomesStack: AccountHomesStack,
//   },
//   {
//     navigationOptions: {
//       headerTitle: 'Daikin Smart Thermostat',
//       headerStyle: {
//         backgroundColor: 'black',
//         height: 20,
//       },
//       headerTintColor: '#bdbdbd',
//       headerTitleStyle: {
//         fontSize: 18,
//       },
//     },
//   }
// )
//
// const AccountCreatedStack = createStackNavigator (
//   {
//     Agreement: AgreementStack,
//   },
//   {
//     navigationOptions: {
//       headerTitle: 'Daikin Smart Thermostat',
//       headerStyle: {
//         backgroundColor: 'black',
//         height: 20,
//       },
//       headerTintColor: '#bdbdbd',
//       headerTitleStyle: {
//         fontSize: 18,
//       },
//     },
//   }
// );
//
// const CreateAccountStack = createStackNavigator (
//   {
//     Owner: OwnerStack,
//     Home: HomeInfoStack,
//     ConnectThermostat: ConnectThermostatStack,
//     Agreement: AgreementStack,
//   },
//   {
//     navigationOptions: {
//       headerTitle: 'create account',
//       headerStyle: {
//         backgroundColor: 'black',
//         height: 20,
//       },
//       headerTintColor: '#bdbdbd',
//       headerTitleStyle: {
//         fontSize: 18,
//       },
//     }
//   }
// );
//
// const AppNavigator = createStackNavigator(
//   {
//     Main: StartScreen,
//     Login: LoginScreen,
//     CreateAccount: CreateAccountStack,
//   },
//   {
//     headerMode: 'none',
//     navigationOptions: {
//       headerVisible: false,
//     }
//   }
// );
//
// import PrimaryThermostatScreen from './screens/Thermostat/PrimaryThermostatScreen';
// import AdjustThermostatScreen from './screens/Thermostat/AdjustThermostatScreen';
// import ScheduleThermostatScreen from './screens/Thermostat/ScheduleThermostatScreen';
// import AwayThermostatScreen from './screens/Thermostat/AwayThermostatScreen';
// import StatusThermostatScreen from './screens/Thermostat/StatusThermostatScreen';
//
// // Testing bottom tab navigation
// const ThermostatTabNavigator = createBottomTabNavigator (
//   {
//     Primary: PrimaryThermostatScreen,
//     Adjust: AdjustThermostatScreen,
//     Schedule: ScheduleThermostatScreen,
//     Away: AwayThermostatScreen,
//     Status: StatusThermostatScreen,
//   },
//   {
//     navigationOptions: ({ navigation }) => ({
//       tabBarIcon: ({ focused, tintColor }) => {
//         const { routeName } = navigation.state;
//         let iconName;
//         if (routeName === 'Primary') {
//           iconName = `home-outline`;
//         } else if (routeName === 'Adjust') {
//           iconName = `vanish`;
//         } else if (routeName === 'Schedule') {
//           iconName = `calendar-blank`;
//         } else if (routeName === 'Away') {
//           iconName = `leaf`;
//         } else if (routeName === 'Status') {
//           iconName = `waves`;
//         }
//
//         // You can return any component that you like here! We usually use an
//         // icon component from react-native-vector-icons
//         return <Icon name={iconName} size={25} color={tintColor} />;
//       },
//     }),
//     tabBarOptions: {
//       showLabel: false,
//       activeTintColor: 'white',
//       inactiveTintColor: 'gray',
//       style: {
//         backgroundColor: 'black',
//         paddingHorizontal: 60,
//       },
//     },
//   },
//   {
//     swipeEnabled: true,
//   },
// )

// export default class App extends React.Component {
//   render() {
//     return (
//       // <AppNavigator />
//       // Testing
//       // <HomeThermostats />
//       // <ThermostatTabNavigator/>
//       <View>
//         <Text>
//           What
//         </Text>
//       </View>
//     );
//   }
// }

// AppRegistry.registerComponent('DaikinSmartThermostatApp', () => AppNavigator);

import React from "react";
import LoginScreen from './reorganizing/screens/LoginScreen';
import StartScreen from './reorganizing/screens/StartScreen';
import AccountOwnerScreen from './reorganizing/screens/AccountOwnerScreen';

export default class App extends React.Component {
  render() {
    return (
      <AccountOwnerScreen />
    );
  }
}
