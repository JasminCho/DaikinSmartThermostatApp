import React, { Component } from "react";
import { View } from 'react-native';

import FooterButton from '../FooterButton/index';

import styles from './styles';

class MessagesFooter extends Component {
  render() {
    return(
      <View style={styles.container}>
        <FooterButton
          text="messages"
          hasIcon={true}
          iconName='ios-arrow-up'
          handleClick={() => alert("Opens up messages")}
          justify="space-between"
        />
      </View>
    );
  }
}

export default MessagesFooter;
