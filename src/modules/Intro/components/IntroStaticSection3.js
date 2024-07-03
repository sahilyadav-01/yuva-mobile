import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from '../styles';
import {
  DESCRIPTION_SCREEN3TOP_PART1,
  DESCRIPTION_SCREEN3TOP_PART2,
} from '../constant';
import {PNG} from '../../../../assets';

const IntroStaticSection3 = () => {
  return (
    <View style={styles.mainContainer}>
      <Image source={PNG.SLIDDERIMG3} />
      <Text style={styles.IntroStaticScreen1Text}>
        <Text style={styles.IntroStaticScreen1ColorText}>
          {DESCRIPTION_SCREEN3TOP_PART1}
        </Text>
        {DESCRIPTION_SCREEN3TOP_PART2}
      </Text>
    </View>
  );
};

export default IntroStaticSection3;
