import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, Platform, AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Login from './src/pages/Login';
import Start from './src/pages/Start';
import CreateAccount from './src/pages/CreateAccount';

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
  CreateAccount: { screen: CreateAccount }},
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
