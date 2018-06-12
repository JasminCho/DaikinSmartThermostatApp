import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, KeyboardAvoidingView, TouchableHighlight} from 'react-native';

import Login from '../pages/Login';
import CreateAccount from '../pages/CreateAccount';

const StartForm = ({ navigation }) => (
  <KeyboardAvoidingView style={styles.container} behavior="padding">
    <TouchableHighlight style={styles.button} onPress={() => navigation.navigate('Login')}>
      <View>
        <Text style={{fontSize:16, color: 'rgba(3,169,244,0.5)'}}>login</Text>
      </View>
    </TouchableHighlight>
    <TouchableHighlight style={styles.button} onPress={() => navigation.navigate('CreateAccount')}>
      <View>
        <Text style={{fontSize:16, color: 'rgba(3,169,244,0.5)'}}>create account</Text>
      </View>
    </TouchableHighlight>
  </KeyboardAvoidingView>
);

export default StartForm;

// export default class StartForm extends Component<{}> {
//
//   render() {
//     // const { navigate } = this.props.navigation;
//     const handlePress = () => false;
//     return(
//       <KeyboardAvoidingView style={styles.container} behavior="padding">
//         <TouchableHighlight style={styles.button} onPress={() => this.props.navigation.navigate('Login')}>
//           <View>
//             <Text style={{fontSize:16, color: 'rgba(3,169,244,0.5)'}}>login</Text>
//           </View>
//         </TouchableHighlight>
//         <TouchableHighlight style={styles.button} onPress={() => this.props.navigation.navigate('CreateAccount')}>
//           <View>
//             <Text style={{fontSize:16, color: 'rgba(3,169,244,0.5)'}}>create account</Text>
//           </View>
//         </TouchableHighlight>
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
  button : {
    alignSelf: 'stretch',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    paddingHorizontal: 25,
    backgroundColor: 'white',
  }
});
