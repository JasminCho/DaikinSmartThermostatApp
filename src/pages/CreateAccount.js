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
          <Text style={styles.headerText}>create account</Text>
        </View>

        <View style={styles.title}>
          <Text style={styles.titleText}>account owner</Text>
        </View>

        <View style={styles.steps}>
          <View style={styles.step}>
            <Text style={styles.stepText}>name</Text>
            <Text style={styles.stepStatus}>not entered</Text>
            <Icon name='chevron-right'
                  size={30}
                  color='#bdbdbd'
                  underlayColor='black'
                  onPress={() => console.log('name field')}/>
          </View>

          <View style={styles.step}>
            <Text style={styles.stepText}>email</Text>
            <Text style={styles.stepStatus}>not entered</Text>
            <Icon name='chevron-right'
                  size={30}
                  color='#bdbdbd'
                  underlayColor='black'
                  onPress={() => console.log('email field')}/>
          </View>

          <View style={styles.step}>
            <Text style={styles.stepText}>account password</Text>
            <Text style={styles.stepStatus}>not entered</Text>
            <Icon name='chevron-right'
                  size={30}
                  color='#bdbdbd'
                  underlayColor='black'
                  onPress={() => console.log('password field')}/>
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>next step</Text>
          <View>
            
          </View>
          <View>

          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    flex: .5,
    marginTop: 10,
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
    flex: 1,
    padding: 10,
    backgroundColor: 'yellow',
  },
  footerText: {
    color: '#bdbdbd',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: 'black'
  }
});
