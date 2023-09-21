import React from 'react'
import {SafeAreaView } from 'react-native'
import PrescriptionListingScreen from '../../../modules/pharmacy/PrescriptionListingScreen';
import {styles} from '../../styles';

const PrescriptionListing = () => {
  return (
    <SafeAreaView style={styles.homeScreenContainer}>
     <PrescriptionListingScreen/>
    </SafeAreaView>
  )
}

export default PrescriptionListing;