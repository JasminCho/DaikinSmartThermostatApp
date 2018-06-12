import React, { Component } from "react";
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import styles from './styles';

import { updateZipcode, updateStreet } from '../../actions/actions';
import FieldInput from '../../components/FieldInput/index';

class HomeAddress extends Component {
  render() {
    return(
      <View style={styles.content}>
        <FieldInput
          placeholder="street"
          secureTextEntry={false}
          autoFocus={true}
          onChangeText={(text) => this.props.updateStreet(text)}
        />
        <FieldInput
          placeholder="zip code"
          secureTextEntry={false}
          autoFocus={false}
          keyboardType="numeric"
          onChangeText={(text) => this.props.updateZipcode(text)}
        />
      </View>
    );
  }
}

export default connect(null, {updateStreet: updateStreet, updateZipcode: updateZipcode})(HomeAddress);
