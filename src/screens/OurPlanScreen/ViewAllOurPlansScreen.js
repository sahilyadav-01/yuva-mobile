import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import ViewAllOurPlan from '../../modules/ourPlanDetails/components/viewallOurPlan';

const ViewAllOurPlansScreen = props => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <ViewAllOurPlan />
    </SafeAreaView>
  );
};

export default ViewAllOurPlansScreen;
