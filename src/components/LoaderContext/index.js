import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {useSelector} from 'react-redux';
import {styles} from './style';

const LoaderContext = () => {
  const {redirectLoading} = useSelector(state => state.notification);
  const style = styles();
  if (!redirectLoading) return null;
  return (
    <>
      <View style={style.container} />
      <ActivityIndicator style={style.loader} />
    </>
  );
};

export default LoaderContext;
