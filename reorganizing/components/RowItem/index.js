import React, { Component } from "react";
import PropTypes from 'prop-types';
import { View, TouchableHighlight, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Icon } from 'react-native-elements';

import { renderIf } from '../../api/helper';

import styles from './styles';

class RowItem extends Component {
  render() {
    const {
      hasLeftIcon,
      leftIconName,
      rowElement,
      hasValue,
      notEntered,
      rowValue,
      handleClick,
      rightIconName,
      rightIconColor,
    } = this.props;
    return(
      <View style={styles.container}>
        <View style={styles.leftSide}>
          {
            renderIf(
              hasLeftIcon,
              <Ionicons
                name={leftIconName}
                size={32}
                color='#bdbdbd'
                underlayColor='white'
              />
            )
          }
          <Text style={(!hasLeftIcon) ? styles.noLeftIcon : styles.hasLeftIcon} numberOfLines={1}>
            {rowElement}
          </Text>
        </View>
        <View style={styles.rightSide}>
          {
            renderIf(
              hasValue,
              <Text
                style={(notEntered) ? styles.valueNotEntered : styles.valueEntered}
                numberOfLines={1}
              >
                {rowValue}
              </Text>
            )
          }
          <View>
            <Ionicons
              name={rightIconName}
              size={30}
              color={rightIconColor}
              underlayColor='white'
              onPress={() => handleClick()}
            />
          </View>

        </View>
      </View>
    );
  }
}

RowItem.propTypes = {
  hasLeftIcon: PropTypes.bool,
  leftIconName: PropTypes.string,
  rowElement: PropTypes.string.isRequired,
  hasValue: PropTypes.bool,
  notEntered: PropTypes.bool,
  rowValue: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
  rightIconName: PropTypes.string.isRequired,
  rightIconColor: PropTypes.string.isRequired,
};

export default RowItem;
