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
  TIP_21,
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
        <Text style={styles.headTitle}>{DEDICATED}</Text>
        <View>
          <View style={styles.Ocircle}>
            <Image style={styles.imageO} source={PNG.OCIRCLE} />
            <Text style={styles.Odescription1}>{FACILITY_1}</Text>
          </View>
          <View style={styles.Ocircle}>
            <Image style={styles.imageO} source={PNG.OCIRCLE} />
            <Text style={styles.Odescription1}>{FACILITY_2}</Text>
          </View>
          <View style={styles.Ocircle}>
            <Image style={styles.imageO} source={PNG.OCIRCLE} />
            <Text style={styles.Odescription1}>{FACILITY_3}</Text>
          </View>
        </View>
        <Text style={styles.title}>{CONSULTATION}</Text>
        <View>
          <View style={styles.textDia}>
            <Image source={PNG.CIRCLE} />
            <Text style={styles.description1}>{TIP_1}</Text>
          </View>
          <Image style={styles.imgL1} source={PNG.LINE} />
          <View style={styles.textDia}>
            <Image source={PNG.CIRCLE} />
            <View style={styles.textView}>
              <Text style={styles.description1}>{TIP_2}</Text>
              <Text style={styles.description1}>{TIP_21}</Text>
            </View>
          </View>
          <Image style={styles.imgL1} source={PNG.LINE} />
          <View style={styles.textDia}>
            <Image source={PNG.CIRCLE} />
            <Text style={styles.description1}>{TIP_3}</Text>
          </View>
        </View>
        <Text style={styles.title1}>{BEST_DOCTORS}</Text>
        <Text style={styles.description}>{DOCTOR_DESC}</Text>
      </ScrollView>
    </View>
  );
};

export default TalkToDoctor;
