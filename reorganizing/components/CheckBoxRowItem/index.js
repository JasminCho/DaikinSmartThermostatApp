import React, { Component } from "react";
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

import styles from './styles';

import CustomCheckBox from '../CustomCheckBox/index';

class CheckBoxRowItem extends Component {
  render() {
    const {
      rowElement,
      checked,
      handleChecked,
    } = this.props;
    return(
      <View style={styles.container}>
        <View style={styles.leftSide}>
          <Text style={styles.text} numberOfLines={1}>
            {rowElement}
          </Text>
        </View>
        <View style={styles.rightSide}>
          <CustomCheckBox
            checked={checked}
            checkedIcon='ios-checkbox-outline'
            uncheckedIcon='ios-square-outline'
            handleChecked={() => handleChecked()}
          />
        </View>
      </View>
    );
  }
}

CheckBoxRowItem.propTypes = {
  rowElement: PropTypes.string,
  checked: PropTypes.bool,
  handleChecked: PropTypes.func,
};

export default CheckBoxRowItem;
