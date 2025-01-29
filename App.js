import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import IntroStackNav from './src/navigation/IntroStackNav';
import {Provider} from 'react-redux';
import {Provider as PaperProvider} from 'react-native-paper';
import store from './src/store/Store';
import {useApp} from './useApp';
import {View} from 'react-native';
import {StatusBar} from 'react-native';
import {getIosStatusBarHeight, getPlatform} from './src/utils/utils';
import {MARINER} from './src/styles/colors';
import YuvaService from './src/network/yuvaService';
import LoaderContext from './src/components/LoaderContext';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
const yuvaService = new YuvaService();
export default function App() {
  const {showContent} = useApp();
  const [height, setHeight] = useState(0);
  const [renderContent, setRenderContent] = useState(false);
  const {isIOS, isAndroid} = getPlatform();
  useEffect(() => {
    getIosStatusBarHeight()
      .then(height => {
        setHeight(height);
        setRenderContent(true);
      })
      .catch(() => {
        setHeight(0);
        setRenderContent(true);
      });
  }, []);
  const RootNavigator = () => {
    return (
      showContent && (
        <NavigationContainer>
          <IntroStackNav />
        </NavigationContainer>
      )
    );
  };
  const Content = () => {
    if (isIOS && renderContent) {
      return (
        <View style={{flex: 1}}>
          <View style={{backgroundColor: MARINER, height}}>
            <StatusBar />
          </View>
          <RootNavigator />
        </View>
      );
    } else if (isAndroid) {
      return (
        <View style={{flex: 1}}>
          <StatusBar backgroundColor={MARINER} />
          <RootNavigator />
        </View>
      );
    }
  };
  return (
    <GestureHandlerRootView>
    <Provider store={store}>
      <PaperProvider>
        <LoaderContext />
        <Content />
      </PaperProvider>
    </Provider>
    </GestureHandlerRootView>
  );
}

export {yuvaService as YuvaService};
