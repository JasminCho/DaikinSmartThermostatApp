import React, { Component } from "react";
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import styles from './styles';

import { renderIf, match } from '../../api/helper';
import FieldInput from '../../components/FieldInput/index';

import LegalNotices from '../LegalNotices/index';

class AfterCreatedLogin extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    };
  }

  render() {
    return(
      <View style={styles.content}>
        <FieldInput
          placeholder="username"
          secureTextEntry={false}
          autoFocus={false}
          keyboardType="email-address"
          value={this.state.username}
          onChangeText={(text) => this.setState({username:text})}
        />
        {
          renderIf(!match(this.state.username, this.props.email),
          <Text style={{color:'red'}}>
            Incorrect username
          </Text>)
        }
        <FieldInput
          placeholder="password"
          secureTextEntry={true}
          autoFocus={false}
          value={this.state.password}
          onChangeText={(text) => this.setState({password:text})}
        />
        {
          renderIf(!match(this.state.password, this.props.password),
          <Text style={{color:'red'}}>
            Incorrect password
          </Text>)
        }

        <LegalNotices />

      </View>
    );
  }
}

const mapStateToProps = state => ({
  email: state.account.accountOwner.email,
  password: state.account.accountOwner.password,
})

export default connect(mapStateToProps)(AfterCreatedLogin);
