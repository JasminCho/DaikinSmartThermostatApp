import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, Button } from 'react-native';


import PageControl from 'react-native-page-control';
import { Icon } from 'react-native-elements';
import { Pages } from 'react-native-pages';
import { StackNavigator } from 'react-navigation';

const AccountCreated = ({ navigation }) => (
  <View style={styles.container} behavior="padding">
    <View style={styles.header}>
      <Text style={styles.headerText}>create account</Text>
    </View>

    <View style={styles.title}>
      <Text style={styles.titleText}>account created</Text>
    </View>

    <Text style={styles.headerText}>Your account has been created and connected
      to your thermostat. You will soon receive a welcome email from Daikin with
      a link to confirm your email address. You will need to click on the link
      before you can login to your account.
    </Text>

    <View style={styles.steps}>
      <View style={styles.step}>
        <Text style={styles.stepText}>enter code</Text>
        <Icon name='chevron-right'
          size={30}
          color='#bdbdbd'
          underlayColor='black'
          onPress={() => navigation.navigate('ThermostatCode')}/>
      </View>
    </View>

    <View style={styles.footer}>
      <PageControl style={styles.footerPages} numberOfPages={4}  />
      <Text style={styles.footerText}>login</Text>
      <Icon name='arrow-forward'
        size={26}
        color='#bdbdbd'
        underlayColor='black'
        onPress={() => navigation.navigate('AccountCreatedLogin')}/>
    </View>
  </View>
);

export default AccountCreated;

const styles = StyleSheet.create({
  header: {
    flex: .5,
    marginTop: 20,
    paddingLeft: 10,
  },
  headerText: {
    color: '#bdbdbd',
    fontSize: 18,
    marginLeft: 10,
  },
  title: {
    flex: 1,
    paddingLeft: 10,
    marginTop: 10,
    marginBottom: 10,
    alignItems: 'flex-start',
  },
  titleText: {
    color: 'white',
    fontSize: 26,
    alignItems: 'center',
    marginLeft: 10,
  },
  steps: {
    flex: 10,
    flexDirection: 'column',
    marginLeft: 20,
  },
  step: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    borderTopWidth: 2,
    borderColor: '#bdbdbd',
    padding: 10,
    alignItems: 'center',
  },
  stepText: {
    color: '#bdbdbd',
    fontSize: 16,
    flex: 1,
  },
  stepStatus: {
    color: '#bdbdbd',
    fontSize: 18,
  },
  footer: {
    flex: .5,
    flexDirection: 'row',
    alignSelf: 'flex-end',
    borderTopWidth: 2,
    borderColor: '#bdbdbd',
    marginLeft: 20,
    padding: 10,
  },
  footerPages: {
    flex: 2,
  },
  footerText: {
    color: 'white',
    alignSelf: 'center',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: 'black'
  }
});
