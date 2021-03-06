import React, { Component } from "react";
import { View, Text } from 'react-native';
import { withNavigation } from 'react-navigation';

import styles from './styles';

import RowItem from '../../components/RowItem/index';

class AccountThermostatInfo extends Component {
  navEnterCode = () => {this.props.navigation.navigate('EnterCode')}

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
            handleClick={this.navEnterCode}
            rightIconName="ios-arrow-forward"
            rightIconColor='#bdbdbd'
          />
        </View>
      </View>
    );
  }
}

export default withNavigation(AccountThermostatInfo);
