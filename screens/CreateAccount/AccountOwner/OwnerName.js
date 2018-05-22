import React, { Component } from 'react';
import { View, KeyboardAvoidingView, StyleSheet, Text, ImageBackground, Image, Button, TouchableOpacity, TextInput } from 'react-native';
// import Icon from 'react-native-vector-icons';
import { Icon } from 'react-native-elements';

export default class OwnerName extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'name',
      headerStyle: {
        backgroundColor: 'black',
        height: 30,
      },
      headerTintColor: 'white',
      headerTitleStyle: {
        fontSize: 26,
      },
    }
  };

  constructor(props) {
    super(props)
    this.state = {
      backgroundColor: '#b3b3b3',
      backgroundColor2: '#b3b3b3'
    };
  }

  onFocus() {
    console.log('this is focusing')
    this.setState({
      backgroundColor: 'white'
    })
  }
  onFocus2() {
    console.log('this is focusing')
    this.setState({
      backgroundColor2: 'white'
    })
  }

  onBlur() {
    console.log('this is blurring')
    this.setState({
      backgroundColor: '#b3b3b3'
    })
  }
  onBlur2() {
    console.log('this is blurring')
    this.setState({
      backgroundColor2: '#b3b3b3'
    })
  }

  render() {
    return(
      <View style={styles.container}>
        <KeyboardAvoidingView style={{flex:1}} behavior="padding">
          <TextInput
            onFocus={() => this.onFocus() }
            onBlur={() => this.onBlur() }
            style={[styles.inputBox, {backgroundColor: this.state.backgroundColor}]}
            underlineColorAndroid={'transparent'}
            placeholder="first name"
            placeholderTextColor='#666666'
            autoFocus='true'
          />
          <TextInput
            onFocus={() => this.onFocus2() }
            onBlur={() => this.onBlur2() }
            style={[styles.inputBox, {backgroundColor: this.state.backgroundColor2}]}
            underlineColorAndroid={'transparent'}
            placeholder="last name"
            placeholderTextColor='#666666'
          />
        </KeyboardAvoidingView>

        <View style={styles.footer}>
          {/* <PageControl style={styles.footerPages} numberOfPages={4}  /> */}
          <Text style={styles.footerText}>next step</Text>
          <Icon name='arrow-forward'
            size={26}
            color='#bdbdbd'
            underlayColor='black'
            onPress={() => {}}/>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    flexDirection: 'column',
    paddingLeft: 30,
    paddingTop: 30,
  },
  inputBox : {
    padding: 15,
    paddingLeft: 25,
    marginTop: 5,
    fontSize: 16,
  },
  footer: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    alignItems: 'flex-end',
    borderTopWidth: 2,
    borderColor: '#bdbdbd',
    marginLeft: 20,
    padding: 10,
  },
  footerText: {
    color: 'white',
    alignSelf: 'center',
  },
})
