import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import MainHeader from '../../components/MainHeader';
import {styles} from './styles';
import {PNG} from '../../../assets';
import {
  DOCTOR,
  CHAT_WITH_DOCTOR,
  DESC,
  SYMPTOMS,
  SEXUAL_PROBLEMS,
  SKIN_PROBLEMS,
  MOST_SEARCHED,
  DIET,
  DIZZINESS,
  GERD,
  SEX_INTERCOURSE,
  BP,
  SORE_THROAT,
  DEDICATED,
  FACILITY_1,
  FACILITY_2,
  FACILITY_3,
  CONSULTATION,
  BEST_DOCTORS,
  TIP_1,
  TIP_2,
  TIP_3,
  DOCTOR_DESC,
} from './constant';
const TalkToDoctor = () => {
  return (
    <View>
      <MainHeader />
      <ScrollView
        contentContainerStyle={styles.ScrollViewContainerStyle}
        style={styles.containerStyle}
        showsVerticalScrollIndicator={false}>
        <Text style={styles.headTitle}>{DOCTOR}</Text>
        <Text style={styles.title}>{CHAT_WITH_DOCTOR}</Text>
        <Text style={styles.description}>{DESC}</Text>
        <View style={styles.imageViews}>
          <View>
            <Image source={PNG.COUGH} />
            <Text style={styles.imageText}>{SYMPTOMS}</Text>
          </View>
          <View>
            <Image source={PNG.SEX} />
            <Text style={styles.imageText}>{SEXUAL_PROBLEMS}</Text>
          </View>
          <View>
            <Image source={PNG.SKIN} />
            <Text style={styles.imageText}>{SKIN_PROBLEMS}</Text>
          </View>
        </View>
        <Text style={styles.title}>{MOST_SEARCHED}</Text>
        <View style={styles.boxView}>
          <View style={styles.box}>
            <Text style={styles.boxText}>{DIET}</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.boxText}>{DIZZINESS}</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.boxText}>{GERD}</Text>
          </View>
        </View>
        <View style={styles.boxView}>
          <View style={styles.box}>
            <Text style={styles.boxText}>{SEX_INTERCOURSE}</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.boxText}>{BP}</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.boxText}>{SORE_THROAT}</Text>
          </View>
        </View>
        <Text style={styles.description}>{DEDICATED}</Text>
        <Text style={styles.description}>{FACILITY_1}</Text>
        <Text style={styles.description}>{FACILITY_2}</Text>
        <Text style={styles.description}>{FACILITY_3}</Text>
        <Text style={styles.title}>{CONSULTATION}</Text>
        <Text style={styles.description}>{TIP_1}</Text>
        <Text style={styles.description}>{TIP_2}</Text>
        <Text style={styles.description}>{TIP_3}</Text>
        <Text style={styles.title}>{BEST_DOCTORS}</Text>
        <Text style={styles.description}>{DOCTOR_DESC}</Text>
      </ScrollView>
    </View>
  );
};

export default TalkToDoctor;
