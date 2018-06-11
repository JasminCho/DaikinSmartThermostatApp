import React, { Component } from "react";
import PropTypes from 'prop-types';
import { CheckBox } from 'react-native-elements';

import styles from './styles';

class CustomCheckBox extends Component {
  render() {
    const {
      checked,
      checkedIcon,
      uncheckedIcon,
      handleChecked,
    } = this.props;
    return(
      <CheckBox
        iconType="ionicon"
        checked={checked}
        checkedIcon={checkedIcon}
        uncheckedIcon={uncheckedIcon}
        onIconPress={() => handleChecked()}
        checkedColor='white'
        uncheckedColor='white'
        containerStyle={styles.checkBox}
      />
    );
  }
}

CustomCheckBox.propTypes = {
  checked: PropTypes.bool,
  checkedIcon: PropTypes.string,
  uncheckedIcon: PropTypes.string,
  handleChecked: PropTypes.func,
};

export default CustomCheckBox;
