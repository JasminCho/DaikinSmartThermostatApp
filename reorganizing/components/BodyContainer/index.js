import React, { Component } from "react";
import PropTypes from 'prop-types';
import { View } from 'react-native';

import { renderIf } from '../../api/helper';

import styles from './styles';

class BodyContainer extends Component {
  render() {
    const {  } = this.props;
    return(
      <View style={styles.container}>
      </View>
    );
  }
}

BodyContainer.propTypes = {
};

export default BodyContainer;
