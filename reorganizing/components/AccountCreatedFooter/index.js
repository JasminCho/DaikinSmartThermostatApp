import React, { Component } from "react";
import PropTypes from 'prop-types';
import { View } from 'react-native';

import FooterButton from '../FooterButton/index';

import { renderIf } from '../../api/helper';

import styles from './styles';

class AccountCreatedFooter extends Component {
  render() {
    const { backToStart, navToMainApp } = this.props;
    return(
      <View style={styles.container}>
        <FooterButton
          text="cancel"
          handleClick={() => backToStart()}
          marginRight={5}
        />
        <FooterButton
          text="i agree"
          handleClick={() => navToMainApp()}
        />
      </View>
    );
  }
}

AccountCreatedFooter.propTypes = {
  backToStart: PropTypes.func,
  navToMainApp: PropTypes.func,
}

export default AccountCreatedFooter;
