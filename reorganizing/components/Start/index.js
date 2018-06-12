import React, { Component } from "react";
import { View, ImageBackground } from 'react-native';

import StartScreenButton from '../StartScreenButton/index';
import Logo from '../Logo/index';

import styles from './styles';

var image = require('../../assets/images/background_image.jpg');

class Start extends Component {

  render() {
    return(
      <ImageBackground source={image} style={styles.container}>
        <Logo />
        <View>
          <StartScreenButton
            text="login"
            handleClick={() => { alert("Go to login screen") }}
            buttonColor="rgba(250,250,250,0.9)"
            textColor="rgb(3,169,244)"
          />
          <StartScreenButton
            text="create account"
            handleClick={() => { alert("Go to create account screen") }}
            buttonColor="rgba(250,250,250,0.9)"
            textColor="rgb(3,169,244)"
          />
        </View>
      </ImageBackground>
    );
  }
}

export default Start;
