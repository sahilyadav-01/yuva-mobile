import React, {useEffect} from 'react';
import {View, SafeAreaView, ScrollView} from 'react-native';
import CarouselContainer from '../components/CarouselContainer';
import ServiceContainer from '../components/ServiceContainer';
import {useRoute} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {allAppointmentThunk} from '../store/reducers/AppointmentSlice';

import Header from '../components/Header';
//const Stack = createStackNavigator();

const HomeScreen = ({navigation}) => {
  const route = useRoute();
  const dispatch = useDispatch();
  const {user:{jwt},loggedIn} = useSelector(state => state.auth);
  const onPressRightIcon = () => {
    if (loggedIn !=='loggedIn') {
      navigation.navigate('LoginScreen');
    } else {
      //open drawer
    }
  }
  useEffect(() => {
    const isActive = 'true';
    dispatch(allAppointmentThunk({isActive})).then().catch();
  }, []);
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header 
        isLoggedIn={loggedIn ==='loggedIn'} 
        onPressRightIcon={onPressRightIcon}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <CarouselContainer />
        <View className="flex-row justify-center">
          <ServiceContainer />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
