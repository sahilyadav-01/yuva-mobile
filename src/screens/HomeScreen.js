import React, {useEffect} from 'react';
import {View, SafeAreaView, ScrollView} from 'react-native';
import MainHeader from '../components/MainHeader';
import CarouselContainer from '../components/CarouselContainer';
import ServiceContainer from '../components/ServiceContainer';
import {useRoute} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {allAppointmentThunk} from '../store/reducers/AppointmentSlice';

import YuvaStatusBar from '../components/YuvaStatusBar';
//const Stack = createStackNavigator();

const HomeScreen = ({navigation}) => {
  console.log('Navigation',navigation)
  const route = useRoute();
  const dispatch = useDispatch();
  const {user:{jwt},loggedIn} = useSelector(state => state.auth);
  useEffect(() => {
    const isActive = 'true';
    dispatch(allAppointmentThunk({jwt, isActive})).then().catch();
  }, []);
  return (
    <SafeAreaView style={{flex: 1}}>
      <YuvaStatusBar />
        <MainHeader showLogin={loggedIn==='loggedIn'} onLoginPress={()=>{navigation.navigate('LoginScreen')}}/>
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
