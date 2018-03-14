import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Logo extends Component<{}> {
  render() {
    return(
      <View style={styles.container}>
        <Image source={require('../images/daikin-comfort-logo-crop-u1511.png')} />
        <Text style={styles.logoText}>smart thermostat</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    margin: 30,
    marginTop: 100,
    alignItems: 'flex-start'
  },
  logoText : {
    fontSize: 25,
    color: '#03a9f4',
  }
});
