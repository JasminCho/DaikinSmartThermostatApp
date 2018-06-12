import React, { Component } from "react";
import { View } from 'react-native';

import FooterButton from '../FooterButton/index';

import { renderIf } from '../../api/helper';

import styles from './styles';

class AccountCreatedFooter extends Component {
  render() {
    return(
      <View style={styles.container}>
        <FooterButton
          text="cancel"
          handleClick={() => alert("You sure you want to cancel?")}
          marginRight={5}
        />
        <FooterButton
          text="i agree"
          handleClick={() => alert("Go to My Homes")}
        />
      </View>
    );
  }
}

export default AccountCreatedFooter;
