import React from 'react';
import {ImageBackground, View, Text} from 'react-native';
import {styles} from './style';
import {PNG} from '../../../../../../assets';
import { getDateInFormat } from '../../../../../utils/utils';
import { CARD_STATUS, CARD_VALIDITY, DUMMY_CARD, VALID_THROUGH, YUVA_HEALTH_CARD } from './constants';

export const CardContainer = props => {
  const {item} = props;
  const style = styles();
  return (
    <ImageBackground
      source={PNG.PlanCard}
      style={style.cardContainer}
      resizeMode="cover">
      <View style={style.contentContainer}>
        <View style={style.boxStyle}>
        <Text style={style.cardText}>{YUVA_HEALTH_CARD}</Text>
        </View>
        <Text style={style.planText}>{item?.planName?.toUpperCase()}</Text>
        <Text style={style.nameText}>{item?.cardNumber === null ? CARD_STATUS : item?.customerName?.toUpperCase()}</Text>
        <View style={style.orderDetailsContainer}>
          <Text style={style.orderNumber}>{item?.cardNumber === null ? DUMMY_CARD : item?.cardNumber}</Text>
          <View>
            <Text style={style.validText}>{VALID_THROUGH}</Text>
            <Text style={style.orderNumber}>{item?.cardNumber === null ? CARD_VALIDITY : getDateInFormat(new Date(item?.dateOfPurchase),'mm/yy')}</Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};
