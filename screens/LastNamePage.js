import React from 'react';
import { Button, View, StyleSheet, Text } from 'react-native';

export default class LastName extends React.Component {
  render() {
    return(
      <View style={styles.container}>
        <Text>This is the Last Name</Text>
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
