import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {PNG} from '../../../assets';
import IntroStaticSection1 from './components/IntroStaticSection1';
import IntroStaticSection2 from './components/IntroStaticSection2';
import IntroStaticSection3 from './components/IntroStaticSection3';
import IntroStaticSection4 from './components/IntroStaticSection4';
import {useIntro} from './hooks/useIntro';
import {styles} from './styles';
import SlideIndicator from '../../components/SlideIndicator';
import {LETS_START, NEXT} from './constant';
import CardButton from '../../components/CardButton';

const Intro = () => {
  const {index, onNext, setScreen} = useIntro();
  const renderStaticSection = index => {
    switch (index) {
      case 0:
        return <IntroStaticSection1 />;
      case 1:
        return <IntroStaticSection2 />;
      case 2:
        return <IntroStaticSection3 />;
      case 3:
        return <IntroStaticSection4 />;
      default:
        return null;
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.firstContainerStyle}>
        <ImageBackground
          source={PNG.TopSplashScreenBackgroundImage}
          style={styles.imageBackgroundStyle}
          resizeMode="cover"
        />
      </View>
      <View style={styles.secondContainerStyle}>
        {renderStaticSection(index)}
      </View>
      <View style={styles.thirdContainerStyle}>
        <ImageBackground
          source={PNG.BottomSplashScreenBackgroundImage}
          style={styles.imageBackgroundStyle}
          resizeMode="cover"
        />
      </View>
      <View style={styles.line} />
      <View style={styles.fourthContainerStyle}>
        {index !== 3 ? (
          <View style={styles.fourthInnerContainerStyle}>
            <SlideIndicator count={4} activeIndex={index} />
            <TouchableOpacity
              style={styles.fourthContainerText}
              onPress={onNext}>
              <Text style={styles.IntroStaticScreen1ColorText}>{NEXT}</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <CardButton
            text={LETS_START}
            onPress={setScreen}
            containerStyle={styles.buttonStyle}
            textStyle={styles.buttonText}
          />
        )}
      </View>
    </ScrollView>
  );
};

export default Intro;
