import React, { Component } from "react";
import PropTypes from 'prop-types';
import { View, TouchableHighlight, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { renderIf } from '../../api/helper';

import styles from './styles';

class MessagesFooter extends Component {
  render() {
    const { messageCount } = this.props;
    return(
      <View style={styles.container}>
        <TouchableHighlight style={styles.footer} onPress={() => alert("Opens up messages")}>
          <View style style={styles.content}>
            <Text style={styles.text}>messages</Text>
            <View style={styles.icons}>
              {
                // Icon with number of unread messages
                renderIf(
                  messageCount > 0,
                  <View style={styles.notification}>
                    <Text>{messageCount}</Text>
                  </View>
                )
              }
              <Ionicons
                name='ios-arrow-up'
                size={32}
                color='#bdbdbd'
              />
            </View>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

MessagesFooter.propTypes = {
  messageCount: PropTypes.number,
};

export default MessagesFooter;
