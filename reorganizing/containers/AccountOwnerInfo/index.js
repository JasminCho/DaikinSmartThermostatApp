import React, { Component } from "react";
import { View } from 'react-native';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';

import styles from './styles';

import { checkNotEntered, notEntered } from '../../api/helper';
import RowItem from '../../components/RowItem/index';

class AccountOwnerInfo extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     ownerName: "not entered",
  //     username: "not entered",
  //     password: "not entered",
  //   };
  // }

  navName = () => {
    // alert("Go to Name page")
    this.props.navigation.navigate('Name')
  }

  navEmail = () => {
    // alert("Go to Email page")
    this.props.navigation.navigate('Email')
  }

  navPassword = () => {
    alert("Go to Password page")
    // this.props.navigation.navigate('Password')
  }

  render() {
    return(
      <View style={styles.container}>
        {/* Owner Name */}
        <RowItem
          hasLeftIcon={false}
          rowElement="name"
          hasValue={true}
          notEntered={checkNotEntered(`${this.props.firstName} ${this.props.lastName}`)}
          rowValue={`${this.props.firstName} ${this.props.lastName}`}
          handleClick={this.navName}
          rightIconName="ios-arrow-forward"
          rightIconColor='#bdbdbd'
        />
        {/* Owner Email (username) */}
        <RowItem
          hasLeftIcon={false}
          rowElement="email"
          hasValue={true}
          notEntered={checkNotEntered(this.props.username)}
          rowValue={this.props.username}
          handleClick={this.navEmail}
          rightIconName="ios-arrow-forward"
          rightIconColor='#bdbdbd'
        />
        {/* Account password */}
        <RowItem
          hasLeftIcon={false}
          rowElement="account password"
          hasValue={true}
          notEntered={checkNotEntered(this.props.password)}
          rowValue={this.props.password}
          handleClick={this.navPassword}
          rightIconName="ios-arrow-forward"
          rightIconColor='#bdbdbd'
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  name: state.name,
  firstName: state.firstName,
  lastName: state.lastName,
  username: state.username,
  password: state.password,
})

export default withNavigation(connect(mapStateToProps)(AccountOwnerInfo));
