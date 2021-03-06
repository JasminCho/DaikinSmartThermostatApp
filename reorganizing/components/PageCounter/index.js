import React, { Component } from "react";
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { renderIf } from '../../api/helper';

import styles from './styles';

class PageCounter extends Component {
  render() {
    const { pageNum, totalPages, handleBack } = this.props;
    return(
      <View style={styles.container}>
        <View style={[styles.content]}>
        {
          // Back button shows only for steps 2 and 3
          renderIf (
            pageNum === 2 || pageNum === 3,
            <Ionicons
              name="md-arrow-back"
              size={32}
              color="#bdbdbd"
              underlayColor='white'
              onPress={() => handleBack()}
            />
          )
        }
          <Text style={styles.text}>
            {pageNum} of {totalPages}
          </Text>
        </View>
      </View>
    );
  }
}

PageCounter.propTypes = {
  pageNum: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  handleBack: PropTypes.func,
};

export default PageCounter;
