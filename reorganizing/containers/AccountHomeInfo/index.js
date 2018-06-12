import React, { Component } from "react";
import { View, Text } from 'react-native';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';

import styles from './styles';

import { checkNotEntered } from '../../api/helper';
import RowItem from '../../components/RowItem/index';

class AccountHomeInfo extends Component {
  navName = () => {this.props.navigation.navigate('Name')}
  navAddress = () => {this.props.navigation.navigate('Address')}

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
            notEntered={checkNotEntered(`${this.props.name}`)}
            rowValue={`${this.props.name}`}
            handleClick={this.navName}
            rightIconName="ios-arrow-forward"
            rightIconColor='#bdbdbd'
          />
          {/* Street  */}
          <RowItem
            hasLeftIcon={false}
            rowElement="street"
            hasValue={true}
            notEntered={checkNotEntered(`${this.props.street}`)}
            rowValue={`${this.props.street}`}
            handleClick={this.navAddress}
            rightIconName="ios-arrow-forward"
            rightIconColor='#bdbdbd'
          />
          {/* Zip code */}
          <RowItem
            hasLeftIcon={false}
            rowElement="zip code"
            hasValue={true}
            notEntered={checkNotEntered(`${this.props.zipcode}`)}
            rowValue={`${this.props.zipcode}`}
            handleClick={this.navAddress}
            rightIconName="ios-arrow-forward"
            rightIconColor='#bdbdbd'
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  name: state.account.accountHomes.home.homeName,
  street: state.account.accountHomes.home.street,
  zipcode: state.account.accountHomes.home.zipcode,
})

export default withNavigation(connect(mapStateToProps)(AccountHomeInfo));
