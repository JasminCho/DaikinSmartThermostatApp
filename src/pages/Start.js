import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, ImageBackground } from 'react-native';
import Logo from '../components/Logo';
import StartForm from '../components/StartForm';

import { StackNavigator } from 'react-navigation';

class Start extends React.Component {
  render() {
    return (
      <ImageBackground source={require('../images/background_image.jpg')} style={styles.container}>
        <Logo />
        <StartForm navigation={this.props.navigation}/>
      </ImageBackground>
    );
  }
}

export default Start;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(0,0,0,0.4)'
  }
});
