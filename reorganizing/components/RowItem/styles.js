import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderColor: '#bdbdbd',
    paddingVertical: 10,
    paddingRight: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftSide: {
    flexDirection: 'row',
    // justifyContent: 'flex-start',
    alignItems: 'center',
    marginRight: 10,
    // backgroundColor: 'red',
  },
  rightSide: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 20,
    alignItems: 'center',
    justifyContent: 'flex-end',
    // backgroundColor: 'blue',
  },
  valueNotEntered: {
    color: '#bdbdbd',
    marginRight: 5,
  },
  valueEntered: {
    color: 'white',
    marginRight: 5,
  },
  text: {
    color: '#bdbdbd',
  },
})
