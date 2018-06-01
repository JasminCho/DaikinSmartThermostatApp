import React, { Component } from "react";
import PropTypes from 'prop-types';
import { View } from 'react-native';

import HeaderBar from '../HeaderBar/index';

import styles from './styles';

// Container Wrapper for the majority of the app screens

class ScreenContainer extends Component {
  render() {
    const { title, subTitle } = this.props;
    return(
      <View style={styles.container}>
        {/* Title: create account */}
        <HeaderBar
          text={title}
          textColor="#bdbdbd"
          size={18}
        />
        {/* Subtitle: account owner */}
        <HeaderBar
          text={subTitle}
          textColor="white"
          size={26}
        />
        {/* Body: accountOwnerInfo */}
        {/* Footer: Steps (optional) */}
      </View>
    );
  }
}

ScreenContainer.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
};

export default ScreenContainer;
