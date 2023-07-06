import React from 'react'
import {SafeAreaView } from 'react-native'
import EmrmListing from '../../../modules/emrm/EmrmListing.js';
import { styles } from './styles';

const EmrmListingScreen = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
     <EmrmListing/>
    </SafeAreaView>
  )
}

export default EmrmListingScreen;