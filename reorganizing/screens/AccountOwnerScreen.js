import React, { Component } from "react";

import ScreenContainer from '../components/ScreenContainer/index';

class AccountOwnerScreen extends Component {
  constructor() {
    super();
    this.state = {
      // make this change when in diff stack
      title: "create account",
      subTitle: "account owner",
    };
  }

  render() {
    return(
      <ScreenContainer
        title={this.state.title}
        subTitle={this.state.subTitle}
      />
    );
  }
}

export default AccountOwnerScreen;
