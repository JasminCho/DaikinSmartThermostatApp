import React, { Component } from "react";
import PropTypes from 'prop-types';
import { View } from 'react-native';

import PageCounter from '../PageCounter/index';
import FooterIconButton from '../FooterIconButton/index';

import { renderIf } from '../../api/helper';

import styles from './styles';

class StepsFooter extends Component {
  render() {
    const { pageNum, totalPages } = this.props;
    return(
      <View style={styles.container}>
        <PageCounter pageNum={pageNum} totalPages={totalPages}/>
        {
          // From page 1-3, next button shows
          renderIf (
            pageNum !== 4,
            <FooterIconButton
              text="next step"
              iconName='md-arrow-forward'
              handleClick={() => alert("Go to next page")}
              justify='flex-end'
            />
          )
        }
        {
          // On page 4, the login button replaces the next button
          renderIf (
            pageNum === 4,
            <FooterIconButton
              text="login"
              iconName='md-arrow-forward'
              handleClick={() => alert("Go to agreement page")}
              justify='flex-end'
            />
          )
        }
      </View>
    );
  }
}

StepsFooter.propTypes = {
  pageNum: PropTypes.number,
  totalPages: PropTypes.number,
};

export default StepsFooter;
