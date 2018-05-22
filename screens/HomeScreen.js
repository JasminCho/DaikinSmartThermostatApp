import React from 'react';
import { Button, View, StyleSheet, Text } from 'react-native';

export default class HomeScreen extends React.Component {
  render() {
    return(
      <View style={styles.container}>
        <Text>This is the HomeScreen</Text>
        <Button title="Login" onPress={() => this.props.navigation.navigate('Login')} />
        <Button title="Create Account" onPress={() => this.props.navigation.navigate('CreateAccountScreen')} />
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
