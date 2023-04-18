import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {styles} from './style';
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
  } = useFooter();
  const style = styles();

  const FooterItem = ({extraStyles, text, planDetails}) => {
    return (
      <View style={[style.itemContainer, extraStyles]}>
        <Text style={style.textStyle}>{text}</Text>
        <TouchableOpacity
          onPress={() =>
            planDetails ? onArrowPress(item?.orderNumber) : onToggle()
          }
          style={style.arrowContainer}>
          <SVG.ExpandArrow />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <>
      <View style={style.footerContainer}>
        <FooterItem
          text="Plan Details"
          extraStyles={{borderRightWidth: 0}}
          planDetails={true}
        />
        <FooterItem text="Plan Members" planDetails={false} />
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
          onCheckboxPress={(memberDetails,arrIndex)=>{console.log('Item',memberDetails,arrIndex)}}
        />
      )}
      <AddMembersModal
        heading={'Add New Member'}
        onCrossPress={onCrossPress}
        modalVisible={modalVisible}
        onSaveDetailsPress={onSaveDetailsPress}
        relationsData={[
          {key: '0', value: 'Father', gender: 'Male'},
          {key: '1', value: 'Mother', gender: 'Female'},
        ]}
        buttonText="Add Member"
        headingText="Relationship"
      />
    </>
  );
};
