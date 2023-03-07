import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressBar: {
    width: '80%',
    height: 10,
    // borderRadius: 5,
    // backgroundColor: 'red',
  },
  progress: {
    height: 1,
    borderRadius: 5,
    backgroundColor: '#39A252',
    alignSelf:"center",
    marginLeft:'1',
  },
  statusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // width: '80%',
    marginTop: 10,
    // backgroundColor:"yellow"
  },
  status: {
    alignItems: 'center',
    flexDirection: 'column',
    // backgroundColor:'red'
  },
  statusDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#e0e0e0',
    marginBottom: 5,
  },
  statusDotActive: {
    backgroundColor: '#39A252',
  },
  statusLabel: {
    maxWidth: 70,
    alignItems: 'center',
  },
  statusLabelActive: {
    opacity: 1,
  },
  statusText: {
    fontSize: 10,
    color: '#555',
  },
});
