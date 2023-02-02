import React from 'react';
import {View, Text} from 'react-native';
import styles from './style';

const Heading = () => {
  const style = styles();
  return (
    <View style={style.headingContainer}>
      <Text style={style.headingText}>USER SIGNUP</Text>
      <View style={style.separator} />
    </View>
  );
};

export default Heading;
