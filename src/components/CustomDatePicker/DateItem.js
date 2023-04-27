import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {SVG} from '../../../assets';
import {styles} from './style';
import { BLACK, CURIOUS_BLUE, WHITE } from '../../styles/colors';

const DateItem = props => {
  const {item, onSelectDay, activeIndex, index} = props;
  const style = styles();
  return (
    <TouchableOpacity onPress={onSelectDay} style={[style.dateItem,{backgroundColor:index===activeIndex?CURIOUS_BLUE:WHITE}]}>
      <View style={style.iconContainer}>
        <SVG.Calender color={index===activeIndex?WHITE:CURIOUS_BLUE}/>
      </View>
      <Text style={style.dateText}>{item.format('DD MMM')}</Text>
      <Text style={style.dayText}>{item.format('ddd')}</Text>
      <View style={style.statusContainer}>
        <Text style={style.availableText}>Available</Text>
      </View>
    </TouchableOpacity>
  );
};

export default DateItem;
