import React, { Component } from "react";
import { View, ImageBackground } from 'react-native';
import { withNavigation } from 'react-navigation';

import StartScreenButton from '../../components/StartScreenButton/index';
import Logo from '../../components/Logo/index';

import styles from './styles';

var image = require('../../assets/images/background_image.jpg');

class Start extends Component {

  navLogin = () => {
    // alert("Go to login screen")
    this.props.navigation.navigate('Login')
  }

  navCreateAcct = () => {
    // alert("Go to create account screen")
    this.props.navigation.navigate('CreateAccount')
  }

  render() {
    return(
      <ImageBackground source={image} style={styles.container}>
        <Logo />
        <View>
          <StartScreenButton
            text="login"
            handleClick={this.navLogin}
            buttonColor="rgba(250,250,250,0.9)"
            textColor="rgb(3,169,244)"
          />
          <StartScreenButton
            text="create account"
            handleClick={this.navCreateAcct}
            buttonColor="rgba(250,250,250,0.9)"
            textColor="rgb(3,169,244)"
          />
        </View>
      </ImageBackground>
    );
  }
}

export default withNavigation(Start);
