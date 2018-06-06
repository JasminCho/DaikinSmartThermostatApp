import React, { Component } from "react";

import ScreenContainer from '../components/ScreenContainer/index';

class CreateAcctHomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      // make this change when in diff stack
      title: "create account",
      subTitle: "home",
      screen: "AccountHomeInfo",
      showFooter: true,
      footerType: "steps",
      pageNum: 2,
      totalPages: 4,
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
        pageNum={this.state.pageNum}
        totalPages={this.state.totalPages}
      />
    );
  }
}

export default CreateAcctHomeScreen;
