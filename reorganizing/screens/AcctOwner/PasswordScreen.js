import React, { Component } from "react";
import { NavigationActions } from 'react-navigation';

import ScreenContainer from '../../components/ScreenContainer/index';

class PasswordScreen extends Component {
  constructor() {
    super();
    this.state = {
      // make this change when in diff stack
      title: "create account",
      subTitle: "account password",
      screen: "OwnerPassword",
      showFooter: false,
    };
  }

  handleBack = () => {this.props.navigation.dispatch(NavigationActions.back())}

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

export default PasswordScreen;
