import React from 'react';
import {ImageBackground, View, Text} from 'react-native';
import {styles} from './style';
import {PNG} from '../../../../../../assets';
import { getDateInFormat } from '../../../../../utils/utils';

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
        <Text style={style.cardText}>YUVA HEALTH CARD</Text>
        </View>
        <Text style={style.planText}>{item?.planName?.toUpperCase()}</Text>
        <Text style={style.nameText}>{item?.customerName?.toUpperCase()}</Text>
        <View style={style.orderDetailsContainer}>
          <Text style={style.orderNumber}>{item?.orderNumber}</Text>
          <View>
            <Text style={style.validText}>Valid through</Text>
            <Text style={style.orderNumber}>{getDateInFormat(new Date(item?.dateOfPurchase),'mm/yy')}</Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};
