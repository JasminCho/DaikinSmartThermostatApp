import React, { Component } from "react";
import PropTypes from 'prop-types';
import { View } from 'react-native';

import HeaderContainer from '../HeaderContainer/index';
import BodyContainer from '../BodyContainer/index';
import FooterContainer from '../FooterContainer/index';
import { renderIf } from '../../api/helper';

import styles from './styles';

// Container Wrapper for the majority of the app screens
class ScreenContainer extends Component {
  render() {
    const { title, subTitle, screen, showFooter, footerType, pageNum, totalPages } = this.props;
    return(
      <View style={styles.container}>
        {/* Title */}
        <HeaderContainer text={title} textColor="#bdbdbd" size={18}/>

        {/* Subtitle */}
        <HeaderContainer text={subTitle} textColor="white" size={26}/>

        {/* Body */}
        <BodyContainer screen={screen}/>

        {/* Footer */}
        {
          renderIf(
            // Only show footer if showFooter is true
            showFooter === true,
            <FooterContainer footerType={footerType} pageNum={pageNum} totalPages={totalPages}/>
          )
        }
      </View>
    );
  }
}

ScreenContainer.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  screen: PropTypes.string.isRequired,
  showFooter: PropTypes.bool.isRequired,
  footerType: PropTypes.string,
  pageNum: PropTypes.number,
  totalPages: PropTypes.number,
};

export default ScreenContainer;
