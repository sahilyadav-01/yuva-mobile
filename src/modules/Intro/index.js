import React from 'react'
import { View} from 'react-native'
import IntroStaticScreen1 from './components/IntroStaticScreen1';
import IntroStaticScreen2 from './components/IntroStaticScreen2';
import IntroStaticScreen3 from './components/IntroStaticScreen3';
import IntroStaticScreen4 from './components/IntroStaticScreen4';
import { useIntro,useFocusEffect } from './hooks/useIntro';

const Intro = () => {



  const {index, setScreen} = useIntro()
  const RenderStaticScreen = (index) => {
    switch (index) {
      case 1:
        return <IntroStaticScreen1 onNext={() => {setScreen(2)}} />
      case 2:
        return <IntroStaticScreen2 onNext={() => {setScreen(3)}} />
      case 3:
        return <IntroStaticScreen3 onNext={() => {setScreen(4)}}/>
      case 4:
        return <IntroStaticScreen4 onNext={() => {setScreen(0)}}/>

    }
  }
  return (
    <View >
    {
      RenderStaticScreen(index)
    }
    </View>
  )
}

export default Intro;
