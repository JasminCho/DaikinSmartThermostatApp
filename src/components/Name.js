import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, KeyboardAvoidingView, } from 'react-native';
import { Icon } from 'react-native-elements';

const Name = ({ navigation }) => (
  <KeyboardAvoidingView style={styles.container} behavior="padding">
    <View style={styles.header}>
      <Text style={styles.headerText}>Daikin Smart Thermostat</Text>
    </View>

    <View style={styles.step}>
      <Icon name='chevron-left'
        size={30}
        color='#bdbdbd'
        underlayColor='black'
        onPress={() => navigation.goBack()}/>
      <View style={styles.title}>
        <Text style={styles.titleText}>name</Text>
      </View>
    </View>

    <TextInput style={styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)' placeholder="first name" placeholderTextColor='#bdbdbd'/>
    <TextInput style={styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)' placeholder="last name" placeholderTextColor='#bdbdbd'/>
  </KeyboardAvoidingView>
);

export default Name;

// export default class Name extends Component<{}> {
//   render() {
//     return(
//       <KeyboardAvoidingView style={styles.container} behavior="padding">
//         <Text>name</Text>
//         <TextInput style={styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)' placeholder="first name" placeholderTextColor='#03a9f4'/>
//         <TextInput style={styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)' placeholder="last name" placeholderTextColor='#03a9f4'/>
//       </KeyboardAvoidingView>
//     )
//   }
// }


const styles = StyleSheet.create({
  header: {
    marginTop: 20,
    paddingLeft: 10,
  },
  headerText: {
    color: '#bdbdbd',
    fontSize: 18,
    marginLeft: 10,
  },
  step: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    alignItems: 'center',
  },
  title: {
    marginTop: 10,
    marginBottom: 10,
    alignItems: 'flex-start',
  },
  titleText: {
    color: 'white',
    fontSize: 26,
  },
  inputBox : {
    color: 'black',
    marginLeft: 20,
    marginVertical: 5,
    height: 50,
    backgroundColor: 'rgba(250,250,250,0.9)',
    paddingHorizontal: 15,
    fontSize: 16,
  },
  container : {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
});
