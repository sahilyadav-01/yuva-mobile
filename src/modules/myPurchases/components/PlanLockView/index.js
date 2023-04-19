import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {styles} from './style';
import {PLAN_MEMBERS} from './constants';
import Dependents from '../../../profile/components/dependents';
import {Checkbox} from 'react-native-paper';
import { SVG } from '../../../../../assets';

const PlanLockView = props => {
  const {onAddMembersPress,dependents,onCheckboxPress, onLockPlan, item:planDetails} = props;
  const style = styles();
  const renderCheckbox = (props) => {
    const {item,index} = props;
    if(planDetails?.locked) return null;
    return (
      <View style={{marginTop:10}}>
        <Checkbox
          status={item?.status ? 'checked' : 'unchecked'}
          onPress={()=>onCheckboxPress(index)}
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
          extraContainerStyle={{paddingTop:0}}
          extraDetailsContainer={{marginTop:20}}
        />
      </View>
      <TouchableOpacity onPress={onAddMembersPress} style={style.buttonContainer}>
        <SVG.PlusIcon/>
        <Text style={style.buttonText}>Add Members</Text>
      </TouchableOpacity>
      <View style={{height:24}}/>
      <TouchableOpacity onPress={()=>onLockPlan(planDetails)} style={style.buttonContainer}>
        <SVG.Lock/>
        <Text style={style.buttonText}>Lock Plan</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PlanLockView;
