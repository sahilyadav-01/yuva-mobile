import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import Header from '../../components/Header/index';
import {styles} from './styles';
import {useSelector} from 'react-redux';
import TalkToDoctorCard from './components/talkToDoctorCard';
import MedicalCondition from './components/mostSearchedCard';
import DedicatedDoctor from './components/doctorCard';
import Consultation from './components/consultationCard';
import BestDoctors from './components/doctorsTheBest';
const TalkToDoctor = ({navigation}) => {
  const {
    user: {jwt},
    loggedIn,
  } = useSelector(state => state.auth);
  const onPressRightIcon = () => {
    if (loggedIn !== 'loggedIn') {
      navigation.navigate('LoginScreen');
    } else {
      //open drawer
    }
  };
  return (
    <View>
      <Header
        isLoggedIn={loggedIn === 'loggedIn'}
        onPressRightIcon={onPressRightIcon}
      />
      <ScrollView
        contentContainerStyle={styles.ScrollViewContainerStyle}
        style={styles.containerStyle}
        showsVerticalScrollIndicator={false}>
        <TalkToDoctorCard />
        <MedicalCondition />
        <DedicatedDoctor />
        <Consultation />
        <BestDoctors />
      </ScrollView>
    </View>
  );
};

export default TalkToDoctor;
