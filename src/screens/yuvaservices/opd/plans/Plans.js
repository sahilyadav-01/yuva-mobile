import {SafeAreaView} from 'react-native';
import React, {useEffect} from 'react';
import PackageCard from '../../../../modules/myPlans/components/packageCard';
import {styles} from '../../../styles';

import {usePlans} from './hooks/usePlans';
const MyPlansScreen = () => {
  const {} = usePlans();

  return (
    <SafeAreaView style={styles.container}>
      <PackageCard />
    </SafeAreaView>
  );
};

export default MyPlansScreen;
