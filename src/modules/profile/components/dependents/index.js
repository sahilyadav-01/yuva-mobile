import React from 'react';
import {View, Text} from 'react-native';
import {AGE_} from '../../constant';
import styles from './style';

const Dependents = ({dependents,hideShadow,showCheckbox,CheckboxComponent,extraContainerStyle, extraDetailsContainer}) => {
  const renderCheckbox = showCheckbox ?? false;
  const {dependentsContainer, dependentNameGenderContainer, relationText, dependentName, dependentGender, rowView} = styles({
    disabled: false,hideShadow,
  });
  return dependents.map((item,index) => {
    return (
      <View style={[dependentsContainer,extraContainerStyle]}>
        <View style={dependentNameGenderContainer}>
          <View style={[rowView,extraDetailsContainer]}>
          <Text style={dependentName}>{item.name}</Text>
          <Text style={{marginHorizontal:14}}>|</Text>
          <Text style={dependentGender}>{item.gender}</Text>
          {renderCheckbox && <>
          <Text style={{marginHorizontal:14}}>|</Text>
          <Text style={dependentGender}>{`${AGE_}${item.age}`}</Text>
          </>}
        </View>
          {!renderCheckbox ? <Text style={dependentGender}>{`${AGE_}${item.age}`}</Text> : <CheckboxComponent item={item} index={index}/>}
        </View>
        <View style={{height: 14}} />
        <Text style={relationText}>{`${item.relation}`}</Text>
        <View style={{height: 20}} />
      </View>
    );
  });
}

export default Dependents;
