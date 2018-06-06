import React, { Component } from "react";
import { View, Text } from 'react-native';

import styles from './styles';

import RowItem from '../../RowItem/index';

class AccountThermostatInfo extends Component {
  render() {
    return(
      <View style={styles.content}>
        <Text style={styles.text}>
          With wifi enabled on your thermostat, go to: air quality / settings /
          configuration / account.
        </Text>
        <Text style={styles.text}>
          Enter the six digit number displayed on the account screen.
        </Text>
        <View style={styles.container}>
          {/* enter code */}
          <RowItem
            hasLeftIcon={false}
            rowElement="enter code"
            hasValue={false}
            handleClick={() => alert("Go to Enter code page")}
            rightIconName="ios-arrow-forward"
            rightIconColor='#bdbdbd'
          />
        </View>
      </View>
    );
  }
}

export default AccountThermostatInfo;
