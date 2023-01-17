import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from '../styles';
import { NEXT, DESCRIPTION_SCREEN2TOP_PART1, DESCRIPTION_SCREEN2BOTTOM_PART1, DESCRIPTION_SCREEN2BOTTOM_PART2, DESCRIPTION_SCREEN2BOTTOM_PART3 } from '../constant';
import IntroHeader from './IntroHeader';
import { PNG } from "../../../../assets";


const IntroStaticScreen2 = (props) => {

  return (
    <View style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <View>
          <IntroHeader />
        </View>
        <View>
          <View style={styles.IntroStaticScreen2Container}>
            <Image
              source={PNG.SLIDDERIMG2}
              style={styles.IntroStaticScreen2Img}
            />
            <Text style={styles.IntroStaticScreen1Text}>{DESCRIPTION_SCREEN2TOP_PART1}</Text>
            <Text style={styles.IntroStaticScreen1Text}>{DESCRIPTION_SCREEN2BOTTOM_PART1}<Text style={styles.IntroStaticScreen1ColorText}>{DESCRIPTION_SCREEN2BOTTOM_PART2}</Text>{DESCRIPTION_SCREEN2BOTTOM_PART3}</Text>

            <Image
              source={PNG.SLIDDERBOTTOMIMG}
              style={styles.BackgroundBottomImage}
            />
            <View style={styles.line} />
          </View>
        </View>

      </View>

      <View style={styles.bottomContainer}>
        <View style={styles.subBottomContainer}>
          <Image
            source={PNG.BOTTOMNAVIMG2}
            style={styles.BottomContaierImage1}
          />

          <TouchableOpacity style={styles.BottomContaierText}
            onPress={props.onNext}>
            <Text style={styles.IntroStaticScreen1ColorText}>{NEXT}</Text>
          </TouchableOpacity>

        </View>
      </View>
    </View>

  );
};

export default IntroStaticScreen2;
