import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from '../styles';
import { NEXT,DESCRIPTION_SCREEN2TOP_PART1,DESCRIPTION_SCREEN2BOTTOM_PART1,DESCRIPTION_SCREEN2BOTTOM_PART2 ,DESCRIPTION_SCREEN2BOTTOM_PART3} from '../constant';
import IntroHeader from './IntroHeader';
import { PNG } from "../../../../assets";


const IntroStaticScreen3 = (props) => {


  return (
    <View>
      <IntroHeader />
      <View>
        <View style={styles.IntroStaticScreen1Container}>
          <Image
            source={PNG.SLIDDERIMG3}
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

      <View style={styles.IntroStaticScreen1BottomContainer}>
        <Image
          source={PNG.BOTTOMNAVIMG3}
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

export default IntroStaticScreen3;
