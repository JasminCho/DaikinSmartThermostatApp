import React, { Component } from "react";
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

import styles from './styles';

class HeaderBar extends Component {
  render() {
    const { text, textColor, size } = this.props;
    return(
      <View style={styles.container}>
        <Text style={{color:textColor, fontSize:size}}>
          {text}
        </Text>
      </View>
    );
  }
}

HeaderBar.propTypes = {
  text: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
};

export default HeaderBar;
