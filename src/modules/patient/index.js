import React from 'react';
import {View, ScrollView} from 'react-native';
import CardButton from '../../components/CardButton';
import Header from '../../components/Header';
import ConsultationList from './components/consultationList';
import PatientDetails from './components/patientDetails';
import SecureView from './components/secureView';
import TalkToDoctorCard from './components/talkToDoctorCard';
import {NEXT, TALK_TO_DOCTOR} from './constant';
import {usePatient} from './hooks/usePatient';
import {styles} from './styles';

const Patient = () => {
  const { onPressNext, consultationList, onDownload, onConsult} =
    usePatient();

  return (
    <View>
      <Header title={TALK_TO_DOCTOR} showBackButton={true}/>
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}>
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
        <ConsultationList
          data={consultationList}
          onConsult={onConsult}
          onDownload={onDownload}
        />
      </ScrollView>
    </View>
  );
};

export default Patient;
