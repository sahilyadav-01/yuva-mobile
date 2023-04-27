import React from 'react';
import {View, Text} from 'react-native';
import {AGE_} from '../../constant';
import styles from './style';

const Dependents = ({dependents,hideShadow}) => {
  const {dependentsContainer, dependentNameGenderContainer, relationText, dependentName, dependentGender} = styles({
    disabled: false,hideShadow,
  });
  return dependents?.map((item,index) => {
    return (
      <View style={dependentsContainer}>
        <View style={dependentNameGenderContainer}>
          <View style={{flexDirection:'row'}}>
          <Text style={dependentName}>{item.name}</Text>
          <Text style={{marginHorizontal:14}}>|</Text>
          <Text style={dependentGender}>{item.gender}</Text>
        </View>
          <Text style={dependentGender}>{`${AGE_}${item.age}`}</Text>
        </View>
        <View style={{height: 14}} />
        <Text style={relationText}>{`${item.relation}`}</Text>
        <View style={{height: 20}} />
      </View>
    );
  });
}

export default Dependents;
