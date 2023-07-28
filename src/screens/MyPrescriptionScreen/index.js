import {
  FlatList,
  SafeAreaView,
  View,
  Text,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import SelectList from 'react-native-dropdown-select-list';
import ReportCard from '../../ReportCard';
import {styles} from './styles';
import {useMyPrescription} from './hooks/useMyPrescription';
import Header from '../../components/Header';
import {EMPTY_TEXT, ERROR_TEXT, MY_PRESCRIPTIONS} from './constants';
import { PrescriptionContent } from './components/PrescriptionContent';

const MyPrescription = () => {
  return (
    <SafeAreaView style={styles.contentContainerStyle}>
      <Header title={MY_PRESCRIPTIONS} showBackButton={true} hideMenu={true} />
      <PrescriptionContent/>
    </SafeAreaView>
  );
};

export default MyPrescription;
