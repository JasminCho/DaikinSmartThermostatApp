import React, { Component } from "react";
import PropTypes from 'prop-types';
import { TextInput } from 'react-native';

import styles from './styles';

class FieldInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputBoxColor: '#b3b3b3',
    };
  }

  onFocus() {
    console.log('this is focusing')
    this.setState({
      inputBoxColor: 'white'
    })
  }

  onBlur() {
    console.log('this is blurring')
    this.setState({
      inputBoxColor: '#b3b3b3'
    })
  }

  render() {
    const { placeholder, secureTextEntry, autoFocus, keyboardType, } = this.props;
    return(
      <TextInput
        onFocus={() => this.onFocus()}
        onBlur={() => this.onBlur()}
        style={[styles.inputBox, {backgroundColor:this.state.inputBoxColor}]}
        underlineColorAndroid={'transparent'}
        placeholder={placeholder}
        placeholderTextColor='#666666'
        secureTextEntry={secureTextEntry}
        autoFocus={autoFocus}
        keyboardType={keyboardType}
      />
    );
  }
}

FieldInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  secureTextEntry: PropTypes.bool,
  autoFocus: PropTypes.bool,
  keyboardType: PropTypes.string,
};

export default FieldInput;
