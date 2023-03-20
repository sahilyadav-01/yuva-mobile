import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import Header from '../../../../components/Header';
import { SELECT_MEMBER, TALK_TO_DOCTOR } from './constants';
import TalkToDoctorCard from '../talkToDoctorCard';
import { useMemberSelect } from './hooks/useMemberSelect';
import { styles } from './styles';
import DependentsModal from '../../../../components/Modal/DependentsModal';
import SelectedMember from '../../../../components/SelectedMember';

const MemberSelect = () => {
  const { openModal, modalVisible, onModalCrossPress, data, onPressCheckBox, checkBoxStatus, userData,onPress } = useMemberSelect();
  return (
    <View>
       <ScrollView >
      <Header title={TALK_TO_DOCTOR} showSearch={false} showBackButton={true} />
      <TalkToDoctorCard />
      <View>
        {userData?.name ?
          (<View>
            <SelectedMember dependents={userData} openModal={openModal} />
            <TouchableOpacity
              onPress={onPress}
              style={styles.touchableButton}>
              <Text style={styles.buttonText}>Start
              </Text>
            </TouchableOpacity>
          </View>

          ) :
          (
            <View>
              <TouchableOpacity
                onPress={openModal}
                style={styles.touchableButton}>
                <Text style={styles.buttonText}>{SELECT_MEMBER}
                </Text>
              </TouchableOpacity>
            </View>
          )}
      </View>
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
      </ScrollView>
    </View>
  )
}

export default MemberSelect;