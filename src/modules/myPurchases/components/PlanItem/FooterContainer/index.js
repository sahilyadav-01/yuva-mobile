import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {styles} from './style';
import {
  ADD_MEMBER,
  ADD_NEW_MEMBER,
  PLAN_DETAILS,
  PLAN_MEMBERS,
  RELATIONSHIP,
} from './constants';
import {SVG} from '../../../../../../assets';
import {useItem} from '../../ListItem/hooks/useItem';
import DetailsView from '../../DetailsView';
import {useFooter} from './hooks/useFooter';
import PlanLockView from '../../PlanLockView';
import AddMembersModal from '../../../../../components/Modal/AddMembersModal';

export const FooterContainer = props => {
  const {item} = props;
  const {expanded, onArrowPress, priceBreakUpArray, purchasesTab} =
    useItem(item);
  const {
    planLockView,
    onToggle,
    onAddMembersPress,
    modalVisible,
    onCrossPress,
    dependents,
    onSaveDetailsPress,
    onLockPlan,
    activeRelations,
    onCheckboxPress,
  } = useFooter(item);
  const style = styles();

  const FooterItem = ({extraStyles, text, planDetails}) => {
    return (
      <View style={[style.itemContainer, extraStyles]}>
        <Text style={style.textStyle}>{text}</Text>
        <TouchableOpacity
          onPress={() => {
            if (planDetails && !expanded && !planLockView) {
              onArrowPress(item?.orderNumber);
            } else if (!planDetails && !expanded && !planLockView) {
              onToggle(item);
            } else if (!planDetails && expanded && !planLockView) {
              onArrowPress(item?.orderNumber);
              onToggle(item);
            } else if (planDetails && !expanded && planLockView) {
              onToggle(item);
              onArrowPress(item?.orderNumber);
            } else if (!planDetails && planLockView && !expanded) {
              onToggle(item);
            } else if (planDetails && expanded && !planLockView) {
              onArrowPress(item?.orderNumber);
            }
          }}
          style={style.arrowContainer}>
          <SVG.ExpandArrow expanded={(planDetails && expanded) || (!planDetails && planLockView)} />
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
        <FooterItem text={PLAN_MEMBERS} planDetails={false} />
      </View>
      {expanded && (
        <DetailsView
          item={item}
          purchasesTab={purchasesTab}
          priceBreakUpArray={priceBreakUpArray}
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
        relationsData={activeRelations.map((item, index) => {
          return {key: index.toString(), value: item.name, relation: item.id};
        })}
        buttonText={ADD_MEMBER}
        headingText={RELATIONSHIP}
      />
    </>
  );
};
