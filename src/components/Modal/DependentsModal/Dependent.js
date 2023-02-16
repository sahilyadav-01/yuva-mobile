import React from 'react';
import {View, Text} from 'react-native';
import {Checkbox} from 'react-native-paper';
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
        <Checkbox onPress={onCheckBoxPress} status={checkBoxStatus} />
      </View>
      <Text style={secondaryText}>{relation}</Text>
    </View>
  );
};

export default Dependent;
