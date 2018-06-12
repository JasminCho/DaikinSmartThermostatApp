import React, { Component } from "react";
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import styles from './styles';

import { renderIf, match } from '../../api/helper';
import RowItem from '../../components/RowItem/index';
import FieldInput from '../../components/FieldInput/index';

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

        <Text style={styles.text}>
          By signing into your Daikin account, you agree to the terms of service.
        </Text>
        <View style={styles.container}>
          {/* Home Name */}
          <RowItem
            hasLeftIcon={false}
            rowElement="terms of service"
            hasValue={false}
            handleClick={() => alert("Go to Terms of Service page")}
            rightIconName="ios-arrow-forward"
            rightIconColor='#bdbdbd'
          />
          {/* Street  */}
          <RowItem
            hasLeftIcon={false}
            rowElement="privacy statement"
            hasValue={false}
            handleClick={() => alert("Go to Privacy Statement page")}
            rightIconName="ios-arrow-forward"
            rightIconColor='#bdbdbd'
          />
          {/* Zip code */}
          <RowItem
            hasLeftIcon={false}
            rowElement="other notices"
            hasValue={false}
            handleClick={() => alert("Go to Other Notices page")}
            rightIconName="ios-arrow-forward"
            rightIconColor='#bdbdbd'
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  email: state.account.accountOwner.email,
  password: state.account.accountOwner.password,
})

export default connect(mapStateToProps)(AfterCreatedLogin);
