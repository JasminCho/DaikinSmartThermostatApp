import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, KeyboardAvoidingView, TouchableOpacity} from 'react-native';

import Homes from '../pages/Homes';

const LoginForm = ({ navigation }) => (
  <KeyboardAvoidingView style={styles.container} behavior="padding" keyboardVerticalOffset={150}>
    <TextInput style={styles.inputBox} underlineColorAndroid={'transparent'} placeholder="email" placeholderTextColor='#03a9f4'/>
    <TextInput style={styles.inputBox} underlineColorAndroid={'transparent'} placeholder="password" secureTextEntry={true} placeholderTextColor='#03a9f4'/>

    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Homes')}>
      <View>
        <Text style={{fontSize:16, color: 'white'}}>login</Text>
      </View>
    </TouchableOpacity>

    <TouchableOpacity style={styles.button} onPress={() => console.log('An email with a temporary password has been sent to you.')}>
      <View>
        <Text style={{fontSize:16, color: 'white'}}>forgot password</Text>
      </View>
    </TouchableOpacity>
  </KeyboardAvoidingView>
);

export default LoginForm;

// export default class LoginForm extends Component<{}> {
//   render() {
//     const handlePress = () => false
//     return(
//       <KeyboardAvoidingView style={styles.container} behavior="padding" keyboardVerticalOffset={150}>
//         <TextInput style={styles.inputBox} underlineColorAndroid={'transparent'} placeholder="email" placeholderTextColor='#03a9f4'/>
//         <TextInput style={styles.inputBox} underlineColorAndroid={'transparent'} placeholder="password" secureTextEntry={true} placeholderTextColor='#03a9f4'/>
//
//         <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Homes')}>
//           <View>
//             <Text style={{fontSize:16, color: 'white'}}>login</Text>
//           </View>
//         </TouchableOpacity>
//
//         <TouchableOpacity style={styles.button} onPress={() => console.log('An email with a temporary password has been sent to you.')}>
//           <View>
//             <Text style={{fontSize:16, color: 'white'}}>forgot password</Text>
//           </View>
//         </TouchableOpacity>
//       </KeyboardAvoidingView>
//     )
//   }
// }

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
