import React, { Component } from "react";
import { View } from 'react-native';

import styles from './styles';

import RowItem from '../../RowItem/index';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      thisThermostatZone: "upstairs",
    };
  }

  render() {
    return(
      <View style={styles.content}>
        <View style={styles.container}>
          {/* Thermostats */}
          <RowItem
            hasLeftIcon={true}
            leftIconName="md-phone-landscape"
            rowElement={this.state.thisThermostatZone}
            hasValue={false}
            handleClick={() => alert(`Go to settings for ${this.state.thisThermostatZone} zone`)}
            rightIconName="ios-arrow-forward"
            rightIconColor='#bdbdbd'
          />
          {/* Add a new Thermostat */}
          <RowItem
            hasLeftIcon={false}
            rowElement="add thermostat"
            hasValue={false}
            handleClick={() => alert("Go to Add Thermostat page")}
            rightIconName="ios-add-circle-outline"
            rightIconColor='#bdbdbd'
          />
        </View>
      </View>
    );
  }
}

export default Home;
