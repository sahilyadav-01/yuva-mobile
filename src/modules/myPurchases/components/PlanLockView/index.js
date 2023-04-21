import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {styles} from './style';
import {ADD_MEMBERS, LOCK_PLAN, PLAN_MEMBERS} from './constants';
import Dependents from '../../../profile/components/dependents';
import {Checkbox} from 'react-native-paper';
import {SVG} from '../../../../../assets';

const PlanLockView = props => {
  const {
    onAddMembersPress,
    dependents,
    onCheckboxPress,
    onLockPlan,
    item: planDetails,
  } = props;
  const style = styles();
  const renderCheckbox = props => {
    const {item, index} = props;
    if (planDetails?.locked) return null;
    return (
      <View style={style.checkboxContainer}>
        <Checkbox
          status={item?.status ? 'checked' : 'unchecked'}
          onPress={() => onCheckboxPress(index)}
        />
      </View>
    );
  };
  return (
    <View style={style.container}>
      <Text style={style.headingText}>{PLAN_MEMBERS}</Text>
      <View style={style.membersContainer}>
        <Dependents
          CheckboxComponent={renderCheckbox}
          showCheckbox={true}
          dependents={dependents}
          extraContainerStyle={style.dependentContainerStyle}
          extraDetailsContainer={style.dependentDetailStyle}
        />
      </View>
      <TouchableOpacity
        onPress={onAddMembersPress}
        style={style.buttonContainer}>
        <SVG.PlusIcon />
        <Text style={style.buttonText}>{ADD_MEMBERS}</Text>
      </TouchableOpacity>
      <View style={style.separatorStyle} />
      <TouchableOpacity
        onPress={() => onLockPlan(planDetails)}
        style={style.buttonContainer}>
        <SVG.Lock />
        <Text style={style.buttonText}>{LOCK_PLAN}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PlanLockView;
