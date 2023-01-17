import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import MainHeader from '../../components/MainHeader';
import {
  HRA,
  WHAT_IS_HRA,
  HRA_DESC,
  HRA_BENIFITS,
  BENIFIT_1,
  BENIFIT_2,
  BENIFIT_3,
  BENIFIT_4,
  BENIFIT_5,
  BENIFIT_6,
  BENIFIT_7,
} from './constant';
import {styles} from './styles';
import {PNG} from '../../../assets';
const StaticHra = () => {
  return (
    <View>
      <MainHeader />
      <ScrollView
        contentContainerStyle={styles.ScrollViewContainerStyle}
        style={styles.containerStyle}
        showsVerticalScrollIndicator={false}>
        <Text style={styles.headTitle}>{HRA}</Text>
        <Text style={styles.title}>{WHAT_IS_HRA}</Text>
        <Text style={styles.description}>{HRA_DESC}</Text>
        <Text style={styles.title}>{HRA_BENIFITS}</Text>
        <Text style={styles.textStyle}>{BENIFIT_1}</Text>
        <Text style={styles.textStyle}>{BENIFIT_2}</Text>
        <Text style={styles.textStyle}>{BENIFIT_3}</Text>
        <Text style={styles.textStyle}>{BENIFIT_4}</Text>
        <Text style={styles.textStyle}>{BENIFIT_5}</Text>
        <Text style={styles.textStyle}>{BENIFIT_6}</Text>
        <Text style={styles.textStyle}>{BENIFIT_7}</Text>
        <View style={styles.imageStyle}>
          <Image source={PNG.CORONA} />
        </View>
      </ScrollView>
    </View>
  );
};

export default StaticHra;
