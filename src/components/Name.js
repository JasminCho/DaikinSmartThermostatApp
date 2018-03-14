import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, KeyboardAvoidingView, } from 'react-native';

export default class Name extends Component<{}> {
  render() {
    return(
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Text>name</Text>
        <TextInput style={styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)' placeholder="first name" placeholderTextColor='#03a9f4'/>
        <TextInput style={styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)' placeholder="last name" placeholderTextColor='#03a9f4'/>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    marginBottom: 50,
    alignItems: 'center',
  },
  inputBox : {
    color: '#03a9f4',
    marginVertical: 5,
    alignSelf: 'stretch',
    height: 50,
    backgroundColor: 'rgba(250,250,250,0.9)',
    paddingHorizontal: 25,
    fontSize: 16,
  },
});
