import React, { Component } from "react";

import ScreenContainer from '../../components/ScreenContainer/index';

class NameScreen extends Component {
  constructor() {
    super();
    this.state = {
      // make this change when in diff stack
      title: "create account",
      subTitle: "name",
      screen: "OwnerName",
      showFooter: false,
    };
  }

  handleBack = () => {
    alert("This should go back to account owner screen")
  }

  render() {
    return(
      <ScreenContainer
        title={this.state.title}
        subTitle={this.state.subTitle}
        hasBackButton={true}
        handleBack={this.handleBack}
        screen={this.state.screen}
        showFooter={this.state.showFooter}
      />
    );
  }
}

export default NameScreen;
