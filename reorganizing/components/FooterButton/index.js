import React, { Component } from "react";
import PropTypes from 'prop-types';
import { View, TouchableHighlight, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { renderIf } from '../../api/helper';

import styles from './styles';

class FooterButton extends Component {
  render() {
    const { text, handleClick, marginRight} = this.props;
    return(
      <TouchableHighlight style={[styles.container, {marginRight:marginRight}]} onPress={() => handleClick()}>
        <View style style={styles.content}>
          <Text style={styles.text}>{text}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

FooterButton.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
  marginRight: PropTypes.number,
};

export default FooterButton;
