import React, { Component } from "react";
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

import BackButton from '../BackButton/index';

import { renderIf } from '../../api/helper';

import styles from './styles';

class HeaderContainer extends Component {
  render() {
    const { text, textColor, size, hasBackButton, handleBack } = this.props;
    return(
      <View style={(!hasBackButton) ? styles.noBackButton : styles.hasBackButton}>
        {
          renderIf (
            hasBackButton,
            <BackButton handleClick={handleBack}/>
          )
        }
        <Text style={{color:textColor, fontSize:size}}>
          {text}
        </Text>
      </View>
    );
  }
}

HeaderContainer.propTypes = {
  text: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  hasBackButton: PropTypes.bool,
  handleBack: PropTypes.func,
};

export default HeaderContainer;
