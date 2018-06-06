import React, { Component } from "react";
import { View, Text } from 'react-native';

import styles from './styles';

import RowItem from '../../components/RowItem/index';
import FieldInput from '../../components/FieldInput/index';

class AfterCreatedLogin extends Component {
  render() {
    return(
      <View style={styles.content}>
        <FieldInput
          placeholder="username"
          secureTextEntry={false}
          autoFocus={true}
          keyboardType="email-address"
        />
        <FieldInput
          placeholder="password"
          secureTextEntry={true}
          autoFocus={false}
        />

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

export default AfterCreatedLogin;
