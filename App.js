import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Login from './src/pages/Login';
import Start from './src/pages/Start';
import CreateAccount from './src/pages/CreateAccount';

// TODO: Work on navigation between screens and button functionalities
// import { StackNavigator, } from 'react-navigation';
//
// const App = StackNavigator({
//   Start: { screen: Start },
//   Login: { screen: Login },
//   CreateAccount: { screen: CreateAccount },
// });

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar translucent backgroundColor="black"/>
        {/* <Start/> */}
        {/* <Login/> */}
        <CreateAccount/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
