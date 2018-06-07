import React, { Component } from "react";
import { View } from 'react-native';
import { connect } from 'react-redux';

import styles from './styles';

import * as actions from '../../actions';
import RowItem from '../../components/RowItem/index';
import FieldInput from '../../components/FieldInput/index';

class OwnerName extends Component {
  render() {
    return(
      <View style={styles.content}>
        <FieldInput
          placeholder="first name"
          secureTextEntry={false}
          autoFocus={true}
          onChangeText={(text) => this.props.updateFirstName(text)}
        />
        <FieldInput
          placeholder="last name"
          secureTextEntry={false}
          autoFocus={false}
          onChangeText={(text) => this.props.updateLastName(text)}
        />
      </View>
    );
  }
}

export default connect(null, {updateFirstName: actions.updateFirstName, updateLastName: actions.updateLastName})(OwnerName);
