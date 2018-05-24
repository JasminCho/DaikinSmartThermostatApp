import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, Button, TextInput, TouchableHighlight } from 'react-native';

import PageControl from 'react-native-page-control';
import { Icon } from 'react-native-elements';
import { Pages } from 'react-native-pages';
import { StackNavigator } from 'react-navigation';

const AccountCreated = ({ navigation }) => (
  <View style={styles.container} behavior="padding">
    <View style={styles.header}>
      <Text style={styles.headerText}>Daikin Smart Thermostat</Text>
    </View>

    <View style={styles.title}>
      <Text style={styles.titleText}>login</Text>
    </View>

    <TextInput style={styles.inputBox} underlineColorAndroid={'transparent'} placeholder="email" placeholderTextColor='#03a9f4'/>
    <TextInput style={styles.inputBox} underlineColorAndroid={'transparent'} placeholder="password" secureTextEntry={true} placeholderTextColor='#03a9f4'/>

    <Text style={styles.headerText}>By signing into your Daikin account, you agree
      to the terms of service.
    </Text>

    {/* TODO: Add static pages for Terms of Service, Privacy Statement, and Other Notices */}
    <View style={styles.steps}>
      <View style={styles.step}>
        <Text style={styles.stepText}>terms of service</Text>
        <Icon name='chevron-right'
          size={30}
          color='#bdbdbd'
          underlayColor='black'
          onPress={() => navigation.navigate('TermsOfService')}/>
      </View>
      <View style={styles.step}>
        <Text style={styles.stepText}>privacy statement</Text>
        <Icon name='chevron-right'
          size={30}
          color='#bdbdbd'
          underlayColor='black'
          onPress={() => navigation.navigate('PrivacyStatement')}/>
      </View>
      <View style={styles.step}>
        <Text style={styles.stepText}>other notices</Text>
        <Icon name='chevron-right'
          size={30}
          color='#bdbdbd'
          underlayColor='black'
          onPress={() => navigation.navigate('OtherNotices')}/>
      </View>
    </View>

    <View style={styles.footer}>
      <TouchableHighlight style={styles.button} onPress={() => navigation.navigate('Homes')}>
        <View>
          <Text style={styles.footerText}>cancel</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight style={styles.button} onPress={() => navigation.navigate('Homes')}>
        <View>
          <Text style={styles.footerText}>I agree</Text>
        </View>
      </TouchableHighlight>
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
