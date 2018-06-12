import React, { Component } from "react";
import { View } from 'react-native';
import { connect } from 'react-redux';

import styles from './styles';

import { updateFirstName, updateLastName } from '../../actions/actions';
import RowItem from '../../components/RowItem/index';

class EnterCode extends Component {
  navAccountCreated = () => {alert("Go to Account Created Page")}
  render() {
    return(
      <View style={styles.content}>
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
