import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import ViewAllOurPlan from '../../modules/ourPlanDetails/components/viewallOurPlan';

const ViewAllOurPlansScreen = (props) => {
    return (
        <SafeAreaView>
       <ViewAllOurPlan/>
        </SafeAreaView>
    );
}

export default ViewAllOurPlansScreen;