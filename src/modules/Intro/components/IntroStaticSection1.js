import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from '../styles';
import { DESCRIPTION_SCREEN1TOP_PART1, DESCRIPTION_SCREEN1TOP_PART2, DESCRIPTION_SCREEN1TOP_PART3, DESCRIPTION_SCREEN1BOTTOM_PART1, DESCRIPTION_SCREEN1BOTTOM_PART2 } from '../constant';
import { PNG } from "../../../../assets";

const IntroStaticSection1 = () => {
  return (
    <View style={styles.mainContainer}>
      <Image source={PNG.SLIDDERIMG1} />
      <Text style={styles.IntroStaticScreen1Text}>{DESCRIPTION_SCREEN1TOP_PART1}
        <Text style={styles.IntroStaticScreen1ColorText}>{DESCRIPTION_SCREEN1TOP_PART2}</Text>
        {DESCRIPTION_SCREEN1TOP_PART3}</Text>
      <Text style={styles.IntroStaticScreen1Text}>
        <Text style={styles.IntroStaticScreen1ColorText}>
          {DESCRIPTION_SCREEN1BOTTOM_PART1}
        </Text>
        {DESCRIPTION_SCREEN1BOTTOM_PART2}
      </Text>
    </View>
  );
};

export default IntroStaticSection1;