import React from 'react';
import {
  ActivityIndicator,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './styles';
import {useOurPlanDetails} from './hooks/useOurPlanDetails';
import PlanCard from './components/PlanCard';
import {TERMS_AND_CONDITION, TITLE, termsAndCondition} from './constants';
import {FlatList} from 'react-native-gesture-handler';
import {PNG} from '../../../assets';
import Header from '../../components/Header';
import PlanServiceIcons from './components/PlanServiceIcons';
import TextBold from '../../components/TextBold';
import {getDimensions} from '../../utils/utils';

const OurPlanDetails = props => {
  const {
    planDetails,
    planDetailsLoading,
    planDetailsError,
    getAllPlanServices,
    getAllPlanServicesLoading,
    getAllPlanServicesError,
    ourPlanData,
    bookOurPlan,
  } = useOurPlanDetails(props);
  const renderItem = ({item, index}) => {
    return (
      <View key={index}>
        <View style={styles.starIcon}>
          <Image style={styles.ImageStyle} source={PNG.dot} />
          <TextBold textData={item} textStyle={styles.details} />
        </View>
      </View>
    );
  };
 
  return (
    <SafeAreaView style={styles.parentContainerStyle}>
      <Header showBackButton={true} title={TITLE} />
      <ScrollView nestedScrollEnabled={true}>
        <View style={styles.container}>
          <ImageBackground
            resizeMode="cover"
            source={PNG.PlanBanner}
            style={styles.imageBackground}>
            <Text style={styles.planName}>{ourPlanData?.name}</Text>
            <Text style={styles.planPrice}>{ourPlanData?.yearlyFinalCost}</Text>
            <TouchableOpacity
              onPress={bookOurPlan}
              style={styles.buyNowContainer}>
              <Text style={styles.buyNow}>Buy now</Text>
            </TouchableOpacity>
          </ImageBackground>
          <View style={styles.iconContainer}>
            <Text style={styles.termsCondition}>Package Includes</Text>
            {getAllPlanServices &&
              getAllPlanServicesLoading === false &&
              getAllPlanServicesError === false && (
                <PlanServiceIcons data={getAllPlanServices} />
              )}
            {planDetailsLoading && getAllPlanServicesLoading && (
              <View style={styles.emptyView}>
                <ActivityIndicator size={'large'} />
              </View>
            )}
            <View style={styles.termsContainer}>
              <Text style={styles.termsCondition}>Terms and Conditions</Text>
              <FlatList
                renderItem={renderItem}
                data={termsAndCondition}
                keyExtractor={(item, index) => `${index}`}
                nestedScrollEnabled={true}
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default OurPlanDetails;
