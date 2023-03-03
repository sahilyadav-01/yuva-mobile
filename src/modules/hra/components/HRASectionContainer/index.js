import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {PNG} from '../../../../../assets';
import {styles} from './styles';
import {useHRASectionContainer} from './hooks/useHRASectionContainer';
import {BUTTON_TEXT} from './constant';
import DependentsModal from '../../../../components/Modal/DependentsModal';
const HRASectionContainer = () => {
  const {openModal, modalVisible, onModalCrossPress, data, onPressCheckBox, checkBoxStatus} =
    useHRASectionContainer();
  return (
    <View style={styles.mainContainer}>
      <DependentsModal
        visible={modalVisible}
        onCrossPress={onModalCrossPress}
        heading="Select Member"
        primaryText="Myself"
        endText="Add Members"
        data={data}
        onCheckBoxPress={onPressCheckBox}
        checkBoxStatus={checkBoxStatus}
      />
      <View>
        <Image source={PNG.HRA_HOMEImage} />
      </View>
      <View style={styles.topContainer}>
        <TouchableOpacity
          style={styles.touchableOpacityContainer}
          onPress={openModal}>
          <Text style={styles.textContainer}>{BUTTON_TEXT}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HRASectionContainer;
