import React, { Component } from "react";
import { View, Text } from 'react-native';
import { withNavigation } from 'react-navigation';

import styles from './styles';

import RowItem from '../../components/RowItem/index';

class LegalNotices extends Component {
  navTermsOfService = () => {this.props.navigation.navigate('TermsOfService')}
  navPrivacyStatement = () => {this.props.navigation.navigate('PrivacyStatement')}
  navOtherNotices = () => {this.props.navigation.navigate('OtherNoticesStack')}

  render() {
    return(
      <View style={styles.content}>
        <Text style={styles.text}>
          By signing into your Daikin account, you agree to the terms of service:
        </Text>
        <View style={styles.container}>
          <RowItem
            hasLeftIcon={false}
            rowElement="terms of service"
            hasValue={false}
            handleClick={this.navTermsOfService}
            rightIconName="ios-arrow-forward"
            rightIconColor='#bdbdbd'
          />
          <RowItem
            hasLeftIcon={false}
            rowElement="privacy statement"
            hasValue={false}
            handleClick={this.navPrivacyStatement}
            rightIconName="ios-arrow-forward"
            rightIconColor='#bdbdbd'
          />
          <RowItem
            hasLeftIcon={false}
            rowElement="other notices"
            hasValue={false}
            handleClick={this.navOtherNotices}
            rightIconName="ios-arrow-forward"
            rightIconColor='#bdbdbd'
          />
        </View>
      </View>
    );
  }
}

export default withNavigation(LegalNotices);
