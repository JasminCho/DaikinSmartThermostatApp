import React, { Component } from "react";
import { ImageBackground } from 'react-native';

import Logo from '../../components/Logo/index';

import styles from './styles';

var image = require('../../assets/images/background_image.jpg');

class Loading extends Component {

  render() {
    return(
      <ImageBackground source={image} style={styles.container}>
        <Logo />
      </ImageBackground>
    );
  }
}

export default Loading;
