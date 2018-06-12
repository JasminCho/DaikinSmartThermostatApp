import React, { Component } from "react";
import { NavigationActions } from 'react-navigation';

import ScreenContainer from '../../components/ScreenContainer/index';

class OtherNoticesScreen extends Component {
  constructor() {
    super();
    this.state = {
      // make this change when in diff stack
      title: "Daikin Smart Thermostat",
      subTitle: "other notices",
      screen: "OtherNotices",
      showFooter: true,
      footerType: "messages",
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
        footerType={this.state.footerType}
      />
    );
  }
}

export default OtherNoticesScreen;
