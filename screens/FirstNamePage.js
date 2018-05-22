import React from 'react';
import { Button, View, StyleSheet, Text } from 'react-native';

export default class FirstName extends React.Component {
  render() {
    return(
      <View style={styles.container}>
        <Text>This is the First Name</Text>
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
