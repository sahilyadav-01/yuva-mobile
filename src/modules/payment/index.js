import React from 'react';
import {View} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import {WebView} from 'react-native-webview';
import { SERVER } from '../../utils/utils';
import {usePayment} from './hooks/usePayment';
import {styles} from './style';

const Payment = props => {
  const {paymentProps} = props;
  const {encRequest, renderData, postPaymentNavigation} = usePayment(paymentProps);
  const {container, indicatorStyle} = styles();
  if (!renderData)
    return (
      <View style={indicatorStyle}>
        <ActivityIndicator size={'small'} />
      </View>
    );
  return (
        <WebView
          style={container}
          source={{
            uri: `http://${SERVER}:8082/PaymentRedirect?encRequest=${encRequest}`,
          }}
          onNavigationStateChange={state => {
            if(state?.url.includes('LoadingPayment')) postPaymentNavigation(state?.url);
          }}
        />
  );
};

export default Payment;
