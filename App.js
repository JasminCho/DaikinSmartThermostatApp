import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, Platform, AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Login from './src/pages/Login';
import Start from './src/pages/Start';
import CreateAccount from './src/pages/CreateAccount';
import Homes from './src/pages/Homes';
import Thermostats from './src/pages/Thermostats';

//Components
import Name from './src/components/Name';
import Email from './src/components/Email';
import Password from './src/components/Password';
import Messages from './src/components/Messages';
import AddHome from './src/components/AddHome';
import HomeName from './src/components/HomeName';
import Address from './src/components/Address';
import AddThermostat from './src/components/AddThermostat';
import ThermostatCode from './src/components/ThermostatCode';
import CreateAccountHome from './src/components/CreateAccountHome';
import CreateAccountThermostat from './src/components/CreateAccountThermostat';
import AccountCreated from './src/components/AccountCreated';
import AccountCreatedLogin from './src/components/AccountCreatedLogin';

// TODO: Work on navigation between screens and button functionalities
// import { StackNavigator, } from 'react-navigation';
// TODO: get createAccount pages done

export default class App extends React.Component {
  render() {
    return (
      <RootStack/>
    );
    // return (
    //   <View style={styles.container}>
    //     <View style={styles.statusBar}>
    //       <StatusBar translucent backgroundColor="black"/>
    //     </View>
    //     <View style={styles.content}>
    //       <Start/>
    //       {/* <Login/> */}
    //       {/* <CreateAccount/> */}
    //     </View>
    //   </View>
    // );
  }
}

const RootStack = StackNavigator({
  Start: { screen: Start },
  Login: { screen: Login },
  CreateAccount: { screen: CreateAccount },
  CreateAccountHome: { screen: CreateAccountHome },
  CreateAccountThermostat: { screen: CreateAccountThermostat },
  AccountCreated: { screen: AccountCreated },
  AccountCreatedLogin: { screen: AccountCreatedLogin },
  Homes: { screen: Homes },
  NamePage: { screen: Name },
  EmailPage: { screen: Email },
  Password: { screen: Password },
  Messages: { screen: Messages },
  AddHome: { screen: AddHome },
  HomeName: { screen: HomeName },
  Address: { screen: Address },
  Thermostats: { screen: Thermostats },
  AddThermostat: { screen: AddThermostat },
  ThermostatCode: { screen: ThermostatCode }},
  { headerMode: 'none' }
);

AppRegistry.registerComponent('testProject', () => RootStack);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  statusBar: {
    height: (Platform.OS === 'ios') ? 20 : 0,
    height: (Platform.OS === 'android') ? 24 : 0,
  },
  content: {
    flex:1,
  },
});
