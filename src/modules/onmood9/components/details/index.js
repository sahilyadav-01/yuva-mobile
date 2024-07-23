import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {styles} from './style';
import {
  DESCRIPTION_TEXT,
  HEADING_TEXT,
  SELF_ASSESSMENT,
  SELF_HEALING,
  SELF_LEARNING,
  SELF_TRACKING,
} from './constants';
import {PNG} from '../../../../../assets';

const DescriptionContainer = () => {
  const Details = () => {
    const data = [
      {heading: SELF_ASSESSMENT, source: PNG.SelfAssessment},
      {heading: SELF_LEARNING, source: PNG.SelfLearning},
      {heading: SELF_TRACKING, source: PNG.SelfTracking},
      {heading: SELF_HEALING, source: PNG.SelfHealing},
    ];
    return data.map(item => {
      return (
        <View style={style.itemContainer}>
          <Image source={item?.source} resizeMode="contain" />
          <Text style={style.imageText}>{item?.heading}</Text>
        </View>
      );
    });
  };
  const style = styles();
  return (
    <View>
      <Text style={style.headingText}>{HEADING_TEXT}</Text>
      <Text style={style.descriptionText}>{DESCRIPTION_TEXT}</Text>
      <ScrollView contentContainerStyle={style.container} horizontal={true}>
        <Details />
      </ScrollView>
    </View>
  );
};

export default DescriptionContainer;
