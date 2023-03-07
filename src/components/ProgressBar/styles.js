import {StyleSheet} from 'react-native';


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressBar: {
    width: '80%',
    height: 10,
    borderRadius: 5,
    backgroundColor: '#e0e0e0',
  },
  progress: {
    height: 10,
    borderRadius: 5,
    backgroundColor: '#ff5722',
  },
  statusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 10,
  },
  status: {
    alignItems: 'center',
  },
  statusDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#e0e0e0',
    marginBottom: 5,
  },
  statusDotActive: {
    backgroundColor: '#ff5722',
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