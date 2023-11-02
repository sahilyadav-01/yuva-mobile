import React from 'react';
import {Text, View, ActivityIndicator} from 'react-native';
import {WebView} from 'react-native-webview';
import Header from '../../components/Header';
import {useOnMood9} from './hooks/useonmood9';
import {styles} from './style';
import { ERROR_TEXT } from './constants';
import { MENTAL_WELLNESS } from './components/onMood9Details/constants';

const OnMood9 = (props) => {
  const {onMood9Props} = props;
  const {encodedQueryString, onMood9Error, onMood9Loading, uri, onMood9ErrorMessage} = useOnMood9(onMood9Props);
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
        <View style={[style.contentContainer,style.errorContainer]}>
          <Text style={style.errorText}>{onMood9ErrorMessage ?? ERROR_TEXT}</Text>
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
      <Header title={MENTAL_WELLNESS} showBackButton={true} />
      {getContent()}
    </View>
  );
};

export default OnMood9;
