import React, { Component } from "react";
import PropTypes from 'prop-types';
import { CheckBox } from 'react-native-elements';

import styles from './styles';

class CustomCheckBox extends Component {
  render() {
    const {
      isChecked,
      checkedIcon,
      uncheckedIcon,
      handleChecked,
    } = this.props;
    return(
      <CheckBox
        iconType="ionicon"
        checked={isChecked}
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
  isChecked: PropTypes.bool.isRequired,
  checkedIcon: PropTypes.string.isRequired,
  uncheckedIcon: PropTypes.string.isRequired,
  handleChecked: PropTypes.func.isRequired,
};

export default CustomCheckBox;
