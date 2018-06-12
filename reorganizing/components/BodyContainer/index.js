import React, { Component } from "react";
import PropTypes from 'prop-types';
import { View } from 'react-native';

// Create Account
import AccountOwnerInfo from '../../containers/AccountOwnerInfo/index';
import AccountHomeInfo from '../../containers/AccountHomeInfo/index';
import AccountThermostatInfo from '../../containers/AccountThermostatInfo/index';
import AccountCreatedInfo from '../../containers/AccountCreatedInfo/index';
import AfterCreatedLogin from '../../containers/AfterCreatedLogin/index';
// ------------
// Owner Info
import OwnerName from '../../containers/OwnerName/index';
import OwnerEmail from '../../containers/OwnerEmail/index';
import OwnerPassword from '../../containers/OwnerPassword/index';
// ------------
// Home Home Info
import HomeName from '../../containers/HomeName/index';
import HomeAddress from '../../containers/HomeAddress/index';
// ------------
// Thermostat Info
import EnterCode from '../../containers/EnterCode/index';
// ------------
// Legal Notices
import LegalNotices from '../../containers/LegalNotices/index';
import TermsOfService from '../../containers/TermsOfService/index';
import PrivacyStatement from '../../containers/PrivacyStatement/index';
import OtherNotices from '../../containers/OtherNotices/index';
// ------------
// Main Application
import Home from '../../containers/Home/index';
// ------------

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
      case 'OwnerName':
        return <OwnerName/>
      case 'OwnerEmail':
        return <OwnerEmail/>
      case 'OwnerPassword':
        return <OwnerPassword/>
      case 'HomeName':
        return <HomeName/>
      case 'HomeAddress':
        return <HomeAddress/>
      case 'EnterCode':
        return <EnterCode/>
      case 'LegalNotices':
        return <LegalNotices/>
      case 'TermsOfService':
        return <TermsOfService/>
      case 'PrivacyStatement':
        return <PrivacyStatement/>
      case 'OtherNotices':
        return <OtherNotices/>
      case 'Home':
        return <Home/>
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
