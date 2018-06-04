import React, { Component } from "react";
import { View, Text } from 'react-native';

import { checkNotEntered } from '../../api/helper';

import styles from './styles';

import RowItem from '../RowItem/index';

class AccountOwnerInfo extends Component {
  constructor() {
    super();
    this.state = {
      ownerName: "not entered",
      username: "not entered",
      password: "not entered",
    };
  }

  replacePassword = (p) => {
    if(!checkNotEntered(p))
    {
      return '•'.repeat(p.length)
    }
  }

  render() {
    return(
      <View style={styles.container}>
        {/* Owner Name */}
        <RowItem
          hasLeftIcon={false}
          rowElement="name"
          hasValue={true}
          notEntered={checkNotEntered(this.state.ownerName)}
          rowValue={this.state.ownerName}
          handleClick={() => alert("Go to Name page")}
          rightIconName="md-arrow-forward"
          rightIconColor='#bdbdbd'
        />
        {/* Owner Email (username) */}
        <RowItem
          hasLeftIcon={false}
          rowElement="email"
          hasValue={true}
          notEntered={checkNotEntered(this.state.username)}
          rowValue={this.state.username}
          handleClick={() => alert("Go to Email page")}
          rightIconName="md-arrow-forward"
          rightIconColor='#bdbdbd'
        />
        {/* Account password */}
        <RowItem
          hasLeftIcon={false}
          rowElement="account password"
          hasValue={true}
          notEntered={checkNotEntered(this.state.password)}
          rowValue={(checkNotEntered(this.state.password)) ? this.state.password : this.replacePassword(this.state.password)}
          handleClick={() => alert("Go to Password page")}
          rightIconName="md-arrow-forward"
          rightIconColor='#bdbdbd'
        />
      </View>
    );
  }
}

export default AccountOwnerInfo;
