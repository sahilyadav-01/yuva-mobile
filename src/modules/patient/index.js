import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import Backbutton from '../../components/Backbutton';
import CardButton from '../../components/CardButton';
import Header from '../../components/Header';
import ConsultationList from './components/consultationList';
import PatientDetails from './components/patientDetails';
import SecureView from './components/secureView';
import TalkToDoctorCard from './components/talkToDoctorCard';
import {NEXT} from './constant';
import {usePatient} from './hooks/usePatient';
import {styles} from './styles';

const Patient = () => {
  const {goBack, onPressNext, consultationList, onDownload, onConsult} =
    usePatient();

  return (
    <View>
      <Header isRightIcon={true} />
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
