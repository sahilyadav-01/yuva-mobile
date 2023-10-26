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
import { TERMS_AND_CONDITION, TITLE, termsAndCondition } from './constants';
import { FlatList } from 'react-native-gesture-handler';
import { PNG } from '../../../assets';
import Header from '../../components/Header';
import PlanServiceIcons from './components/PlanServiceIcons';
import TextBold from '../../components/TextBold';

const OurPlanDetails = props => {
  const {planDetails,planDetailsLoading,planDetailsError,getAllPlanServices,getAllPlanServicesLoading,getAllPlanServicesError} = useOurPlanDetails(props);
  const renderItem = ({item, index}) => {
    return (
      <View key={index}>
        <View style={styles.starIcon}>
          <Image style={styles.ImageStyle} source={PNG.dot} />
          <TextBold textData={item} textStyle={styles.details}/>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.parentContainerStyle}>
          <Header showBackButton={true} title={TITLE}/>
          <ScrollView
        nestedScrollEnabled={true}>
        <PlanCard/>{(getAllPlanServices && getAllPlanServicesLoading===false && getAllPlanServicesError===false) &&
        <PlanServiceIcons data={getAllPlanServices}/>}
        {(planDetailsLoading && getAllPlanServicesLoading) &&  <View style={styles.emptyView}>
          <ActivityIndicator size={'large'}/>
        </View> }
        {(planDetails && planDetailsLoading===false && planDetailsError===false &&getAllPlanServicesLoading===false) && (
            <View style={styles.bottomContainerStyle}>
            <FlatList
              renderItem={renderItem}
              data={planDetails}
              keyExtractor={(item, index) => `${index}`}
              nestedScrollEnabled={true}
              showsHorizontalScrollIndicator={false}
            />
        
          <Text style={styles.termsCondition}>{TERMS_AND_CONDITION}</Text>
          <FlatList
            renderItem={renderItem}
            data={termsAndCondition}
            keyExtractor={(item, index) => `${index}`}
            nestedScrollEnabled={true}
            showsHorizontalScrollIndicator={false}
          />
           </View> )}
      </ScrollView>
    </SafeAreaView>
  );}
export default OurPlanDetails;
