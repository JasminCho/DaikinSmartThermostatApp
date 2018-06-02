import React, { Component } from "react";
import PropTypes from 'prop-types';
import { TouchableHighlight, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { renderIf } from '../../api/helper';

import styles from './styles';

class FooterButton extends Component {
  render() {
    const { text, handleClick, marginRight } = this.props;
    return(
      <TouchableHighlight style={[styles.container, {marginRight:marginRight}]} onPress={() => handleClick()}>
        <Text style={styles.text}>{text}</Text>
      </TouchableHighlight>
    );
  }
}

FooterButton.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  marginRight: PropTypes.number,
};

export default FooterButton;
