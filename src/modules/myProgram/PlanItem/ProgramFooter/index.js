import React, { useState } from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {styles} from './style';
import {ADD_MEMBER,ADD_NEW_MEMBER,PLAN_DETAILS,PLAN_MEMBERS,RELATIONSHIP} from './constants';
import { SVG } from '../../../../../assets';
import PlanLockView from '../../components/PlanLockView';
import AddMembersModal from '../../../../components/Modal/AddMembersModal';
import DetailsView from '../../components/DetailsView';
import { useFooter } from './hooks/useFooter';

export const ProgramFooter = props => {
  const {item} = props;
  const {
    planLockView,
    onToggle,
    onAddMembersPress,
    modalVisible,
    onCrossPress,
    dependents,
    onSaveDetailsPress,
    onLockPlan,
    onCheckboxPress,
    filteredRelation,
  } = useFooter(item);
  const style = styles();
  const [expanded, setExpanded] = useState(false);

  const FooterItem = ({extraStyles, text, planDetails}) => {
    return (
      <View style={[style.itemContainer, extraStyles]}>
        <Text style={style.textStyle}>{text}</Text>
        <TouchableOpacity
          onPress={() => {
            if (planDetails && !expanded && !planLockView) {
              setExpanded(true);
            }else if (!planDetails && !expanded && !planLockView) {
              onToggle(item);
            } else if (!planDetails && expanded && !planLockView) {
              setExpanded(false);
              onToggle(item);
            } else if (planDetails && !expanded && planLockView) {
              setExpanded(true);
              onToggle(item);
            } else if (!planDetails && planLockView && !expanded) {
              onToggle(item);
            } else if (planDetails && expanded && !planLockView) {
              setExpanded(false);
            }
          }}
          style={style.arrowContainer}>
          <SVG.ExpandArrow expanded={(planDetails && expanded) || (!planDetails && planLockView)}   />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <>
      <View style={style.footerContainer}>
        <FooterItem
          text={PLAN_DETAILS}
          extraStyles={style.footerColumnStyle}
          planDetails={true}
        />
        <FooterItem text={PLAN_MEMBERS} planDetails={false} extraStyles={style.rightView} />
      </View>
       {expanded && (
        <DetailsView
          item={item}
          renderList={true}
        />
     )} 
       {planLockView && (
        <PlanLockView
          dependents={dependents}
          onAddMembersPress={onAddMembersPress}
          onCheckboxPress={onCheckboxPress}
          onLockPlan={onLockPlan}
          item={item}
        />
      )} 
      <AddMembersModal
        heading={ADD_NEW_MEMBER}
        onCrossPress={onCrossPress}
        modalVisible={modalVisible}
        onSaveDetailsPress={onSaveDetailsPress}
        relationsData={filteredRelation}
        buttonText={ADD_MEMBER}
        headingText={RELATIONSHIP}
      />
    </>
  );
};
