import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './styles';
import {useOurPlanDetails} from './hooks/useOurPlanDetails';
import PlanCard from './components/PlanCard/PlanCard';

const OurPlanDetails = props => {
  const {planDetails} = useOurPlanDetails(props);
  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={styles.contentContainerStyle}
        nestedScrollEnabled={true}>
        <PlanCard/>
      </ScrollView>
    </SafeAreaView>
  );
};
export default OurPlanDetails;
