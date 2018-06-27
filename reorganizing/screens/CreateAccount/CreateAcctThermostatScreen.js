import React, { Component } from "react";
import { NavigationActions } from 'react-navigation';

import ScreenContainer from '../../components/ScreenContainer/index';

class CreateAcctThermostatScreen extends Component {
  constructor() {
    super();
    this.state = {
      // make this change when in diff stack
      title: "create account",
      subTitle: "connect to thermostat",
      screen: "AccountThermostatInfo",
      showFooter: true,
      footerType: "steps",
      pageNum: 3,
      totalPages: 4,
    };
  }

  handleNext = () => {this.props.navigation.navigate('AcctCreatedStack')}
  handleBack = () => {this.props.navigation.dispatch(NavigationActions.back())}

  render() {
    return(
      <ScreenContainer
        title={this.state.title}
        subTitle={this.state.subTitle}
        screen={this.state.screen}
        showFooter={this.state.showFooter}
        footerType={this.state.footerType}
        pageNum={this.state.pageNum}
        totalPages={this.state.totalPages}
        goToNext={this.handleNext}
        prevStep={this.handleBack}
      />
    );
  }
}

export default CreateAcctThermostatScreen;
