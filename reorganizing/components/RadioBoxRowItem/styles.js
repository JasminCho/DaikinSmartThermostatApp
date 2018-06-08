import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderColor: '#bdbdbd',
    paddingVertical: 10,
    alignItems: 'center',
  },
  text: {
    color: 'white',
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
})
