import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';
import OurPlanDetails from '../../modules/ourPlanDetails';

const OurPlanScreen = (props) => {
    return (
        <SafeAreaView>
       <OurPlanDetails/>
        </SafeAreaView>
    );
}

export default OurPlanScreen;