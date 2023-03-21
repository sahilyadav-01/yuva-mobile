import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import ConsultationList from '../../modules/talkToDoctorMyplans/components/consultationList';

import {usePatient} from '../../modules/talkToDoctorMyplans/hooks/usePatient';
const Consultations = () => {
  const {onPressNext, consultationList, onDownload, onConsult} = usePatient();
  return (
    <View>
      <ConsultationList data={consultationList} onConsult={onConsult} />
    </View>
  );
};

export default Consultations;
