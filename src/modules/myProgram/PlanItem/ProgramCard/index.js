import React from 'react';
import {ImageBackground, View, Text} from 'react-native';
import { PNG } from '../../../../../assets';
import {styles} from './style';
import { VALID_THROUGH, YUVA_HEALTH_CARD } from './constants';
import { getDateInFormat } from '../../../../utils/utils';

export const ProgramCard = props => {
  const {item} = props;
  const style = styles();
  if (!item) {
    return null; 
  }
  return (
    <ImageBackground
      source={PNG.programCard}
      style={style.cardContainer}
      resizeMode="cover">
      <View style={style.contentContainer}>
        <View style={style.boxStyle}>
        <Text style={style.cardText}>{YUVA_HEALTH_CARD}</Text>
        </View>
        <Text numberOfLines={2} style={style.planText}>{item?.programName?.toUpperCase()}</Text>
        <Text style={style.nameText}>{item?.customerName?.toUpperCase()}</Text>
        <View style={style.orderDetailsContainer}>
          <Text style={style.orderNumber}>{item?.cardNumber}</Text>
          <View>
            <Text style={style.validText}>{VALID_THROUGH}</Text>
            <Text style={style.orderNumber}>{getDateInFormat(new Date(item?.validThrough),'mm/yy')}</Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};