import React, { Component } from "react";
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

import styles from './styles';

import CustomCheckBox from '../CustomCheckBox/index';

class RadioBoxRowItem extends Component {
  render() {
    const {
      rowElement,
      isChecked,
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
            checked={isChecked}
            checkedIcon='ios-radio-button-on-outline'
            uncheckedIcon='ios-radio-button-off-outline'
            handleChecked={() => handleChecked()}
          />
        </View>
      </View>
    );
  }
}

RadioBoxRowItem.propTypes = {
  rowElement: PropTypes.string,
  isChecked: PropTypes.bool.isRequired,
  handleChecked: PropTypes.func.isRequired,
};

export default RadioBoxRowItem;
