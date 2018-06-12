import React, { Component } from "react";
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import styles from './styles';

class BackButton extends Component {
  render() {
    const { handleClick, } = this.props;
    return(
      <View style={styles.container}>
        <Ionicons
          name="ios-arrow-back"
          size={26}
          color='#bdbdbd'
          underlayColor='white'
          onPress={() => handleClick()}
        />
      </View>
    );
  }
}

BackButton.propTypes = { handleClick: PropTypes.func, };

export default BackButton;
