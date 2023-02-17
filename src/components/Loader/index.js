import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {styles} from './style';

const Loader = props => {
  const {container} = styles();
  return (
    <View style={[container, props?.extraStyles]}>
      <ActivityIndicator size={props?.size ?? 'large'} />
    </View>
  );
};

export default Loader;
