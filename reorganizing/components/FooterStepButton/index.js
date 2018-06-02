import React, { Component } from "react";
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { renderIf } from '../../api/helper';

import styles from './styles';

class FooterStepButton extends Component {
  render() {
    const { text, iconName, handleClick } = this.props;
    return(
      <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
        <Ionicons
          name={iconName}
          size={26}
          color='#bdbdbd'
          underlayColor='white'
          onPress={() => handleClick()}
        />
      </View>
    );
  }
}

FooterStepButton.propTypes = {
  text: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default FooterStepButton;
