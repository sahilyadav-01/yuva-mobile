import React from 'react';
import {Text, View} from 'react-native';
import {SVG} from '../../../../assets';
import Header from '../../../components/Header';
import Timer from '../../../components/Timer';
import {
  PAYMENT_FAILURE,
  PAYMENT_FAILURE_STATUS,
  PAYMENT_SUCCESS,
  PAYMENT_SUCCESS_STATUS,
  PLEASE_TRY_AGAIN,
} from './constants';
import {usePaymentStatus} from './hooks/usePaymentStatus';
import {styles} from './style';

const PaymentStatus = ({paymentSuccess}) => {
  usePaymentStatus();
  const {
    paymentStatus,
    paymentText,
    timer,
    separator,
    imageContainer,
    screenContainer,
    container,
  } = styles(paymentSuccess);
  return (
    <View style={container}>
      <View style={screenContainer}>
        <View style={imageContainer}>
          {paymentSuccess ? <SVG.PaymentSuccess /> : <SVG.PaymentFailure />}
        </View>
        <Text style={paymentStatus}>
          {paymentSuccess ? PAYMENT_SUCCESS_STATUS : PAYMENT_FAILURE_STATUS}
        </Text>
        <View style={separator} />
        <Text style={paymentText}>
          {paymentSuccess ? PAYMENT_SUCCESS : PAYMENT_FAILURE}
        </Text>
        {!paymentSuccess && <Text style={paymentText}>{PLEASE_TRY_AGAIN}</Text>}
        <View style={timer}>
          <Timer interval={50} resetEnable={() => {}} HRA={true} />
        </View>
      </View>
    </View>
  );
};

export default PaymentStatus;
