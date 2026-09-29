import React from 'react';
import {View, ScrollView} from 'react-native';
import Header from '../../../../components/Header';
import OnMood9Consult from '../consultation';
import {styles} from './style';
import DescriptionContainer from '../details';
import OnMood9Layers from '../onMood9Layers';
import Footer from '../footer';
import {useOnMood9Details} from './hooks/useOnMood9Details';
import DependentsModal from '../../../../components/Modal/DependentsModal';
import AddMembersModal from '../../../../components/Modal/AddMembersModal';
import {
  ADD_NEW_MEMBER,
  MENTAL_WELLNESS,
  MYSELF,
  RELATIONSHIP,
  SAVE_DETAILS,
  SELECT_MEMBER,
} from './constants';

const OnMood9Details = () => {
  const {
    onConsult,
    data,
    modalVisible,
    onModalCrossPress,
    checkBoxStatus,
    onPressCheckBox,
    activeRelationsData,
    activeRelationsModalVisible,
    onAddModalCrossPress,
    onSaveDetailsPress,
    onAddMembersPress,
  } = useOnMood9Details();
  const style = styles();
  return (
    <View style={style.screenContainer}>
      <DependentsModal
        visible={modalVisible}
        onCrossPress={onModalCrossPress}
        heading={SELECT_MEMBER}
        primaryText={MYSELF}
        data={data}
        onCheckBoxPress={onPressCheckBox}
        checkBoxStatus={checkBoxStatus}
        showAddMembersButton
        buttonText={ADD_NEW_MEMBER}
        onAddMembersPress={onAddMembersPress}
      />
      <AddMembersModal
        heading={ADD_NEW_MEMBER}
        onCrossPress={onAddModalCrossPress}
        modalVisible={activeRelationsModalVisible}
        onSaveDetailsPress={onSaveDetailsPress}
        relationsData={activeRelationsData}
        buttonText={SAVE_DETAILS}
        headingText={RELATIONSHIP}
      />
      <Header title={MENTAL_WELLNESS} showBackButton={true} />
      <ScrollView>
        <View style={style.contentContainer}>
          <OnMood9Consult onConsultation={onConsult} />
          <DescriptionContainer />
          <OnMood9Layers />
          <Footer />
        </View>
      </ScrollView>
    </View>
  );
};

export default OnMood9Details;
