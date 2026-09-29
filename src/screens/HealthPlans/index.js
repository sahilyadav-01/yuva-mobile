import React from 'react';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import OurPlanDetails from '../../modules/ourPlan/components/OurPlanDetails';

const HealthPlanScreen = () => {
  return (
    <SafeAreaView>
      <OurPlanDetails isHealthPlan={true} />
    </SafeAreaView>
  );
};
export default HealthPlanScreen;
