import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from '../styles';
import { DESCRIPTION_SCREEN2TOP_PART1, DESCRIPTION_SCREEN2BOTTOM_PART1, DESCRIPTION_SCREEN2BOTTOM_PART2, DESCRIPTION_SCREEN2BOTTOM_PART3 } from '../constant';
import { PNG } from "../../../../assets";


const IntroStaticSection2 = () => {

  return (
    <View style={styles.mainContainer}>
      <Image
        source={PNG.SLIDDERIMG2}
      />
      <Text style={styles.IntroStaticScreen1Text}>
        {DESCRIPTION_SCREEN2TOP_PART1}
      </Text>
      <Text style={styles.IntroStaticScreen1Text}>
        {DESCRIPTION_SCREEN2BOTTOM_PART1}
        <Text style={styles.IntroStaticScreen1ColorText}>
          {DESCRIPTION_SCREEN2BOTTOM_PART2}
        </Text>
        {DESCRIPTION_SCREEN2BOTTOM_PART3}
      </Text>
    </View>
  )
};

export default IntroStaticSection2;
