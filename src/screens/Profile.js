import React from 'react';
import {SafeAreaView, KeyboardAvoidingView} from 'react-native';
import Profile from '../modules/profile';
import {styles} from './styles';
import {getPlatform} from '../utils/utils';

const ProfileScreen = () => {
  const Platform = getPlatform();
  const ProfileScreen = () => {
    return (
      <SafeAreaView style={styles.homeScreenContainer}>
        <Profile />
      </SafeAreaView>
    );
  };
  if (Platform.isIOS) {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.keyboardAvoidViewStyle}>
        <ProfileScreen />
      </KeyboardAvoidingView>
    );
  }
  return <ProfileScreen />;
};

export default ProfileScreen;
