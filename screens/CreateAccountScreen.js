import React from 'react';
import { Button, View, StyleSheet, Text } from 'react-native';

export default class CreateAccountScreen extends React.Component {
  render() {
    return(
      <View style={styles.container}>
        <Text>This is the Create Account Screen</Text>
        <Button title="Back" onPress={() => this.props.navigation.navigate('Main')} />
        <Button title="Name" onPress={() => this.props.navigation.navigate('Name')} />
        <Button title="Password" onPress={() => this.props.navigation.navigate('AccountPassword')} />
        <Button title="Home" onPress={() => this.props.navigation.navigate('AccountHome')} />
        <Button title="Thermostat" onPress={() => this.props.navigation.navigate('AccountThermostat')} />
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
