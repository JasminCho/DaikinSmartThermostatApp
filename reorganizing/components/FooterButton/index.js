import React, { Component } from "react";
import PropTypes from 'prop-types';
import { View, TouchableHighlight, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { renderIf } from '../../api/helper';

import styles from './styles';

class FooterButton extends Component {
  render() {
    const { text, handleClick, hasIcon, iconName, marginRight, justify } = this.props;
    return(
      // FIX THE TEMPLATE SO THE MESSAGES FOOTER ISN"T FUCKED
      <TouchableHighlight style={[styles.container, {marginRight:marginRight}]} onPress={() => handleClick()}>
        <View style style={{flexDirection:'row',justifyContent:justify}}>
          <Text style={styles.text}>{text}</Text>
          {
            renderIf(
              hasIcon,
              <Ionicons
                name={iconName}
                size={26}
                color='#bdbdbd'
              />
            )
          }
        </View>

      </TouchableHighlight>
    );
  }
}

FooterButton.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  hasIcon: PropTypes.bool,
  iconName: PropTypes.string,
  marginRight: PropTypes.number,
  justify: PropTypes.string,
};

export default FooterButton;
