import React, { Component } from "react";
import { View } from 'react-native';
import { connect } from 'react-redux';

import styles from './styles';

import { updatePassword } from '../../actions/actions';
import RowItem from '../../components/RowItem/index';
import FieldInput from '../../components/FieldInput/index';

class OwnerPassword extends Component {
  render() {
    return(
      <View style={styles.content}>
        <FieldInput
          placeholder="password"
          secureTextEntry={true}
          autoFocus={true}
          onChangeText={(text) => this.props.updatePassword(text)}
        />
        <FieldInput
          placeholder="confirm password"
          secureTextEntry={true}
          autoFocus={false}
          onChangeText={(text) => this.props.updatePassword(text)}
        />
      </View>
    );
  }
}

export default connect(null, {updatePassword: updatePassword})(OwnerPassword);
