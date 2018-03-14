import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, KeyboardAvoidingView, TouchableHighlight} from 'react-native';

export default class LoginForm extends Component<{}> {
  render() {
    const handlePress = () => false
    return(
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <TextInput style={styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)' placeholder="email" placeholderTextColor='#03a9f4'/>
        <TextInput style={styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)' placeholder="password" placeholderTextColor='#03a9f4'/>
        <TouchableHighlight style={styles.button} onPress={handlePress}>
          <View>
            <Text style={{fontSize:16, color: 'white'}}>login</Text>
          </View>
        </TouchableHighlight>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    marginBottom: 50,
    alignItems: 'center',
  },
  inputBox : {
    color: '#03a9f4',
    marginVertical: 5,
    alignSelf: 'stretch',
    height: 50,
    backgroundColor: 'rgba(250,250,250,0.9)',
    paddingHorizontal: 25,
    fontSize: 16,
  },
  button : {
    alignSelf: 'stretch',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    paddingHorizontal: 25,
    backgroundColor: 'rgba(3,169,244,0.5)',
  }
});
