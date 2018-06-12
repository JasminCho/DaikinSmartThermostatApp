import React, { Component } from "react";
import PropTypes from 'prop-types';
import { TextInput } from 'react-native';

import styles from './styles';

import { onFocus, onBlur } from '../../api/helper';

class FieldInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputBoxColor: '#b3b3b3',
    };
  }

  onFocus() {
    this.setState({
      inputBoxColor: 'white'
    })
  }

  onBlur() {
    this.setState({
      inputBoxColor: '#b3b3b3'
    })
  }

  render() {
    const { placeholder, secureTextEntry, autoFocus, keyboardType, value, onChangeText } = this.props;
    return(
      <TextInput
        onFocus={() => this.onFocus()}
        onBlur={() => this.onBlur()}
        style={[styles.inputBox, {backgroundColor:this.state.inputBoxColor}]}
        autoCapitalize='none'
        autoCorrect={false}
        underlineColorAndroid={'transparent'}
        placeholder={placeholder}
        placeholderTextColor='#666666'
        secureTextEntry={secureTextEntry}
        autoFocus={autoFocus}
        keyboardType={keyboardType}
        value={value}
        onChangeText={onChangeText}
      />
    );
  }
}

FieldInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  secureTextEntry: PropTypes.bool,
  autoFocus: PropTypes.bool,
  keyboardType: PropTypes.string,
  value: PropTypes.string,
  onChangeText: PropTypes.func.isRequired,
};

export default FieldInput;
