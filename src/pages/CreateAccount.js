import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar,  } from 'react-native';
import Name from '../components/Name';
import Email from '../components/Email';
import Password from '../components/Password';

export default class Start extends Component<{}> {
  render() {
    return(
      <View style={styles.container}>
        <Name/>
        {/* <Email/> */}
        {/* <Password/> */}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: 'black'
  }
});
