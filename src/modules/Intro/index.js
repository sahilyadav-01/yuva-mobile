import React from 'react'
import { View, Text } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';
import IntroBody from './components/IntroBody';
import IntroHeader from './components/IntroHeader';
import IntroStaticScreen1 from './components/IntroStaticScreen1';


const Intro = () => {
  return (
    <View >
    <IntroStaticScreen1/>
    </View>
  )
}

export default Intro;
