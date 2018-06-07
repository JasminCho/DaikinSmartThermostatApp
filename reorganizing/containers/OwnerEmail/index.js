import React, { Component } from "react";
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import styles from './styles';

import { updateUsername } from '../../actions/actions';
import { renderIf, match } from '../../api/helper';
import RowItem from '../../components/RowItem/index';
import FieldInput from '../../components/FieldInput/index';

class OwnerEmail extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
    };
  }

  // TODO: Need to make where they can't go back unless it's confirmed and validated as email
  confirmEmail(input) {
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
          value={this.state.value}
          onChangeText={(text) => this.confirmEmail(text)}
        />
        {
          renderIf(match(this.state.value, this.props.username),
          <Text style={{color:'green'}}>
            Emails match
          </Text>)
        }
        {
          renderIf(!match(this.state.value, this.props.username),
          <Text style={{color:'red'}}>
            Emails don't match
          </Text>)
        }

      </View>
    );
  }
}

const mapStateToProps = state => ({
  username: state.ownerInfo.username.email,
})

export default connect(mapStateToProps, {updateUsername: updateUsername})(OwnerEmail);
