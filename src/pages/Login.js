import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, ImageBackground } from 'react-native';
import Logo from '../components/Logo';
import LoginForm from '../components/LoginForm';

class Login extends React.Component {
  render() {
    return(
      <ImageBackground source={require('../images/background_image.jpg')} style={styles.container}>
        <Logo />
        <LoginForm navigation={this.props.navigation}/>
      </ImageBackground>
    )
  }
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(0,0,0,0.4)'
  }
});
