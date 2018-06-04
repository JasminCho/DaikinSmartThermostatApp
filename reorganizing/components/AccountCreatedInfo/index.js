import React, { Component } from "react";
import { View, Text } from 'react-native';

import styles from './styles';

import RowItem from '../RowItem/index';

class AccountCreatedInfo extends Component {

  render() {
    return(
      <View style={styles.content}>
        <Text style={styles.text}>
          Your account has been created and connected to your thermostat.
        </Text>
        <Text style={styles.text}>
          You will soon receive a welcome email from Daikin with a link to
          confirm your email address.
        </Text>
        <Text style={styles.text}>
          You will need to click on the link in the welcome email before you
          can login to your account.
        </Text>
      </View>
    );
  }
}

export default AccountCreatedInfo;
