import React, { Component } from "react";

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

  // handleNext = () => {this.props.navigation.navigate('AcctCreatedStack')}

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
        // goToNext={this.handleNext}
      />
    );
  }
}

export default CreateAcctThermostatScreen;
