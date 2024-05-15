import React from 'react';
import {Text, View, ActivityIndicator, ScrollView, TouchableOpacity, Image} from 'react-native';
import {PNG, SVG} from '../../../../assets';
import {
  NUMBER,
  PAYMENT_FAILURE,
  PAYMENT_FAILURE_STATUS,
  PAYMENT_SUCCESS,
  PAYMENT_SUCCESS_STATUS,
  ZERO_PAYMENT,
  ZERO_PAYMENT_STATUS,
  COD_PAYMENT,
  COD_PAYMENT_STATUS,
} from './constants';
import {usePaymentStatus} from './hooks/usePaymentStatus';
import {styles} from './style';
import { MARINER, WHITE } from '../../../styles/colors';

const PaymentStatus = ({paymentProps}) => {
  const {paymentSuccess, loading, onCrossPress} = usePaymentStatus(paymentProps);
  const {
    paymentStatus,
    paymentText,
    separator,
    imageContainer,
    screenContainer,
    container,
    indicatorStyle,
    numberText,
    crossContainer,
    scrollContainer,
    imageStyle
  } = styles(paymentSuccess || (paymentProps?.zeroPayment ?? false) || (paymentProps?.cod ?? false));
  if (loading)
    return (
      <View style={indicatorStyle}>
        <ActivityIndicator size={'small'} color={MARINER} />
      </View>
    );
  return (
    <ScrollView style={scrollContainer}>
      <View style={container}>
        <View style={screenContainer}>
          <View style={imageContainer}>
            {paymentProps?.cod ? (<Image source={PNG.PaymentSuccessful} resizeMode='contain' style={imageStyle} />) : (<Image source={paymentProps?.zeroPayment || paymentSuccess ? PNG.PaymentSuccessful : PNG.PaymentFail} resizeMode='contain' style={imageStyle} />)}
          </View>
          <Text style={paymentStatus}>
            {paymentProps?.cod ? COD_PAYMENT_STATUS : paymentProps?.zeroPayment ? ZERO_PAYMENT_STATUS : paymentSuccess ? PAYMENT_SUCCESS_STATUS : PAYMENT_FAILURE_STATUS}
          </Text>
          <View style={separator} />
          <Text style={paymentText}>{paymentProps?.cod ? COD_PAYMENT : paymentProps?.zeroPayment ? ZERO_PAYMENT : paymentSuccess ? PAYMENT_SUCCESS : PAYMENT_FAILURE}
          {!paymentProps?.cod && <Text style={numberText}>{NUMBER}</Text>}
          </Text>
          <TouchableOpacity onPress={onCrossPress} style={crossContainer}>
            <SVG.Cross color={WHITE} />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default PaymentStatus;
