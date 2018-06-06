import React, { Component } from "react";
import { View, Text } from 'react-native';

import { checkNotEntered } from '../../api/helper';

import styles from './styles';

import RowItem from '../../components/RowItem/index';

class AccountHomeInfo extends Component {
  constructor() {
    super();
    this.state = {
      homeName: "not entered",
      street: "not entered",
      zipCode: "not entered",
    };
  }

  render() {
    return(
      <View style={styles.content}>
        <Text style={styles.text}>
          Name and address for this home:
        </Text>
        <View style={styles.container}>
          {/* Home Name */}
          <RowItem
            hasLeftIcon={false}
            rowElement="name"
            hasValue={true}
            notEntered={checkNotEntered(this.state.homeName)}
            rowValue={this.state.homeName}
            handleClick={() => alert("Go to Home Name page")}
            rightIconName="ios-arrow-forward"
            rightIconColor='#bdbdbd'
          />
          {/* Street  */}
          <RowItem
            hasLeftIcon={false}
            rowElement="street"
            hasValue={true}
            notEntered={checkNotEntered(this.state.street)}
            rowValue={this.state.street}
            handleClick={() => alert("Go to Address page")}
            rightIconName="ios-arrow-forward"
            rightIconColor='#bdbdbd'
          />
          {/* Zip code */}
          <RowItem
            hasLeftIcon={false}
            rowElement="zip code"
            hasValue={true}
            notEntered={checkNotEntered(this.state.zipCode)}
            rowValue={this.state.zipCode}
            handleClick={() => alert("Go to Address page")}
            rightIconName="ios-arrow-forward"
            rightIconColor='#bdbdbd'
          />
        </View>
      </View>
    );
  }
}

export default AccountHomeInfo;
