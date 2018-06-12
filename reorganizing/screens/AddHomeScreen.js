import React, { Component } from "react";

import ScreenContainer from '../components/ScreenContainer/index';

class AddHomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      // make this change when in diff stack
      title: "add home",
      subTitle: "home",
      screen: "AccountHomeInfo",
      showFooter: false,
    };
  }

  render() {
    return(
      <ScreenContainer
        title={this.state.title}
        subTitle={this.state.subTitle}
        screen={this.state.screen}
        showFooter={this.state.showFooter}
      />
    );
  }
}

export default AddHomeScreen;
