import React, { Component } from "react";
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import styles from './styles';

import { updatePassword } from '../../actions/actions';
import { renderIf, match } from '../../api/helper';
import RowItem from '../../components/RowItem/index';
import FieldInput from '../../components/FieldInput/index';
import CheckBoxRowItem from '../../components/CheckBoxRowItem/index';

import { CheckBox } from 'react-native-elements';

class OwnerPassword extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
      checked: false,
      secureText: true,
    };
  }

  // TODO: Need to make where they can't go back unless it's confirmed
  confirmPassword(input) {
    this.setState ({
        value:input
      })
  }

  toggleSecureText = () => {
    this.setState({
      checked: !this.state.checked,
      secureText: !this.state.secureText,
    })
  }

  render() {
    return(
      <View style={styles.content}>
        <FieldInput
          placeholder="password"
          secureTextEntry={this.state.secureText}
          autoFocus={true}
          onChangeText={(text) => this.props.updatePassword(text)}
        />
        <FieldInput
          placeholder="confirm password"
          secureTextEntry={this.state.secureText}
          autoFocus={false}
          value={this.state.value}
          onChangeText={(text) => this.confirmPassword(text)}
        />
        <View style={styles.container}>
          <CheckBoxRowItem
            rowElement="show text"
            checked={this.state.checked}
            handleChecked={this.toggleSecureText}
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
      </View>
    );
  }
}

const mapStateToProps = state => ({
  password: state.account.accountOwner.password,
})

export default connect(mapStateToProps, {updatePassword: updatePassword})(OwnerPassword);
