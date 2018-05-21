import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, Button } from 'react-native';
import { Constants } from 'expo';

import PageControl from 'react-native-page-control';
import { Icon } from 'react-native-elements';
import { Pages } from 'react-native-pages';
import { StackNavigator } from 'react-navigation';

import SignupForm from '../components/SignupForm';
import Name from '../components/Name';
import Email from '../components/Email';
import Password from '../components/Password';
import CreateAccountOwner from '../components/CreateAccountOwner';
import CreateAccountHome from '../components/CreateAccountHome';
import CreateAccountThermostat from '../components/CreateAccountThermostat';
import AccountCreated from '../components/AccountCreated';
import AccountCreatedLogin from '../components/AccountCreatedLogin';

class CreateAccount extends React.Component {
  render() {
    return(
      <View style={styles.container} behavior="padding">
        {/* TODO: Make header a component to share and uses list of navigation */}
        <View style={styles.header}>
          <Text style={styles.headerText}>create account</Text>
        </View>
        {/* <CreateAccountOwner navigation={this.props.navigation}/> */}
        <Pages style={styles.pages}>
          <CreateAccountOwner navigation={this.props.navigation}/>
          <CreateAccountHome navigation={this.props.navigation}/>
          <CreateAccountThermostat navigation={this.props.navigation}/>
          <AccountCreated navigation={this.props.navigation}/>
          {/* <AccountCreatedLogin navigation={this.props.navigation}/>  */}
        </Pages>

        {/* TODO: Make footer a component to share and uses list of navigation */}
      </View>
    );
  }
}

export default CreateAccount;

const styles = StyleSheet.create({
  header: {
    flex: .5,
    paddingTop: Constants.statusBarHeight,
    paddingLeft: 10,
  },
  headerText: {
    color: '#bdbdbd',
    fontSize: 18,
    marginLeft: 10,
  },
  pages: {
    flex: 1,

  },
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    // justifyContent: 'space-around',
    backgroundColor: 'black'
  }
});
