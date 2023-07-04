import React from 'react';
import {Text, View, ActivityIndicator} from 'react-native';
import {WebView} from 'react-native-webview';
import Header from '../../components/Header';
import {useOnMood9} from './hooks/useonmood9';
import {styles} from './style';
import { ERROR_TEXT } from './constants';

const OnMood9 = () => {
  const {encodedQueryString, onMood9Error, onMood9Loading, uri} = useOnMood9();
  const style = styles();
  const getContent = () => {
    if (onMood9Loading)
      return (
        <View style={style.contentContainer}>
          <ActivityIndicator size={'large'} />
        </View>
      );
    else if (onMood9Error)
      return (
        <View style={style.contentContainer}>
          <Text>{ERROR_TEXT}</Text>
        </View>
      );
    else if (
      !onMood9Loading &&
      !onMood9Error &&
      encodedQueryString.length > 0
    ) {
      return <WebView style={style.container} source={{uri}} />;
    }
  };
  return (
    <View style={style.container}>
      <Header title={'Mental Wellness'} showBackButton={true} />
      {getContent()}
    </View>
  );
};

export default OnMood9;
