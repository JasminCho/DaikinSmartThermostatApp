import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

export default class SignupForm extends Component<{}> {
  render() {
    const handlePress = () => false
    return(
      <View style={styles.container} behavior="padding">
        <Text style={styles.header}>create account</Text>
        <Text style={styles.title}>account owner</Text>
        <View style={styles.top}>
          <Text style={{color:'white'}}>name</Text>
          <Text style={{color:'white'}}>not entered</Text>
          <Icon name='chevron-right' color='white'/>
        </View>
        <View style={styles.steps}>
          <Text style={{color:'white'}}>email</Text>
          <Text style={{color:'white'}}>not entered</Text>
          <Icon name='chevron-right' color='white'/>
        </View>
        <View style={styles.steps}>
          <Text style={{color:'white'}}>account password</Text>
          <Text style={{color:'white'}}>not entered</Text>
          <Icon name='chevron-right' color='white'/>
        </View>
        <Text style={styles.footer}>next step</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    marginBottom: 50,
    flexDirection: 'column',
  },
  header : {
    color: 'white',
    marginTop: 20,
  },
  title : {
    color: 'white',
    //marginTop: 20,
  },
  top: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    borderColor:'white',
    borderBottomWidth:1,
    marginLeft: 10,
  },
  steps: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    borderColor:'white',
    borderBottomWidth:1,
    marginLeft: 10,
  },
  footer: {
    color: 'white',
    alignSelf: 'flex-end'
  },
  button : {
  },
});
