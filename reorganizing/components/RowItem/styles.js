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
    alignItems: 'center',
    marginRight: 10,
  },
  rightSide: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 20,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  valueNotEntered: {
    color: '#bdbdbd',
    marginRight: 5,
  },
  valueEntered: {
    color: 'white',
    marginRight: 5,
  },
  hasLeftIcon: {
    color: '#bdbdbd',
    marginLeft: 10,
  },
  noLeftIcon: {
    color: '#bdbdbd',
  }
})
