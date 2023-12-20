import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {useSelector} from 'react-redux';
import {styles} from './style';

const LoaderContext = () => {
  const {redirectLoading} = useSelector(state => state.notification);
  const {unauthorised,logout} = useSelector(state => state.auth);
  const style = styles();
  if (!redirectLoading && !unauthorised) return null;
  if(redirectLoading)
  return (
    <>
      <View style={style.container} />
      <ActivityIndicator style={style.loader} />
    </>
  );
  if(unauthorised || logout)
  return (
    <>
      <View style={style.loaderContainer} />
      <ActivityIndicator style={style.loader} />
    </>
  );
};

export default LoaderContext;
