import React, { Component } from "react";
import { View, Text } from 'react-native';

import styles from './styles';

class TermsOfService extends Component {
  render() {
    return(
      <View style={styles.content}>
        <Text style={styles.text}>
          These Terms of Service (“Terms”) govern your
          access to and use of the Services. Please read
          these terms carefully. They require the use of
          binding arbitration to resolve disputes rather
          than jury trials or class actions. Please follow
          the instructions in the Dispute Resolution and
          Arbitration section below if you wish to opt out
          of this provision. The term “you,” as used in
          these Terms, means any person or entity who
          accesses or uses the Services and any person
          or entity who creates an Account and accepts
          these Terms, including Owners, Authorized Users
          (as defi ned in Section 2(b)), and the parents or
          guardians of Authorized Users, as applicable
          (as described in Section 1(b)(ii)). These Terms
          give you specifi c legal rights, and you may also
          have other legal rights in addition, which vary
          from jurisdiction to jurisdiction. The disclaimers,
          exclusions, and limitations of liability under these
          Terms will not apply to the extent prohibited
          by law.
        </Text>
      </View>
    );
  }
}

export default TermsOfService;
