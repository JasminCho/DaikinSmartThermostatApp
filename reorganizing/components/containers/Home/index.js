import React, { Component } from "react";
import { View } from 'react-native';

import styles from './styles';

import RowItem from '../../RowItem/index';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      thisHomeName: "West Park Home",
    };
  }

  render() {
    return(
      <View style={styles.content}>
        <View style={styles.container}>
          {/* Homes */}
          <RowItem
            hasLeftIcon={true}
            leftIconName="ios-home-outline"
            rowElement={this.state.thisHomeName}
            hasValue={false}
            handleClick={() => alert(`Go to Thermostats page for ${this.state.thisHomeName}`)}
            rightIconName="ios-arrow-forward"
            rightIconColor='#bdbdbd'
          />
          {/* Add a new Home */}
          <RowItem
            hasLeftIcon={false}
            rowElement="add home"
            hasValue={false}
            handleClick={() => alert("Go to Add Home page")}
            rightIconName="ios-add-circle-outline"
            rightIconColor='#bdbdbd'
          />
        </View>
        <View style={styles.container2}>
          {/* My Account */}
          <RowItem
            hasLeftIcon={true}
            leftIconName="ios-settings-outline"
            rowElement="my account"
            hasValue={true}
            handleClick={() => alert("Go to Account page")}
            rightIconName="ios-arrow-forward"
            rightIconColor='#bdbdbd'
          />
        </View>
      </View>
    );
  }
}

export default Home;
