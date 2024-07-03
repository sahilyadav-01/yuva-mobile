import React from 'react';
import {View} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import {WebView} from 'react-native-webview';
import Config from 'react-native-config';
import {usePayment} from './hooks/usePayment';
import {styles} from './style';
import {MARINER} from '../../styles/colors';

const Payment = props => {
  const {paymentProps} = props;
  const {encRequest, renderData, postPaymentNavigation} =
    usePayment(paymentProps);
  const {container, indicatorStyle} = styles();
  if (!renderData) {
    return (
      <View style={indicatorStyle}>
        <ActivityIndicator size={'small'} color={MARINER} />
      </View>
    );
  }
  return (
    <WebView
      style={container}
      source={{
        uri: `${Config.REDIRECT_LINK}?encRequest=${encRequest}`,
      }}
      onNavigationStateChange={state => {
        if (state?.url.includes('loadingPayment')) {
          postPaymentNavigation(state?.url, 'loadingPayment?');
        } else if (state?.url.includes('LoadingPayment')) {
          postPaymentNavigation(state?.url, 'LoadingPayment?');
        }
      }}
    />
  );
};

export default Payment;
