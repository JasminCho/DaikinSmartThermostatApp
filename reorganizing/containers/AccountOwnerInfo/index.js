import React, { Component } from "react";
import { View } from 'react-native';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';

import styles from './styles';

import { checkNotEntered, notEntered } from '../../api/helper';
import RowItem from '../../components/RowItem/index';

class AccountOwnerInfo extends Component {
  navName = () => {this.props.navigation.navigate('Name')}
  navEmail = () => {this.props.navigation.navigate('Email')}
  navPassword = () => {this.props.navigation.navigate('Password')}

  render() {
    return(
      <View style={styles.container}>
        {/* Owner Name */}
        <RowItem
          hasLeftIcon={false}
          rowElement="name"
          hasValue={true}
          notEntered={checkNotEntered(`${this.props.name.firstName} ${this.props.name.lastName}`)}
          rowValue={`${this.props.name.firstName} ${this.props.name.lastName}`}
          handleClick={this.navName}
          rightIconName="ios-arrow-forward"
          rightIconColor='#bdbdbd'
        />
        {/* Owner Email (username) */}
        <RowItem
          hasLeftIcon={false}
          rowElement="email"
          hasValue={true}
          notEntered={checkNotEntered(this.props.email)}
          rowValue={this.props.email}
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
  name: state.account.accountOwner.name,
  email: state.account.accountOwner.email,
  password: state.account.accountOwner.password,
})

export default withNavigation(connect(mapStateToProps)(AccountOwnerInfo));
