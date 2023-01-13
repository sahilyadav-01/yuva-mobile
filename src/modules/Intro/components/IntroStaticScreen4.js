import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from '../styles';
import { NEXT,DESCRIPTION_SCREEN2TOP_PART1,DESCRIPTION_SCREEN2BOTTOM_PART1,DESCRIPTION_SCREEN2BOTTOM_PART2 ,DESCRIPTION_SCREEN2BOTTOM_PART3} from '../constant';
import IntroHeader from './IntroHeader';
import { PNG } from "../../../../assets";


const IntroStaticScreen4 = (props) => {
  // const navigation = useNavigation()
  const next = () => {
    // navigation.navigate("IntroStaticScreen3");
  }

  return (
    <View>
      <IntroHeader />
      <View>
        <View style={styles.IntroStaticScreen1Container}>
          <Image
            source={PNG.SLIDDERIMG4}
            style={styles.IntroStaticScreen4Img}
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
    
        <TouchableOpacity
              style={{ 
                borderRadius: 8,
                backgroundColor: "#E68D36" }}

                onPress={props.onNext}>
        
          {/* <Text style={styles.IntroStaticScreen1ColorText}>{NEXT}</Text> */}
          <Text className="text-center pt-[15px] pb-[15px] text-white">{NEXT}</Text>

        </TouchableOpacity>


      </View>


    </View>
  );
};

export default IntroStaticScreen4;
