import React from 'react';
import { SafeAreaView } from 'react-native';
import { styles } from './styles';
import Profile from '../modules/profileDetails';

const ProfileContent = () => {
    return (
        <SafeAreaView style={styles.homeScreenContainer}>
        <Profile/>
        </SafeAreaView>
    );
}

export default ProfileContent;