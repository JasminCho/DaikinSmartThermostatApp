import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, KeyboardAvoidingView, TouchableHighlight} from 'react-native';

export default class StartForm extends Component<{}> {
  render() {
    const handlePress = () => false
    return(
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <TouchableHighlight style={styles.button} onPress={handlePress}>
          <View>
            <Text style={{fontSize:16, color: 'white'}}>login</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button} onPress={handlePress}>
          <View>
            <Text style={{fontSize:16, color: 'white'}}>create account</Text>
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
