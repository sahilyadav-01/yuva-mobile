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
import {useRoute} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {allAppointmentThunk} from '../../store/reducers/AppointmentSlice';
import {styles} from '../styles';
import Header from '../../components/Header';
import {PNG} from '../../../assets';
import {LANDING_PAGE_TEXT1, LANDING_PAGE_TEXT2, LANDING_PAGE_TEXT3, LANDING_PAGE_TEXT4} from '../constant';
import CarouselItem from '../../components/CarouselItem';
import CarouselItem2 from '../../components/CarouselItem2';
import CarouselItem3 from '../../components/CarouselItem3';

const HomeScreen = ({navigation}) => {
  const route = useRoute();
  const dispatch = useDispatch();
  const {
    user: {jwt},
    loggedIn,
  } = useSelector(state => state.auth);
  const onPressRightIcon = () => {
    if (loggedIn !== 'loggedIn') {
      navigation.navigate('LoginScreen');
    } else {
      //open drawer
    }
  };

  const onPressAdd = () => {
    //On add press logic to be added here
  };
  useEffect(() => {
    const isActive = 'true';
    dispatch(allAppointmentThunk({jwt, isActive})).then().catch();
  }, []);
  return (
    <SafeAreaView style={styles.homeScreenContainer}>
      <Header
        isLoggedIn={loggedIn === 'loggedIn'}
        onPressRightIcon={onPressRightIcon}
      />
      <ScrollView
        contentContainerStyle={styles.ScrollViewContainerStyle}
        showsVerticalScrollIndicator={false}>
        <CarouselContainer isIndexed={true}>
          <CarouselItem />
        </CarouselContainer>
        <View className="flex-row justify-center">
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
          <CarouselContainer isIndexed={false}>
            <CarouselItem2
              imgPath={require('../../../assets/healthImg.png')}
              onPressAdd={() => onPressAdd()}
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
          <CarouselContainer isIndexed={false}>
            <CarouselItem2
              imgPath={require('../../../assets/diagnosticImg.png')}
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
          <CarouselContainer isIndexed={false}>
            <CarouselItem3
              imgPath={require('../../../assets/woman_HealthCheckUp.png')}
              onPressAdd={() => onPressAdd()}
            />
          </CarouselContainer>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
