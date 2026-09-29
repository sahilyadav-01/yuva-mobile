import React from 'react';
import {View, Text, StatusBar} from 'react-native';

const YuvaStatusBar = () => {
  return (
    <View
      style={{
        backgroundColor: '#1D2334',
        // height: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight,
      }}>
      <StatusBar
        translucent
        backgroundColor="#1D2334"
        barStyle="light-content"
      />
    </View>
  );
};

export default YuvaStatusBar;
