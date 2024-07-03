import {SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import Header from '../../components/Header/index';
import {styles} from './styles';
import TalkToDoctorCard from './components/talkToDoctorCard';
import MedicalCondition from './components/mostSearchedCard';
import DedicatedDoctor from './components/doctorCard';
import Consultation from './components/consultationCard';
import BestDoctors from './components/doctorsTheBest';
import {DOCTOR} from './constant';
const TalkToDoctor = ({navigation}) => {
  return (
    <SafeAreaView>
      <Header showBackButton={true} title={DOCTOR} />
      <ScrollView
        nestedScrollEnabled={true}
        contentContainerStyle={styles.ScrollViewContainerStyle}
        style={styles.containerStyle}
        showsVerticalScrollIndicator={false}>
        <TalkToDoctorCard />
        <MedicalCondition />
        <DedicatedDoctor />
        <Consultation />
        <BestDoctors />
      </ScrollView>
    </SafeAreaView>
  );
};

export default TalkToDoctor;
