import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from '../styles';
import { NEXT, DESCRIPTION_SCREEN4TOP_PART1, DESCRIPTION_SCREEN4TOP_PART2, DESCRIPTION_SCREEN4TOP_PART3, DESCRIPTION_SCREEN4BOTTOM_PART1, DESCRIPTION_SCREEN4BOTTOM_PART2 } from '../constant';
import IntroHeader from './IntroHeader';
import { PNG } from "../../../../assets";


const IntroStaticScreen4 = (props) => {

  return (
    <View style={styles.mainContainer}>
      <View style={styles.topContainer4}>
        <View>
          <IntroHeader />
        </View>
        <View>
          <View style={styles.IntroStaticScreen1Container}>
            <Image
              source={PNG.SLIDDERIMG4}
              style={styles.IntroStaticScreen4Img}
            />
            <Text style={styles.IntroStaticScreen1Text}><Text style={styles.IntroStaticScreen1ColorText}>{DESCRIPTION_SCREEN4TOP_PART1}</Text>{DESCRIPTION_SCREEN4TOP_PART2}<Text style={styles.IntroStaticScreen1ColorText}>{DESCRIPTION_SCREEN4TOP_PART3}</Text></Text>
            <Text style={styles.IntroStaticScreen1Text}>{DESCRIPTION_SCREEN4BOTTOM_PART1}</Text>

            <Image
              source={PNG.SLIDDERBOTTOMIMG}
              style={styles.BackgroundBottomImage}
            />
            <View style={styles.line} />
          </View>
        </View>

      </View>

      <View style={styles.bottomContainer4}>
        
      
          <TouchableOpacity style={styles.BottomContaierTextScreen4}
            onPress={props.onNext}>

            <Text style={styles.IntroStaticScreen4Text}>{DESCRIPTION_SCREEN4BOTTOM_PART2}</Text>

          </TouchableOpacity>


      
      </View>
    </View>
  );
};

export default IntroStaticScreen4;
