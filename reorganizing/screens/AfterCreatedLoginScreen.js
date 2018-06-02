import React, { Component } from "react";

import ScreenContainer from '../components/ScreenContainer/index';

class AfterCreatedLoginScreen extends Component {
  constructor() {
    super();
    this.state = {
      // make this change when in diff stack
      title: "Daikin Smart Thermostat",
      subTitle: "login",
      screen: "AfterCreatedLogin",
      showFooter: true,
      footerType: "messages",
    };
  }

  render() {
    return(
      <ScreenContainer
        title={this.state.title}
        subTitle={this.state.subTitle}
        screen={this.state.screen}
        showFooter={this.state.showFooter}
        footerType={this.state.footerType}
      />
    );
  }
}

export default AfterCreatedLoginScreen;
