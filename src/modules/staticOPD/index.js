import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import MainHeader from '../../components/MainHeader';
import {
  CASHLESS_OPD,
  DESCRIPTION,
  INTERNAL_MEDICINE,
  NEUROLOGY,
  PEDIATRICS,
  SPECIALITIES,
  SURGERY,
  WHAT_IS_CASHLESS_OPD,
} from './constant';
import {PNG} from '../../../assets';
import {styles} from './styles';
const CashlessOPD = () => {
  return (
    <View>
      <MainHeader />
      <ScrollView
        contentContainerStyle={styles.ScrollViewContainerStyle}
        style={styles.containerStyle}
        showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>{CASHLESS_OPD}</Text>
        <Text style={styles.textStyle}>{WHAT_IS_CASHLESS_OPD}</Text>
        <Text style={styles.description}>{DESCRIPTION}</Text>
        <Text style={styles.textStyle}>{SPECIALITIES}</Text>
        <View style={styles.imageStyle}>
          <Image source={PNG.INTERNALMEDICINE} />
          <Text style={styles.imageName}>{INTERNAL_MEDICINE}</Text>
        </View>
        <View style={styles.imageStyle}>
          <Image source={PNG.SURGERY} />
          <Text style={styles.imageName}>{SURGERY}</Text>
        </View>
        <View style={styles.imageStyle}>
          <Image source={PNG.PEDIATRICS} />
          <Text style={styles.imageName}>{PEDIATRICS}</Text>
        </View>
        <View style={styles.imageStyle}>
          <Image source={PNG.NEUROLOGY} />
          <Text style={styles.imageName}>{NEUROLOGY}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default CashlessOPD;
