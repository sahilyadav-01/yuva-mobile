import {View, Image, ScrollView} from 'react-native';
import React from 'react';
import Header from '../../components/Header/index';
import {styles} from './styles';
import HraCard from './components/hraCard';
import BenfitsCard from './components/benifitsCard';
import {PNG} from '../../../assets';
import { HRA } from './constant';
const StaticHra = ({navigation}) => {

  return (
    <View>
      <Header showBackButton={true} title={HRA}/>
      <ScrollView
        nestedScrollEnabled={true}
        contentContainerStyle={styles.ScrollViewContainerStyle}
        style={styles.containerStyle}
        showsVerticalScrollIndicator={false}>
        <HraCard />
        <BenfitsCard />
        <Image source={PNG.CORONA} style={styles.imageStyle} />
      </ScrollView>
    </View>
  );
};

export default StaticHra;
