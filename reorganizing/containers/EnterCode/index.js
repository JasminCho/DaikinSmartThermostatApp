import React, { Component } from "react";
import { View } from 'react-native';
import { connect } from 'react-redux';
import CodeInput from 'react-native-code-input';
import styles from './styles';

import { updateFirstName, updateLastName } from '../../actions/actions';
import RowItem from '../../components/RowItem/index';

class EnterCode extends Component {
  navAccountCreated = () => {alert("Go to Account Created Page")}
  render() {
    return(
      <View style={styles.content}>
        <CodeInput
          inputPosition="left"
          keyboardType="numeric"
          codeLength={6}
          borderType="square"
          autoFocus={true}
          codeInputStyle={{color:'black', backgroundColor:'gray'}}
          containerStyle={{}}
        />
        <View style={styles.container}>
          <RowItem
            hasLeftIcon={false}
            rowElement="send code and link to account"
            hasValue={false}
            handleClick={this.navAccountCreated}
            rightIconName="ios-arrow-forward"
            rightIconColor='#bdbdbd'
          />
        </View>
      </View>
    );
  }
}

export default connect(null, {updateFirstName: updateFirstName, updateLastName: updateLastName})(EnterCode);
