import React, { Component } from "react";
import { View } from 'react-native';
import { connect } from 'react-redux';

import styles from './styles';

import { updateHomeName } from '../../actions/actions';
import FieldInput from '../../components/FieldInput/index';

class HomeName extends Component {
  render() {
    return(
      <View style={styles.content}>
        <FieldInput
          placeholder="home name"
          secureTextEntry={false}
          autoFocus={true}
          onChangeText={(text) => this.props.updateHomeName(text)}
        />
      </View>
    );
  }
}

export default connect(null, {updateHomeName: updateHomeName})(HomeName);
