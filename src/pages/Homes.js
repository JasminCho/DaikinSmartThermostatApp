import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, Button } from 'react-native';

import Messages from '../components/Messages';
import AddHome from '../components/AddHome';
import Thermostats from '../pages/Thermostats';

import PageControl from 'react-native-page-control';
import { Icon } from 'react-native-elements';
import { Pages } from 'react-native-pages';
import { StackNavigator } from 'react-navigation';

const Homes = ({ navigation }) => (
  <View style={styles.container} behavior="padding">
    <View style={styles.header}>
      <Text style={styles.headerText}>Daikin Smart Thermostat</Text>
    </View>

    <View style={styles.title}>
      <Text style={styles.titleText}>my homes</Text>
    </View>

    <View style={styles.steps}>
      {/* TODO: This should be a redux template for all homes */}
      <View style={styles.step}>
        <Icon name='chevron-right'
          size={30}
          color='#bdbdbd'
          underlayColor='black'/>
        <Text style={styles.stepText}>Example Home</Text>
        <Icon name='chevron-right'
          size={30}
          color='#bdbdbd'
          underlayColor='black'
          onPress={() => navigation.navigate('Thermostats')}/>
      </View>
      {/* End of template */}

      <View style={styles.step}>
        <Text style={styles.stepText}>add home</Text>
        <Icon name='chevron-right'
          size={30}
          color='#bdbdbd'
          underlayColor='black'
          onPress={() => navigation.navigate('AddHome')}/>
      </View>

      <View style={styles.step}>
        <Icon name='chevron-right'
          size={30}
          color='#bdbdbd'
          underlayColor='black'/>
        <Text style={styles.stepText}>my account</Text>
        <Icon name='chevron-right'
          size={30}
          color='#bdbdbd'
          underlayColor='black'
          onPress={() => this.props.navigation.navigate('EmailPage')}/>
      </View>

      <View style={styles.step}>
        <Text style={styles.stepText}>messages</Text>
        <Icon name='chevron-right'
          size={30}
          color='#bdbdbd'
          underlayColor='black'
          onPress={() => navigation.navigate('Messages')}/>
      </View>
    </View>
  </View>
);

export default Homes;

// class Homes extends React.Component {
//   render() {
//     return(
//       <View style={styles.container} behavior="padding">
//         <View style={styles.header}>
//           <Text style={styles.headerText}>Daikin Smart Thermostat</Text>
//         </View>
//
//         <View style={styles.title}>
//           <Text style={styles.titleText}>my homes</Text>
//         </View>
//
//         <View style={styles.steps}>
//           <View style={styles.step}>
//             <Text style={styles.stepText}>add home</Text>
//             <Icon name='chevron-right'
//               size={30}
//               color='#bdbdbd'
//               underlayColor='black'
//               onPress={() => this.props.navigation.navigate('NamePage')}/>
//           </View>
//
//           <View style={styles.step}>
//             <Icon name='chevron-right'
//               size={30}
//               color='#bdbdbd'
//               underlayColor='black'
//               onPress={() => this.props.navigation.navigate('EmailPage')}/>
//             <Text style={styles.stepText}>my account</Text>
//             <Icon name='chevron-right'
//               size={30}
//               color='#bdbdbd'
//               underlayColor='black'
//               onPress={() => this.props.navigation.navigate('EmailPage')}/>
//           </View>
//
//           <View style={styles.step}>
//             <Text style={styles.stepText}>messages</Text>
//             <Icon name='chevron-right'
//               size={30}
//               color='#bdbdbd'
//               underlayColor='black'
//               onPress={() => this.props.navigation.navigate('Password')}/>
//           </View>
//         </View>
//
//       </View>
//     );
//   }
// }

// export default Homes;

const styles = StyleSheet.create({
  header: {
    flex: .5,
    marginTop: 20,
    paddingLeft: 10,
  },
  headerText: {
    color: '#bdbdbd',
    fontSize: 18,
    marginLeft: 10,
  },
  title: {
    flex: 1,
    paddingLeft: 10,
    marginTop: 10,
    marginBottom: 10,
    alignItems: 'flex-start',
  },
  titleText: {
    color: 'white',
    fontSize: 26,
    alignItems: 'center',
    marginLeft: 10,
  },
  steps: {
    flex: 10,
    flexDirection: 'column',
    marginLeft: 20,
  },
  step: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    borderTopWidth: 2,
    borderColor: '#bdbdbd',
    padding: 10,
    alignItems: 'center',
  },
  stepText: {
    color: '#bdbdbd',
    fontSize: 16,
    flex: 1,
  },
  stepStatus: {
    color: '#bdbdbd',
    fontSize: 18,
  },
  footer: {
    flex: .5,
    flexDirection: 'row',
    alignSelf: 'flex-end',
    borderTopWidth: 2,
    borderColor: '#bdbdbd',
    marginLeft: 20,
    padding: 10,
  },
  footerPages: {
    flex: 2,
  },
  footerText: {
    color: 'white',
    alignSelf: 'center',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: 'black'
  }
});
