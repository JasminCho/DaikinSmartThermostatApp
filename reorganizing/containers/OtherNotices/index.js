import React, { Component } from "react";
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';

import styles from './styles';

import RowItem from '../../components/RowItem/index';

class OtherNotices extends Component {
  placeHolder = () => {alert("Will add pages eventually")}
  render() {
    return(
      <View style={styles.content}>
        <View style={styles.container}>
          <RowItem
            hasLeftIcon={false}
            rowElement="end user license agreement"
            hasValue={false}
            handleClick={this.placeHolder}
            rightIconName="ios-arrow-forward"
            rightIconColor='#bdbdbd'
          />
          <RowItem
            hasLeftIcon={false}
            rowElement="limited warranty"
            hasValue={false}
            handleClick={this.placeHolder}
            rightIconName="ios-arrow-forward"
            rightIconColor='#bdbdbd'
          />
          <RowItem
            hasLeftIcon={false}
            rowElement="intellectual property"
            hasValue={false}
            handleClick={this.placeHolder}
            rightIconName="ios-arrow-forward"
            rightIconColor='#bdbdbd'
          />
          <RowItem
            hasLeftIcon={false}
            rowElement="FCC compliance"
            hasValue={false}
            handleClick={this.placeHolder}
            rightIconName="ios-arrow-forward"
            rightIconColor='#bdbdbd'
          />
        </View>
      </View>
    );
  }
}

export default withNavigation(OtherNotices);
