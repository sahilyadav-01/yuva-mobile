import {SafeAreaView} from 'react-native';
import React from 'react';
import PackageCard from '../../../../modules/myPlans/components/packageCard';
import {styles} from '../../../styles';
const MyPlansScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <PackageCard />
    </SafeAreaView>
  );
};

export default MyPlansScreen;
