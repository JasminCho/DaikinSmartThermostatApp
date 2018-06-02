import React, { Component } from "react";
import { View, Text } from 'react-native';

import styles from './styles';

class AccountCreatedInfo extends Component {

  render() {
    return(
      <View style={styles.container}>
        <Text style={{color:'white'}}>Howdy yall</Text>
      </View>
    );
  }
}

export default AccountCreatedInfo;
