import React, { Component } from "react";
import { View } from 'react-native';

import styles from './styles';

import store from '../../store';
import { updateUsername } from '../../actions/actions';
import RowItem from '../../components/RowItem/index';
import FieldInput from '../../components/FieldInput/index';

class OwnerEmail extends Component {
  render() {
    const username = store.getState().ownerInfo.username
    return(
      <View style={styles.content}>
        <FieldInput
          placeholder="email address"
          secureTextEntry={false}
          autoFocus={true}
          keyboardType="email-address"
          onChangeText={(text) => store.dispatch(updateUsername(text))}
        />
        <FieldInput
          placeholder="confirm email"
          secureTextEntry={false}
          autoFocus={false}
          keyboardType="email-address"
          onChangeText={(text) => store.dispatch(updateUsername(text))}
        />
      </View>
    );
  }
}

export default OwnerEmail;
