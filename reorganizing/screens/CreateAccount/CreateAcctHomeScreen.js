import React, { Component } from "react";
import { NavigationActions } from 'react-navigation';

import ScreenContainer from '../../components/ScreenContainer/index';

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

  handleNext = () => {this.props.navigation.navigate('ConnectThermostatStack')}
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

export default CreateAcctHomeScreen;
