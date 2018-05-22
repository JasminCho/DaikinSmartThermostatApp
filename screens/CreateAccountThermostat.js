import React from 'react';
import { Button, View, StyleSheet, Text } from 'react-native';

export default class CreateAccountThermostat extends React.Component {
  render() {
    return(
      <View style={styles.container}>
        <Text>This is the Create Account Thermostat Screen</Text>
        <Button title="Back" onPress={() => this.props.navigation.navigate('CreateAccountScreen')} />
        {/* <Button title="First Name" onPress={() => this.props.navigation.navigate('FirstName')} />
        <Button title="Last Name" onPress={() => this.props.navigation.navigate('LastName')} /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
})
