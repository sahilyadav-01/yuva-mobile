import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from '../styles';
import { NEXT,DESCRIPTION_SCREEN3TOP_PART1,DESCRIPTION_SCREEN3TOP_PART2} from '../constant';
import IntroHeader from './IntroHeader';
import { PNG } from "../../../../assets";


const IntroStaticScreen3 = (props) => {


  return (
    <View style={styles.mainContainer}>
    <View style={styles.topContainer}>
      <View>
        <IntroHeader />
      </View>
      <View>
        <View style={styles.IntroStaticScreen1Container}>
          <Image
            source={PNG.SLIDDERIMG3}
            style={styles.IntroStaticScreen3Img}
          />
     <Text style={styles.IntroStaticScreen1Text}><Text style={styles.IntroStaticScreen1ColorText}>{DESCRIPTION_SCREEN3TOP_PART1}</Text>{DESCRIPTION_SCREEN3TOP_PART2}</Text>
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
            source={PNG.BOTTOMNAVIMG3}
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

export default IntroStaticScreen3;
