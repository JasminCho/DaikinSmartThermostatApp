import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, Platform } from 'react-native';
import Login from './src/pages/Login';
import Start from './src/pages/Start';
import CreateAccount from './src/pages/CreateAccount';

import { StackNavigator } from 'react-navigation';

// TODO: Work on navigation between screens and button functionalities
// import { StackNavigator, } from 'react-navigation';
// TODO: get createAccount pages done
const RootStack = StackNavigator({
  Start: {
    screen: Start
  },
  Login: {
    screen: Login
  },
  CreateAccount: {
    screen: CreateAccount
  },
  {
    initialRouteName: 'Start',
  }
},
{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
});

export default class App extends Component<{}> {
  render() {
    return <RootStack />;
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
