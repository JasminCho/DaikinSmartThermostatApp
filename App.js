import React, { Component } from "react";
import { AppRegistry } from 'react-native';

// import LoginScreen from './reorganizing/screens/LoginScreen';
// import StartScreen from './reorganizing/screens/StartScreen';
// // Create Account Screens
// import CreateAcctOwnerScreen from './reorganizing/screens/CreateAccount/CreateAcctOwnerScreen';
// import CreateAcctHomeScreen from './reorganizing/screens/CreateAcctHomeScreen';
// import CreateAcctThermostatScreen from './reorganizing/screens/CreateAcctThermostatScreen';
// import AccountCreatedScreen from './reorganizing/screens/AccountCreatedScreen';
// import AfterCreatedLoginScreen from './reorganizing/screens/AfterCreatedLoginScreen';
// // Main App Screens
// import HomeScreen from './reorganizing/screens/HomeScreen';
// import AddHomeScreen from './reorganizing/screens/AddHomeScreen';

import AppNavigator from './reorganizing/navigation/AppNavigator';

export default class App extends Component {
  render() {
    return(
      // <LoginScreen />
      // <StartScreen />
      // <CreateAcctOwnerScreen />
      // <CreateAcctHomeScreen />
      // <CreateAcctThermostatScreen />
      // <AccountCreatedScreen />
      // <AfterCreatedLoginScreen/>
      // <HomeScreen />
      // <AddHomeScreen/>
      <AppNavigator />
    );
  }
}

AppRegistry.registerComponent('DaikinSmartThermostatApp', () => AppNavigator);
