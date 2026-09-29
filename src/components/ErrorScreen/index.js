import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './style';

function ErrorScreen({onRetryPress}) {
  return (
    <View style={{flex: 1, backgroundColor: 'red'}}>
      <TouchableOpacity onPress={onRetryPress} style={styles.reloadContainer}>
        <Text>Retry</Text>
      </TouchableOpacity>
    </View>
  );
}

export default ErrorScreen;
