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
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  rightSide: {
    flex: 1.5,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
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
