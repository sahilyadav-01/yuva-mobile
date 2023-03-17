import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../../../../components/Header';
import { SELECT_MEMBER, TALK_TO_DOCTOR } from './constants';
import TalkToDoctorCard from '../talkToDoctorCard';
import { useMemberSelect } from './hooks/useMemberSelect';
import { styles } from './styles';
import DependentsModal from '../../../../components/Modal/DependentsModal';

const MemberSelect = () => {
  const { openModal, modalVisible, onModalCrossPress, data, onPressCheckBox, checkBoxStatus, userData } = useMemberSelect();
  console.log(userData, "dataaaa")
  return (
    <View>
      <Header title={TALK_TO_DOCTOR} showSearch={false} showBackButton={true} />
      <TalkToDoctorCard />
      <View>
        {userData?.length ?
          (<View>
            <TouchableOpacity
              // onPress={openModal}
              style={styles.touchableButton}>
              <Text style={styles.buttonText}>{SELECT_MEMBER}
              </Text>
            </TouchableOpacity>
          </View>) :
          (<View>
            <TouchableOpacity
              onPress={openModal}
              style={styles.touchableButton}>
              <Text style={styles.buttonText}>Start 
              </Text>
            </TouchableOpacity>
          </View>)}
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
    </View>
  )
}

export default MemberSelect;