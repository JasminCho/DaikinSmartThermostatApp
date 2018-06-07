import React, { Component } from "react";
import { View } from 'react-native';

import styles from './styles';

import store from '../../store';
import { updateFirstName, updateLastName } from '../../actions/actions';
import RowItem from '../../components/RowItem/index';
import FieldInput from '../../components/FieldInput/index';

class OwnerName extends Component {
  render() {
    const name = store.getState().ownerInfo.name
    return(
      <View style={styles.content}>
        <FieldInput
          placeholder="first name"
          secureTextEntry={false}
          autoFocus={true}
          onChangeText={(text) => store.dispatch(updateFirstName(text))}
        />
        <FieldInput
          placeholder="last name"
          secureTextEntry={false}
          autoFocus={false}
          onChangeText={(text) => store.dispatch(updateLastName(text))}
        />
      </View>
    );
  }
}

export default OwnerName;
