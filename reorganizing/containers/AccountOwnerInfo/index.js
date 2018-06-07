import React, { Component } from "react";
import { View } from 'react-native';
import { withNavigation } from 'react-navigation';

import styles from './styles';

import store from '../../store';
import { checkNotEntered } from '../../api/helper';
import RowItem from '../../components/RowItem/index';

class AccountOwnerInfo extends Component {
  constructor() {
    super();
    this.state = {
      ownerName: "not entered",
      username: "not entered",
      password: "not entered",
    };
  }

  navName = () => {
    // alert("Go to Name page")
    this.props.navigation.navigate('Name')
  }

  navEmail = () => {
    alert("Go to Email page")
    // this.props.navigation.navigate('Email')
  }

  navPassword = () => {
    alert("Go to Password page")
    // this.props.navigation.navigate('Password')
  }

  render() {
    const name = store.getState().ownerInfo.name
    return(
      <View style={styles.container}>
        {/* Owner Name */}
        <RowItem
          hasLeftIcon={false}
          rowElement="name"
          hasValue={true}
          notEntered={checkNotEntered(`${name.firstName} ${name.lastName}`)}
          rowValue={`${name.firstName} ${name.lastName}`}
          handleClick={this.navName}
          rightIconName="ios-arrow-forward"
          rightIconColor='#bdbdbd'
        />
        {/* Owner Email (username) */}
        <RowItem
          hasLeftIcon={false}
          rowElement="email"
          hasValue={true}
          notEntered={checkNotEntered(this.state.username)}
          rowValue={this.state.username}
          handleClick={this.navEmail}
          rightIconName="ios-arrow-forward"
          rightIconColor='#bdbdbd'
        />
        {/* Account password */}
        <RowItem
          hasLeftIcon={false}
          rowElement="account password"
          hasValue={true}
          notEntered={checkNotEntered(this.state.password)}
          rowValue={this.state.password}
          handleClick={this.navPassword}
          rightIconName="ios-arrow-forward"
          rightIconColor='#bdbdbd'
        />
      </View>
    );
  }
}

export default withNavigation(AccountOwnerInfo);
