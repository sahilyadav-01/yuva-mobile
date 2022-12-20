import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Backbutton from '../../components/Backbutton';
import PatientDetails from './components/patientDetails';
import TalkToDoctorCard from './components/talkToDoctorCard';
import { usePatient } from './hooks/usePatient';
import { styles } from './styles';

const Patient = () => {

  const {
    goBack,
  } = usePatient();

  return (
    <SafeAreaView>
      <View className="flex flex-row items-center h-[60px] bg-[#1D2334] px-[10px] mt-[20px]">
        <Backbutton color="white" onPress={goBack} size={22} />
        <Text className="text-center text-white text-xl ml-[20px]">
          Patient
        </Text>
      </View>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <TalkToDoctorCard />
        <PatientDetails />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Patient;
