import React, {useEffect} from 'react';
import {View, Text, Image, SafeAreaView, StatusBar} from 'react-native';
import MainHeader from '../components/MainHeader';
import CarouselContainer from '../components/CarouselContainer';
import ServiceCard from '../components/ServiceCard';
import ServiceContainer from '../components/ServiceContainer';
import {useRoute} from '@react-navigation/native';

import YuvaStatusBar from '../components/YuvaStatusBar';

//const Stack = createStackNavigator();

const HomeScreen = ({navigation}) => {
  const route = useRoute();

  return (
    <SafeAreaView>
      <YuvaStatusBar />
      <View>
        <MainHeader />
        <CarouselContainer />
        <View className="flex-row justify-center">
          <ServiceContainer />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
