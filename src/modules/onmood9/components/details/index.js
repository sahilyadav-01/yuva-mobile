import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './style';
import {DESCRIPTION_TEXT, HEADING_TEXT} from './constants';
import {PNG} from '../../../../../assets';

const DescriptionContainer = () => {
  const Details = () => {
    const data = [
      {heading: 'Self Assessment', source: PNG.SelfAssessment},
      {heading: 'Self Learning', source: PNG.SelfLearning},
      {heading: 'Self Tracking', source: PNG.SelfTracking},
    ];
    return data.map(item => {
      return (
        <View style={style.itemContainer}>
          <Image
            source={item?.source}
            style={style.imageStyle}
            resizeMode="contain"
          />
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
      <View style={style.container}>
        <Details />
      </View>
    </View>
  );
};

export default DescriptionContainer;
