import React from 'react';
import {View, Text} from 'react-native';
import styles from './style';

const Heading = props => {
  const style = styles();
  const {heading} = props;
  return (
    <View style={style.headingContainer}>
      <Text style={style.headingText}>{heading}</Text>
      <View style={style.separator} />
    </View>
  );
};

export default Heading;
