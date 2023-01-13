import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from '../styles';
import { NEXT, DESCRIPTION_SCREEN1TOP_PART1, DESCRIPTION_SCREEN1TOP_PART2, DESCRIPTION_SCREEN1TOP_PART3, DESCRIPTION_SCREEN1BOTTOM_PART1, DESCRIPTION_SCREEN1BOTTOM_PART2, BOTTOMNAVIMG1 } from '../constant';
import IntroHeader from './IntroHeader';
import { PNG } from "../../../../assets";


const IntroStaticScreen1 = (props) => {

  return (
    <View  style={styles.screenMainContainer}>
      <View>
        <IntroHeader />
      </View>
      <View>
        <View style={styles.IntroStaticScreen1Container}>
          <Image
            source={PNG.SLIDDERIMG1}
            style={styles.IntroStaticScreen1Img}
          />
          <Text style={styles.IntroStaticScreen1Text}>{DESCRIPTION_SCREEN1TOP_PART1}
            <Text style={styles.IntroStaticScreen1ColorText}>{DESCRIPTION_SCREEN1TOP_PART2}</Text>
            {DESCRIPTION_SCREEN1TOP_PART3}</Text>
          <Text><Text style={styles.IntroStaticScreen1ColorText}>{DESCRIPTION_SCREEN1BOTTOM_PART1}</Text>{DESCRIPTION_SCREEN1BOTTOM_PART2}</Text>

          <Image
            source={PNG.SLIDDERBOTTOMIMG}
            style={styles.BackgroundBottomImage}

          />
          <View style={styles.line} />
        </View>
      </View>

      <View style={styles.IntroStaticScreen1BottomContainer}>
        <Image
          source={PNG.BOTTOMNAVIMG1}
          style={styles.BottomContaierImage1}
        />

        <TouchableOpacity
           onPress={props.onNext}>
          <Text style={styles.IntroStaticScreen1ColorText}>{NEXT}</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
};

export default IntroStaticScreen1;
