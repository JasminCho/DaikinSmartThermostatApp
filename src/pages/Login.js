import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, ImageBackground } from 'react-native';
import Logo from '../components/Logo';
import LoginForm from '../components/LoginForm';

export default class Login extends Component<{}> {
  render() {
    return(
      <ImageBackground source={require('../images/background_image.jpg')} style={styles.container}>
        <Logo />
        <LoginForm />
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(0,0,0,0.4)'
  }
});
