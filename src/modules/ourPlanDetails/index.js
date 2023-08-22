import React from 'react';
import {
  ActivityIndicator,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {styles} from './styles';
import {useOurPlanDetails} from './hooks/useOurPlanDetails';
import PlanCard from './components/PlanCard';
import { TERMS_AND_CONDITION, termsAndCondition } from './constants';
import { FlatList } from 'react-native-gesture-handler';
import { PNG } from '../../../assets';

const OurPlanDetails = props => {
  const {planDetails,planDetailsLoading,planDetailsError} = useOurPlanDetails(props);

  const renderItem = ({item, index}) => {
    return (
      <View key={index}>
        <View style={styles.starIcon}>
          <Image style={styles.ImageStyle} source={PNG.dot} />
          <Text style={styles.details}>{item}</Text>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={styles.contentContainerStyle}
        nestedScrollEnabled={true}>
        <PlanCard/>
        {planDetailsLoading &&  <View style={styles.emptyView}>
          <ActivityIndicator size={'large'}/>
        </View> }
        {(planDetails && planDetailsLoading===false && planDetailsError===false) && (
            <FlatList
              renderItem={renderItem}
              data={planDetails}
              keyExtractor={(item, index) => `${index}`}
              nestedScrollEnabled={true}
              showsHorizontalScrollIndicator={false}
            />
          )}
          <Text style={styles.termsCondition}>{TERMS_AND_CONDITION}</Text>
          <FlatList
            renderItem={renderItem}
            data={termsAndCondition}
            keyExtractor={(item, index) => `${index}`}
            nestedScrollEnabled={true}
            showsHorizontalScrollIndicator={false}
          />
      </ScrollView>
    </SafeAreaView>
  );}
export default OurPlanDetails;
