import React, { Component } from "react";
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import styles from './styles';

import { updatePassword } from '../../actions/actions';
import { renderIf, match } from '../../api/helper';
import RowItem from '../../components/RowItem/index';
import FieldInput from '../../components/FieldInput/index';

class OwnerPassword extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
    };
  }

  // TODO: Need to make where they can't go back unless it's confirmed
  confirmPassword(input) {
    this.setState(
      {
        value:input
      }
    )
  }

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
          value={this.state.value}
          onChangeText={(text) => this.confirmPassword(text)}
        />
        {
          renderIf(match(this.state.value, this.props.password),
          <Text style={{color:'green'}}>
            Passwords match
          </Text>)
        }
        {
          renderIf(!match(this.state.value, this.props.password),
          <Text style={{color:'red'}}>
            Passwords don't match
          </Text>)
        }
      </View>
    );
  }
}

const mapStateToProps = state => ({
  password: state.ownerInfo.password.password,
})

export default connect(mapStateToProps, {updatePassword: updatePassword})(OwnerPassword);
