import React from 'react';
import {SafeAreaView} from 'react-native';
import MemberSelect from '../../../modules/talkToDoctorMyplans/components/memberSelect';
import {styles} from '../../styles';

const MemberSelectScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <MemberSelect />
    </SafeAreaView>
  );
};

export default MemberSelectScreen;
