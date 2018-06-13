import React, { Component } from "react";
import { NavigationActions, StackActions } from 'react-navigation';

import ScreenContainer from '../../components/ScreenContainer/index';

class AfterCreatedLoginScreen extends Component {
  constructor() {
    super();
    this.state = {
      // make this change when in diff stack
      title: "Daikin Smart Thermostat",
      subTitle: "login",
      screen: "AfterCreatedLogin",
      showFooter: true,
      footerType: "account-created",
    };
  }

  handleBack = () => {this.props.navigation.dispatch(NavigationActions.back())}
  backToStart = () => {this.props.navigation.navigate('Start')}
  //TODO: make it where they can't go back once in main application
  navToMainApp = () => {this.props.navigation.navigate('MainApplicationNavigator')}
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
        backToStart={this.backToStart}
        navToMainApp={this.navToMainApp}
      />
    );
  }
}

export default AfterCreatedLoginScreen;
