import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {SVG} from '../../../../../assets';
import {CYAN_BLUE} from '../../../../styles/colors';
import {styles} from './style';

const RenderPlans = props => {
  const {
    itemContainer,
    serviceText,
    usageText,
    buttonContainer,
    rowContainer,
    iconContainer,
    buttonText
  } = styles();
  return (
    <View style={itemContainer}>
      <View style={rowContainer}>
        <View style={iconContainer}>
          <SVG.HraSvg color={CYAN_BLUE} />
        </View>
        <View>
          <Text style={serviceText}>Health Risk Assessment</Text>
          <Text style={usageText}>Used Available</Text>
        </View>
      </View>
      <TouchableOpacity style={buttonContainer}>
        <Text style={buttonText}>Attempt Now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RenderPlans;
