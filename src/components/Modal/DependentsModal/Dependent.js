import React from 'react';
import {View, Text} from 'react-native';
import {Checkbox} from 'react-native-paper';
import { CYAN_BLUE, GREEN } from '../../../styles/colors';
import {styles} from './style';

const Dependent = props => {
  const {dependentItemContainer, dependentNameContainer, primaryText, secondaryText, emptyDependentContainer} = styles();
  const {item: {detailsText,relation,onCheckBoxPress, checkBoxStatus}, index, length, } = props;
  if(index === 0 || index===length-1){
    return <View style={[dependentItemContainer,emptyDependentContainer]}/>
  }
  return (
    <View style={dependentItemContainer}>
      <View style={dependentNameContainer}>
        <Text style={primaryText}>{detailsText}</Text>
        <Checkbox color={GREEN} uncheckedColor={CYAN_BLUE} onPress={onCheckBoxPress} status={checkBoxStatus ?? 'unchecked'} />
      </View>
      <Text style={secondaryText}>{relation}</Text>
    </View>
  );
};

export default Dependent;
