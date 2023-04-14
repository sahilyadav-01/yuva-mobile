import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import {styles} from './style';
import { SVG } from '../../../../../../assets';

export const FooterContainer = () => {
  const style = styles();
  const FooterItem = ({extraStyles,text}) => {
    return (
      <View style={[style.itemContainer, extraStyles]}>
        <Text style={style.textStyle}>{text}</Text>
        <TouchableOpacity style={style.arrowContainer}>
          <SVG.ExpandArrow />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={style.footerContainer}>
      <FooterItem text='Plan Details' extraStyles={{borderRightWidth: 0}} />
      <FooterItem text='Plan Members' />
    </View>
  );
};
