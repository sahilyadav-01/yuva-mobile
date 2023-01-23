import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from '../styles';
import { DESCRIPTION_SCREEN4TOP_PART1, DESCRIPTION_SCREEN4TOP_PART2, DESCRIPTION_SCREEN4TOP_PART3, DESCRIPTION_SCREEN4BOTTOM_PART1, DESCRIPTION_SCREEN4BOTTOM_PART2 } from '../constant';
import { PNG } from "../../../../assets";


const IntroStaticSection4 = () => {
  return (
    <View style={styles.mainContainer}>
      <Image
        source={PNG.SLIDDERIMG4}
      />
      <Text style={styles.IntroStaticScreen1Text}>
        <Text style={styles.IntroStaticScreen1ColorText}>
          {DESCRIPTION_SCREEN4TOP_PART1}
        </Text>
        {DESCRIPTION_SCREEN4TOP_PART2}
        <Text style={styles.IntroStaticScreen1ColorText}>
          {DESCRIPTION_SCREEN4TOP_PART3}
        </Text>
      </Text>
      <Text style={styles.IntroStaticScreen1Text}>
        {DESCRIPTION_SCREEN4BOTTOM_PART1}
      </Text>
    </View>
  )
};

export default IntroStaticSection4;
