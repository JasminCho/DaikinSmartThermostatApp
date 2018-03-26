import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar,  } from 'react-native';
import SignupForm from '../components/SignupForm';
import Name from '../components/Name';
import Email from '../components/Email';
import Password from '../components/Password';

import { Icon } from 'react-native-elements';

export default class Start extends Component<{}> {
  render() {
    return(
      // <View style={styles.container}>
      //   {/* <SignupForm/> */}
      //   {/* <Name/> */}
      //   {/* <Email/> */}
      //   {/* <Password/> */}
      // </View>
      <View style={styles.container} behavior="padding">
        <View style={styles.header}>
          <Text style={styles.text}>create account</Text>
        </View>

        <View style={styles.title}>
          <Text style={styles.text}>account owner</Text>
        </View>

        <View style={styles.steps}>
          <Text style={{color:'white'}}>name</Text>
          <Text style={{color:'white'}}>not entered</Text>
          <Icon name='chevron-right' color='white'/>

          <Text style={{color:'white'}}>email</Text>
          <Text style={{color:'white'}}>not entered</Text>
          <Icon name='chevron-right' color='white'/>

          <Text style={{color:'white'}}>account password</Text>
          <Text style={{color:'white'}}>not entered</Text>
          <Icon name='chevron-right' color='white'/>
        </View>

        <View style={styles.footer}>
          <Text style={styles.text}>next step</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    flex: .5,
    backgroundColor: 'blue',
  },
  title: {
    flex: 1,
    backgroundColor: 'red',
  },
  steps: {
    flex: 10,
    backgroundColor: 'gray',
  },
  text: {
    color: 'white',
  },
  footer: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: 'black'
  }
});
