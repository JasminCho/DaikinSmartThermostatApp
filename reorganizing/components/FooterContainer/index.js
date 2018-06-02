import React, { Component } from "react";
import PropTypes from 'prop-types';
import { View } from 'react-native';

import StepsFooter from '../StepsFooter/index';
import AccountCreatedFooter from '../AccountCreatedFooter/index';
import MessagesFooter from '../MessagesFooter/index';
import { renderIf } from '../../api/helper';

import styles from './styles';

class FooterContainer extends Component {
  render() {
    const { footerType, pageNum, totalPages } = this.props;
    return(
      <View style={styles.container}>
        {renderIf(footerType === "steps", <StepsFooter pageNum={pageNum} totalPages={totalPages}/>)}
        {renderIf(footerType === "account-created", <AccountCreatedFooter/>)}
        {renderIf(footerType === "messages", <MessagesFooter/>)}

      </View>
    );
  }
}

FooterContainer.propTypes = {
  footerType: PropTypes.string.isRequired,
  pageNum: PropTypes.number,
  totalPages: PropTypes.number,
};

export default FooterContainer;
