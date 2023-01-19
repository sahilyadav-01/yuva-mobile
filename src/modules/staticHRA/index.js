import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import MainHeader from '../../components/MainHeader';
import {styles} from './styles';
import HraCard from './components/hraCard';
import BenfitsCard from './components/benifitsCard';
const StaticHra = () => {
  return (
    <View>
      <MainHeader />
      <ScrollView
        contentContainerStyle={styles.ScrollViewContainerStyle}
        style={styles.containerStyle}
        showsVerticalScrollIndicator={false}>
        <HraCard />
        <BenfitsCard />
      </ScrollView>
    </View>
  );
};

export default StaticHra;
