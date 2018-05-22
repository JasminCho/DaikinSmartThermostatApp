import React from 'react';
import { Button, View, StyleSheet, Text } from 'react-native';

export default class CreateAccountPassword extends React.Component {
  render() {
    return(
      <View style={styles.container}>
        <Text>This is the Create Account Name Screen</Text>
        <Button title="Back" onPress={() => this.props.navigation.navigate('CreateAccountScreen')} />
        <Button title="Password" onPress={() => {}} />
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
