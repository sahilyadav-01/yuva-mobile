import React from 'react';
import { View, Image,  } from 'react-native';
import { styles } from '../styles';
const IntroHeader = () => {

  return (
    <View>

      <View style={styles.container}>
        <Image
          source={require('../../../../assets/intoHeaderBackgroundTop.png')}
          style={styles.headerBackgroundTopContainer}
        />

        <Image  
          source={require('../../../../assets/intoHeaderTab.png')}
          style={styles.headerTopContainer}
        />

        <View style={styles.logoContainer}>
          <Image
            source={require('../../../../assets/yuva_logo-2.png')}
            style={styles.logoImage1}
          />
          <View style={styles.logoImage2Container}>
            <Image
              source={require('../../../../assets/yuva-text-white.png')}
              style={styles.logoImage2}
              resizeMode="contain"
            />
            <Image
              source={require('../../../../assets/HEALTH_white_2.png')}
              style={styles.logoImage3}
              resizeMode="contain"
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default IntroHeader;
