import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {SVG} from '../../../assets';
import { AVAILABLE } from './constants';
import {styles} from './style';
import {CITRINE_WHITE, CURIOUS_BLUE, CURIOUS_BLUE_DISABLE, CYAN_BLUE, WHITE} from '../../styles/colors';

const DateItem = props => {
  const {item, onSelectDay, activeIndex, index, unavailable} = props;
  const emptySlots = unavailable && index === 0;
  const style = styles();
  return (
    <TouchableOpacity
      onPress={onSelectDay}
      style={[
        style.dateItem,
        {backgroundColor: index === activeIndex ? !emptySlots ? CURIOUS_BLUE : CURIOUS_BLUE_DISABLE : WHITE},
      ]}>
      <View style={style.iconContainer}>
        <SVG.Calender color={index === activeIndex ? WHITE : CURIOUS_BLUE} />
      </View>
      <Text style={[style.dateText,{color: index === activeIndex ? WHITE : CYAN_BLUE}]}>{item.format('DD MMM')}</Text>
      <Text style={[style.dayText,{color: index === activeIndex ? WHITE : CYAN_BLUE}]}>{item.format('ddd')}</Text>
      <View style={[style.statusContainer,{backgroundColor:emptySlots?undefined:CITRINE_WHITE}]}>
        <Text style={style.availableText}>{emptySlots ? '' : AVAILABLE}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default DateItem;
