import { useEffect } from 'react';
import { Freshchat, FreshchatConfig } from 'react-native-freshchat-sdk';
import { APP_ID, APP_KEY, DOMAIN } from './src/utils/freshChatConfig';
import SplashScreen from 'react-native-splash-screen';

export const useApp = () => {
  try {
    const freshchatConfig = new FreshchatConfig(APP_ID, APP_KEY);
    freshchatConfig.domain = DOMAIN;
    Freshchat.init(freshchatConfig);
  } catch (e) { };

  useEffect(()=> {
    SplashScreen.hide();
  }, []);
  
  return {};
};