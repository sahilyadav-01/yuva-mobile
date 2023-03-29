import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './style';

const EmptyComponent = props => {
  const {emptyText: text} = props;
  const {container, emptyText} = styles();
  return (
    <View style={container}>
      <Text style={emptyText}>{text}</Text>
    </View>
  );
};

export default EmptyComponent;
