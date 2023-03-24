import React from 'react';
import {View} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import {WebView} from 'react-native-webview';
import Header from '../../components/Header';
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
    <View style={container}>
      <Header showBackButton={true} title={'Payment'} showSearch={false} />
      <View style={container}>
        <WebView
          style={container}
          source={{
            uri: `http://ec2-3-111-222-20.ap-south-1.compute.amazonaws.com:8082/PaymentRedirect?encRequest=${encRequest}`,
          }}
          onNavigationStateChange={state => {
            console.log('State', state);
            if(state?.url.includes('LoadingPayment')) postPaymentNavigation(state?.url);
          }}
        />
      </View>
    </View>
  );
};

export default Payment;
