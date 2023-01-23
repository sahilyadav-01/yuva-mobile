import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import {SVG} from '../../../assets';
import IntroStaticSection1 from './components/IntroStaticSection1';
import IntroStaticSection2 from './components/IntroStaticSection2';
import IntroStaticSection3 from './components/IntroStaticSection3';
import IntroStaticSection4 from './components/IntroStaticSection4';
import { useIntro } from './hooks/useIntro';
import { styles } from './styles';
import Header from '../../components/Header';
import SlideIndicator from '../../components/SlideIndicator';
import { LETS_START, NEXT } from './constant';
import CardButton from '../../components/CardButton';

const Intro = () => {

  const {index, onNext, setScreen} = useIntro();
  const renderStaticSection = (index) => {
    switch (index) {
      case 0:
        return <IntroStaticSection1 />
      case 1:
        return <IntroStaticSection2 />
      case 2:
        return <IntroStaticSection3 />
      case 3:
        return <IntroStaticSection4 />

    }
  }
  
  return (
    <View style={styles.screenContainer}>
      <Header />
      <SVG.BackgroundImage style={styles.imageBackground} />
      {
        renderStaticSection(index)
      }
      <View style={styles.line} />
      <View style={styles.bottomStyle}>
        { (index !== 3) ?
          <>
            <SlideIndicator count={4} activeIndex={index}/>
            <TouchableOpacity style={styles.bottomContaierText}
              onPress={onNext}>
              <Text style={styles.IntroStaticScreen1ColorText}>{NEXT}</Text>
            </TouchableOpacity>
          </>
          : <CardButton text={LETS_START} onPress={setScreen} containerStyle={styles.buttonStyle} textStyle={styles.buttonText} />
        }
      </View>
    </View>
  )
}

export default Intro;
