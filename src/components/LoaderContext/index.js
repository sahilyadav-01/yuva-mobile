import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {useSelector} from 'react-redux';
import {styles} from './style';
import {MARINER} from '../../styles/colors';

const LoaderContext = ({showLoader}) => {
  const {redirectLoading} = useSelector(state => state.notification);
  const {unauthorised, logout} = useSelector(state => state.auth);
  const style = styles();
  if (showLoader) {
    return (
      <>
        <View style={style.container} />
        <ActivityIndicator style={style.loader} color={MARINER} />
      </>
    );
  }
  if (!redirectLoading && !unauthorised) {
    return null;
  }
  if (redirectLoading) {
    return (
      <>
        <View style={style.container} />
        <ActivityIndicator style={style.loader} color={MARINER} />
      </>
    );
  }
  if (unauthorised) {
    return (
      <>
        <View style={style.loaderContainer} />
        <ActivityIndicator style={style.loader} color={MARINER} />
      </>
    );
  }
};

export default LoaderContext;
