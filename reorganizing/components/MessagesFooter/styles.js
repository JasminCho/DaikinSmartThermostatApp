import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    borderTopWidth: 2,
    borderColor: '#bdbdbd',
    paddingVertical: 10,
    paddingRight: 10,
    alignItems: 'center',
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    flex: 1,
    color: '#bdbdbd',
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notification: {
    borderRadius:50,
    width:20,
    height:20,
    marginRight:10,
    backgroundColor:'#bdbdbd',
    alignItems:'center',
  },
})
