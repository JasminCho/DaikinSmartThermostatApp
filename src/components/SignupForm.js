import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity} from 'react-native';

export default class SignupForm extends Component<{}> {
  render() {
    const handlePress = () => false
    return(
      <View style={styles.container} behavior="padding">
        <Text style={styles.header}>create account</Text>
        <Text style={styles.title}>account owner</Text>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    marginBottom: 50,
    flexDirection: 'column',
  },
  header : {
    color: 'white',
    marginTop: 20,
  },
  title : {
    color: 'white',
    marginTop: 20,
  },
  // inputBox : {
  //   color: '#03a9f4',
  //   marginVertical: 5,
  //   alignSelf: 'stretch',
  //   height: 50,
  //   backgroundColor: 'rgba(250,250,250,0.9)',
  //   paddingHorizontal: 25,
  //   fontSize: 16,
  // },
  // button : {
  //   alignSelf: 'stretch',
  //   height: 50,
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   marginVertical: 5,
  //   paddingHorizontal: 25,
  //   backgroundColor: 'rgba(3,169,244,0.5)',
  // }
});
