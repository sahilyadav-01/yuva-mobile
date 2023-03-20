import React, { useEffect, useState } from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import CarouselContainer from '../../components/CarouselContainer';
import ServiceContainer from '../../components/ServiceContainer';
import { useIsFocused } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { allAppointmentThunk } from '../../store/reducers/AppointmentSlice';
import { styles } from '../styles';
import Header from '../../components/Header';
import { PNG, SVG } from '../../../assets';
import {
  LANDING_PAGE_TEXT0,
  LANDING_PAGE_TEXT1,
  LANDING_PAGE_TEXT2,
  LANDING_PAGE_TEXT3,
  LANDING_PAGE_TEXT4,
  SEARCH_PLACEHOLDER,
} from '../constant';
import CarouselItem from '../../components/CarouselItem';
import CarouselItem2 from '../../components/CarouselItem2';
import CarouselItem4 from '../../components/CarouselItem4';
import { getServicesThunk } from '../../store/reducers/AttributeSlice';
import { popularPackageNameThunk } from '../../store/reducers/ProgramAndPlanSlice';
import { popularTestsSliceThunk } from '../../store/reducers/PopularTestsSlice ';
import { lifeStyleSliceThunk } from '../../store/reducers/LifeStyleSlice';
import OurPlan from '../../modules/ourPlan';
import { getCartGuestThunk, getCartUserThunk } from '../../store/reducers/CartSlice';
import { useCart } from '../../modules/cart/hooks/useCart';

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const focused = useIsFocused();
  const { addToCart } = useCart()
  const { loggedIn } = useSelector(state => state.auth);
  const { loading: appointmentLoading } = useSelector(state => state.appointment);
  const { loading: servicesLoading } = useSelector(state => state.attribute);
  const { userAppointments } = useSelector(state => state?.appointment);
  const { popularPackageName } = useSelector(state => state.programAndPlan);
  const { popularTest } = useSelector(state => state.popularTests);
  const { lifestylePackage } = useSelector(state => state.lifestylePackage);
  const { existingIds } = useSelector(state => state.cart);
  const [addedItem, setAddedItem] = useState({ id: "", type: "", })
  const [enableNavigation, setEnableNavigation] = useState(false)


  const onPressAdd = (arg) => {
    addToCart({ name: arg.name, cost: arg.cost, productId: arg.productId }, arg.productType)
    setAddedItem({ id: arg.productId, type: arg.productType })
    setEnableNavigation(true)
  };
  const onPackagePress = (enumName, name) => {
    navigation.navigate('LifestyleTestsAndPackages', { enumName, name })
  };

  const onHealthPackagePress = (index) => navigation.navigate('HealthCheckupsTests', { index })
  useEffect(() => {
    if (navigation.isFocused()) {
      const isActive = 'true';
      setEnableNavigation(false);
      dispatch(getServicesThunk({}));
      dispatch(allAppointmentThunk({ isActive }));
      dispatch(popularPackageNameThunk({ pageNo: 1, pageSize: 4, search: '' }));
      dispatch(popularTestsSliceThunk({ pageNo: 1, pageSize: 4, search: '' }));
      dispatch(lifeStyleSliceThunk({ isActive }));
      if (loggedIn === 'loggedIn') {
        dispatch(getCartUserThunk());
      } else {
        dispatch(getCartGuestThunk());
      }

    }
  }, [focused]);

  useEffect(() => {
    if (addedItem.id && existingIds.includes(addedItem.id.toString()) && enableNavigation) {
      navigation.navigate('HealthCheckupsTests', { index: addedItem.type === 'PACKAGE' ? 0 : 1 })
    }
  }, [existingIds, addedItem, enableNavigation]);


  if (appointmentLoading || servicesLoading) return null;
  return (
    <SafeAreaView style={styles.homeScreenContainer}>
      <Header showSearch={true} searchPlaceholder={SEARCH_PLACEHOLDER} />
      <ScrollView
        contentContainerStyle={styles.ScrollViewContainerStyle}
        showsVerticalScrollIndicator={false}>
        <View>
          <OurPlan isHomeScreen={true}/>
        </View>
        <CarouselContainer
          data={userAppointments}
          isIndexed={true}
          includeMockData={false}>
          <CarouselItem />
        </CarouselContainer>
        <View style={styles.PopularHealthCheckups}>
          <Text style={styles.LandingPageText1}>{LANDING_PAGE_TEXT0} </Text>
          <View style={styles.line1} />
        </View>
        <View style={styles.serviceContainerWrapperStyle}>
          <ServiceContainer serviceCard={true} />
        </View>
        <View style={styles.bannerContainer}>
          <SVG.landingPageBanner1 />
        </View>
        <View style={styles.PopularHealthCheckups}>
          <Text style={styles.LandingPageText1}>{LANDING_PAGE_TEXT1} </Text>
          <View style={styles.line} />
          <TouchableOpacity onPress={() => onHealthPackagePress(0)}>
            <Text style={styles.LandingPageText2}>{LANDING_PAGE_TEXT2}</Text>
          </TouchableOpacity>
        </View>
        {popularPackageName && <View>
          <CarouselContainer
            data={popularPackageName.popularPackageResponseDtoList}
            isIndexed={false}>
            <CarouselItem2
              imgPath={PNG.POPULARHEALTHICON}
              onPressAdd={(arg) => onPressAdd(arg)}
            />
          </CarouselContainer>
        </View>}
        <View style={styles.bannerContainer1}>
          <Image
            style={styles.bannerImage}
            source={PNG.LandingPageBanner2}></Image>
        </View>
        <View style={styles.PopularHealthCheckups}>
          <Text style={styles.LandingPageText1}>{LANDING_PAGE_TEXT3} </Text>
          <View style={styles.line} />
          <TouchableOpacity onPress={() => onHealthPackagePress(1)}>
            <Text style={styles.LandingPageText2}>{LANDING_PAGE_TEXT2}</Text>
          </TouchableOpacity>
        </View>
        {popularTest && <View>
          <CarouselContainer
            data={popularTest.popularTestResponseDtoList}
            isIndexed={false}>
            <CarouselItem4
              imgPath={PNG.POPULARDIAGNOSTICICON}
              onPressAdd={(arg) => onPressAdd(arg)}
            />
          </CarouselContainer>
        </View>}
        <View style={styles.PopularHealthCheckups}>
          <Text style={styles.LandingPageText1}>{LANDING_PAGE_TEXT4} </Text>
          <View style={styles.line2} />
        </View>
        <View style={styles.serviceContainerWrapperStyle}>
          <ServiceContainer
            lifeStyleCard={true}
            data={lifestylePackage}
            onPackagePress={onPackagePress}
          />
        </View>
        
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
