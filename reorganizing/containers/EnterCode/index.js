import React, { Component } from "react";
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import CodeInput from 'react-native-code-input';
import styles from './styles';

import { updateCode } from '../../actions/actions';
import RowItem from '../../components/RowItem/index';

class EnterCode extends Component {
  navAccountCreated = () => {alert(`Send ${this.props.code} and link to account`)}
  render() {
    return(
      <View style={styles.content}>
        <CodeInput
          inputPosition="left"
          keyboardType="numeric"
          codeLength={6}
          borderType="square"
          activeColor="white"
          inactiveColor="#bdbdbd"
          autoFocus={true}
          codeInputStyle={{color:'white', backgroundColor:'#bdbdbd'}}
          onFulfill={(code) => this.props.updateCode(code)}
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

const mapStateToProps = state => ({
  code: state.account.accountHomes.home.thermostats.thermostatInfo.code,
})

export default connect(mapStateToProps, {updateCode: updateCode})(EnterCode);
