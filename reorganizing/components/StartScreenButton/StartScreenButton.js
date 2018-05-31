import React, { Component } from "react";
import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';

var s = require('./styles');

class StartScreenButton extends Component {
  render() {
    const { text, handleClick } = this.props;
    return(
      <TouchableOpacity style={s.button} onPress={() => handleClick()}>
        <Text style={s.text}> {text} </Text>
      </TouchableOpacity>
    );
  }
}

StartScreenButton.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default StartScreenButton
