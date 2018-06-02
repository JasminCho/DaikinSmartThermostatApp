import React, { Component } from "react";
import { View } from 'react-native';

import FooterStepButton from '../FooterStepButton/index';

import { renderIf } from '../../api/helper';

import styles from './styles';

class MessagesFooter extends Component {
  render() {
    return(
      <View style={styles.container}>
        <FooterStepButton
          text="messages"
          iconName='chevron-thin-up'
          handleClick={() => alert("Opens up messages")}
        />
      </View>
    );
  }
}

export default MessagesFooter;
