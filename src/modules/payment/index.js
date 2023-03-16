import React from 'react';
import {View} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import {WebView} from 'react-native-webview';
import Header from '../../components/Header';
import {usePayment} from './hooks/usePayment';
import {styles} from './style';

const Payment = props => {
  const {paymentProps} = props;
  const {encRequest, renderData} = usePayment(paymentProps);
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
          onMessage={msg => {
            console.log('Message', msg);
          }}
          source={{
            uri: `http://localhost:8081/paymentpoc.html?encRequest=${encRequest}`,
          }}
          onNavigationStateChange={state => {
            console.log('State', state);
          }}
        />
      </View>
    </View>
  );
};

export default Payment;
