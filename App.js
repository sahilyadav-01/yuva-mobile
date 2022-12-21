import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import IntroStackNav from './src/navigation/IntroStackNav';
import { Provider } from 'react-redux';
import {
  Provider as PaperProvider,
} from 'react-native-paper';
import store from './src/store/Store';
import { Freshchat, FreshchatConfig } from 'react-native-freshchat-sdk';
import { APP_ID, APP_KEY, DOMAIN } from './src/utils/freshChatConfig';

export default function App() {
  try {
    const freshchatConfig = new FreshchatConfig(APP_ID, APP_KEY);
    freshchatConfig.domain = DOMAIN;
    Freshchat.init(freshchatConfig);
  } catch (e) { };

  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <IntroStackNav />
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
}
