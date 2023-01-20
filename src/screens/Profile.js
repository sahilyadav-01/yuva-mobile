import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Profile from '../modules/profile';
import { styles } from './styles';

function ProfileScreen() {
    return (
        <SafeAreaView style={styles.homeScreenContainer}>
        <Profile/>
        </SafeAreaView>
    );
}

export default ProfileScreen;