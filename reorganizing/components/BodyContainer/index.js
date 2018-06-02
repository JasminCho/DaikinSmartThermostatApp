import React, { Component } from "react";
import PropTypes from 'prop-types';
import { View } from 'react-native';

import AccountOwnerInfo from '../AccountOwnerInfo/index';
import AccountHomeInfo from '../AccountHomeInfo/index';
import AccountThermostatInfo from '../AccountThermostatInfo/index';
import AccountCreatedInfo from '../AccountCreatedInfo';
import AfterCreatedLogin from '../AfterCreatedLogin';

import styles from './styles';

class BodyContainer extends Component {

  renderSwitch(screen) {
    switch(screen) {
      case 'AccountOwnerInfo':
        return <AccountOwnerInfo/>
      case 'AccountHomeInfo':
        return <AccountHomeInfo/>
      case 'AccountThermostatInfo':
        return <AccountThermostatInfo/>
      case 'AccountCreatedInfo':
        return <AccountCreatedInfo/>
      case 'AfterCreatedLogin':
        return <AfterCreatedLogin/>
      default:
        return null
    }
  }

  render() {
    const { screen } = this.props;
    return(
      <View style={styles.container}>
        {this.renderSwitch(screen)}
      </View>
    );
  }
}

BodyContainer.propTypes = {
  screen: PropTypes.string.isRequired,
};

export default BodyContainer;
