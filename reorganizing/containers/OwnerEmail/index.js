import React, { Component } from "react";
import { View } from 'react-native';
import { connect } from 'react-redux';

import styles from './styles';

import { updateUsername } from '../../actions/actions';
import RowItem from '../../components/RowItem/index';
import FieldInput from '../../components/FieldInput/index';

class OwnerEmail extends Component {
  render() {
    return(
      <View style={styles.content}>
        <FieldInput
          placeholder="email address"
          secureTextEntry={false}
          autoFocus={true}
          keyboardType="email-address"
          onChangeText={(text) => this.props.updateUsername(text)}
        />
        <FieldInput
          placeholder="confirm email"
          secureTextEntry={false}
          autoFocus={false}
          keyboardType="email-address"
          onChangeText={(text) => this.props.updateUsername(text)}
        />
      </View>
    );
  }
}

export default connect(null, {updateUsername: updateUsername})(OwnerEmail);
