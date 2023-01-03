import React from 'react';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Backbutton from '../../components/Backbutton';
import CardButton from '../../components/CardButton';
import ConsultationList from './components/consultationList';
import PatientDetails from './components/patientDetails';
import SecureView from './components/secureView';
import TalkToDoctorCard from './components/talkToDoctorCard';
import { NEXT } from './constant';
import { usePatient } from './hooks/usePatient';
import { styles } from './styles';

const Patient = () => {

  const {
    goBack,
    onPressNext,
    consultationList,
  } = usePatient();

  return (
    <View>
      <View className="flex flex-row items-center h-[60px] bg-[#1D2334] px-[10px] mt-[20px]">
        <Backbutton color="white" onPress={goBack} size={22} />
        <Text className="text-center text-white text-xl ml-[20px]">
          Patient
        </Text>
      </View>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false} nestedScrollEnabled={true}>
        <TalkToDoctorCard />
        <View pointerEvents="none" style={styles.disabledContainer}>
          <PatientDetails />
        </View>
        <CardButton 
          text={NEXT} 
          containerStyle={styles.containerStyle} 
          textStyle={styles.textStyle}
          onPress={onPressNext} 
        />
        <SecureView />
        <ConsultationList data={consultationList}/>
      </ScrollView>
    </View>
  )
}

export default Patient;
