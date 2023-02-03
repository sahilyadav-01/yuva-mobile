import React, {useEffect} from 'react';
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
import {useIsFocused, useRoute} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {allAppointmentThunk} from '../../store/reducers/AppointmentSlice';
import {styles} from '../styles';
import Header from '../../components/Header';
import {PNG} from '../../../assets';
import {
  LANDING_PAGE_TEXT1,
  LANDING_PAGE_TEXT2,
  LANDING_PAGE_TEXT3,
  LANDING_PAGE_TEXT4,
} from '../constant';
import CarouselItem from '../../components/CarouselItem';
import CarouselItem2 from '../../components/CarouselItem2';
import CarouselItem3 from '../../components/CarouselItem3';
import {getServicesThunk} from '../../store/reducers/AttributeSlice';

const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const focused = useIsFocused();
  const {
    user: {jwt},
    loggedIn,
  } = useSelector(state => state.auth);
  const {loading: appointmentLoading} = useSelector(state => state.appointment);
  const {loading: servicesLoading} = useSelector(state => state.attribute);
  const onPressRightIcon = () => {
    if (loggedIn !== 'loggedIn') {
      navigation.navigate('LoginScreen');
    } else {
      //The logic for opening the drawer should be added here
    }
  };

  const onPressAdd = () => {
    //On add press logic to be added here
  };
  useEffect(() => {
    if (navigation.isFocused()) {
      const isActive = 'true';
      dispatch(allAppointmentThunk({jwt, isActive}));
      dispatch(getServicesThunk({jwt}));
    }
  }, [focused]);
  if (appointmentLoading || servicesLoading) return null;
  return (
    <SafeAreaView style={styles.homeScreenContainer}>
      <Header
        isLoggedIn={loggedIn === 'loggedIn'}
        onPressRightIcon={onPressRightIcon}
      />
      <ScrollView
        contentContainerStyle={styles.ScrollViewContainerStyle}
        showsVerticalScrollIndicator={false}>
        <CarouselContainer isIndexed={true} includeMockData={false}>
          <CarouselItem />
        </CarouselContainer>
        <View style={styles.serviceContainerWrapperStyle}>
          <ServiceContainer />
        </View>
        <View style={styles.bannerContainer}>
          <Image style={styles.bannerImage} source={PNG.BANNER}></Image>
        </View>
        <View style={styles.PopularHealthCheckups}>
          <Text style={styles.LandingPageText1}>{LANDING_PAGE_TEXT1} </Text>
          <View style={styles.line} />
          <TouchableOpacity>
            <Text style={styles.LandingPageText2}>{LANDING_PAGE_TEXT2}</Text>
          </TouchableOpacity>
        </View>
        <View>
          <CarouselContainer isIndexed={false} includeMockData={true}>
            <CarouselItem2
              imgPath={PNG.HEALTHIMG}
              onPressAdd={() => onPressAdd()}
              healthCheckUp={true}
            />
          </CarouselContainer>
        </View>
        <View style={styles.bannerContainer}>
          <Image style={styles.bannerImage} source={PNG.BANNER2}></Image>
        </View>
        <View style={styles.PopularHealthCheckups}>
          <Text style={styles.LandingPageText1}>{LANDING_PAGE_TEXT3} </Text>
          <View style={styles.line} />
          <TouchableOpacity>
            <Text style={styles.LandingPageText2}>{LANDING_PAGE_TEXT2}</Text>
          </TouchableOpacity>
        </View>
        <View>
          <CarouselContainer isIndexed={false} includeMockData={true}>
            <CarouselItem2
              imgPath={PNG.DIAGNOSTIC}
              onPressAdd={() => onPressAdd()}
            />
          </CarouselContainer>
        </View>
        <View style={styles.PopularHealthCheckups}>
          <Text style={styles.LandingPageText1}>{LANDING_PAGE_TEXT4} </Text>
          <View style={styles.line} />
          <TouchableOpacity>
            <Text style={styles.LandingPageText2}>{LANDING_PAGE_TEXT2}</Text>
          </TouchableOpacity>
        </View>
        <View>
          <CarouselContainer isIndexed={false} includeMockData={true}>
            <CarouselItem3
              imgPath={PNG.HEALTHCHECKUP1}
              onPressAdd={() => onPressAdd()}
            />
          </CarouselContainer>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
