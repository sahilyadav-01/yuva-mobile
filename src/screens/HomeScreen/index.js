import React, { useEffect } from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  Image,
  Text,
} from 'react-native';
import CarouselContainer from '../../components/CarouselContainer';
import { useIsFocused } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { allAppointmentThunk } from '../../store/reducers/AppointmentSlice';
import { styles } from '../styles';
import Header from '../../components/Header';
import { PNG } from '../../../assets';
import {
  LANDING_PAGE_TEXT0,
  SEARCH_PLACEHOLDER,
} from '../constant';
import CarouselItem from '../../components/CarouselItem';
import { getServicesThunk } from '../../store/reducers/AttributeSlice';
import { popularPackageNameThunk } from '../../store/reducers/ProgramAndPlanSlice';
import { popularTestsSliceThunk } from '../../store/reducers/PopularTestsSlice ';
import { lifeStyleSliceThunk } from '../../store/reducers/LifeStyleSlice';
import OurPlan from '../../modules/ourPlan';
import { getCartGuestThunk, getCartUserThunk } from '../../store/reducers/CartSlice';

const HomeScreen = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const focused = useIsFocused();
  const { isSubscribed } = useSelector(state => state.profile);
  const { loggedIn } = useSelector(state => state.auth);
  const { loading: appointmentLoading } = useSelector(state => state.appointment);
  const { loading: servicesLoading } = useSelector(state => state.attribute);
  const { userAppointments } = useSelector(state => state?.appointment);
  useEffect(() => {
    if (navigation.isFocused()) {
      if(route?.params?.navigateToDetails) {
        navigation?.navigate('OurPlan',{screen:'OurPlanDetails',params:route?.params?.screenParams})
      }
      const isActive = 'true';
      dispatch(getServicesThunk({}));
      dispatch(allAppointmentThunk({ isActive }));
      dispatch(popularPackageNameThunk({ pageNo: 1, pageSize: 4, search: '' }));
      dispatch(popularTestsSliceThunk({ pageNo: 1, pageSize: 4, search: '' }));
      dispatch(lifeStyleSliceThunk({}));
      if (loggedIn === 'loggedIn') {
        dispatch(getCartUserThunk());
      } else {
        dispatch(getCartGuestThunk());
      }

    }
  }, [focused,loggedIn]);

  if (appointmentLoading || servicesLoading) return null;
  return (
    <SafeAreaView style={styles.homeScreenContainer}>
      <Header showSearch={true} searchPlaceholder={SEARCH_PLACEHOLDER} isScreen={true} hideMenu={false} showCart={true}/>
      <ScrollView
        nestedScrollEnabled={true}
        contentContainerStyle={styles.ScrollViewContainerStyle}
        showsVerticalScrollIndicator={false}>
        {!isSubscribed && (
          <View style={styles.planContainer}>
            <OurPlan isHomeScreen={true} />
          </View>
        )}
        {userAppointments.length > 0 && <CarouselContainer
          data={userAppointments}
          isIndexed={true}
          includeMockData={false}>
          <CarouselItem />
        </CarouselContainer>}
        <View style={styles.PopularHealthCheckups}>
          <Text style={styles.LandingPageText1}>{LANDING_PAGE_TEXT0} </Text>
          <View style={styles.line1} />
        </View>
        <ScrollView horizontal={true} nestedScrollEnabled={true}>
        <View style={styles.serviceContainerWrapperStyle}>
          <View style={{flex:1}}>
          </View>
        </View>
        </ScrollView>
        <View style={styles.bannerContainer}>
          <View style={{flex:1}}>
          <Image source={PNG.HealthBanner} style={{flex:1,width:'100%'}} resizeMode='cover'/>
          </View>
        </View>
        <View style={styles.bannerContainer1}>
          <Image
            style={styles.bannerImage}
            source={PNG.LandingPageBanner2}></Image>
        </View>
        <ScrollView horizontal={true} nestedScrollEnabled={true}>
        <View style={styles.serviceContainerWrapperStyle}>
          <View style={{flex:1}}>
          </View>
        </View>
        </ScrollView>
        {isSubscribed && (
          <View style={styles.planContainer}>
            <OurPlan isHomeScreen={true} />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;