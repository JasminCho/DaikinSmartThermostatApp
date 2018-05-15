import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, KeyboardAvoidingView } from 'react-native';
import { Icon } from 'react-native-elements';
import { PasswordInputText } from 'react-native-hide-show-password-input';
import CodeInput from 'react-native-code-input';

const ThermostatCode = ({ navigation }) => (
  <KeyboardAvoidingView style={styles.container} behavior="padding">
    <View style={styles.header}>
      <Text style={styles.headerText}>add thermostat</Text>
    </View>

    <View style={styles.step}>
      <Icon name='chevron-left'
        size={30}
        color='#bdbdbd'
        underlayColor='black'
        onPress={() => navigation.goBack()}/>
      <View style={styles.title}>
        <Text style={styles.titleText}>enter code</Text>
      </View>
    </View>

    <CodeInput
      codeLength={6}
      activeColor='white'
      inactiveColor='gray'
      autoFocus={false}
      inputPosition='center'
      size={50}
      onFulfill={(code) => this._onFulfill(code)}
      containerStyle={{ marginTop: 30 }}
      codeInputStyle={{ borderWidth: 1.5 }}
    />

    <View style={styles.steps}>
      <View style={styles.step}>
        <Text style={styles.stepText}>send code and link to account</Text>
        <Icon name='chevron-right'
          size={30}
          color='#bdbdbd'
          underlayColor='black'
          onPress={() => navigation.navigate('Thermostats')}/>
      </View>
    </View>

  </KeyboardAvoidingView>
);

export default ThermostatCode;

const styles = StyleSheet.create({
  header: {
    marginTop: 20,
    paddingLeft: 10,
  },
  headerText: {
    color: '#bdbdbd',
    fontSize: 18,
    marginLeft: 10,
  },
  step: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    alignItems: 'center',
  },
  steps: {
    flex: 10,
    flexDirection: 'column',
    marginLeft: 20,
  },
  // step: {
  //   flexDirection: 'row',
  //   alignSelf: 'flex-end',
  //   borderTopWidth: 2,
  //   borderColor: '#bdbdbd',
  //   padding: 10,
  //   alignItems: 'center',
  // },
  stepText: {
    color: '#bdbdbd',
    fontSize: 16,
    flex: 1,
  },
  stepStatus: {
    color: '#bdbdbd',
    fontSize: 18,
  },
  title: {
    marginTop: 10,
    marginBottom: 10,
    alignItems: 'flex-start',
  },
  titleText: {
    color: 'white',
    fontSize: 26,
  },
  inputBox : {
    color: 'black',
    marginLeft: 20,
    marginVertical: 5,
    height: 50,
    backgroundColor: 'rgba(250,250,250,0.9)',
    paddingHorizontal: 15,
    fontSize: 16,
  },
  container : {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
});
