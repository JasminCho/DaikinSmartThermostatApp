import React, { Component } from "react";
import { NavigationActions } from 'react-navigation';

import ScreenContainer from '../../components/ScreenContainer/index';

class EnterCodeScreen extends Component {
  constructor() {
    super();
    this.state = {
      // make this change when in diff stack
      title: "create account",
      subTitle: "enter code",
      screen: "EnterCode",
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

export default EnterCodeScreen;
