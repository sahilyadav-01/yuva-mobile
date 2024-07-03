import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {styles} from './style';
import {MARINER} from '../../styles/colors';

const Loader = props => {
  const {container} = styles();
  return (
    <View style={[container, props?.extraStyles]}>
      <ActivityIndicator size={props?.size ?? 'large'} color={MARINER} />
    </View>
  );
};

export default Loader;
