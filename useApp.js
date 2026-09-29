import {useEffect, useState} from 'react';
import {
  AuthorizationStatus,
  getMessaging,
  getToken,
  hasPermission,
  requestPermission,
} from '@react-native-firebase/messaging';
import {
  Freshchat,
  FreshchatConfig,
} from 'react-native-freshchat-sdk';
import {PermissionsAndroid, Platform as AndroidPlatform} from 'react-native';
import store from './src/store/Store';
import {APP_ID, APP_KEY, DOMAIN} from './src/utils/freshChatConfig';
import {getPlatform} from './src/utils/utils';
import {getExistingUser} from './src/store/LocalStore';
import {setPermission} from './src/store/reducers/LocationSlice';

export const useApp = () => {
  const Platform = getPlatform();
  const [showContent] = useState(true);
  const [fcmToken, setFcmToken] = useState(null);

  const initializeToken = async () => {
    const token = await getToken(getMessaging());
    setFcmToken(token);
  };

  const handleMessagingPermission = async () => {
    try {
      const existingUser = await getExistingUser();
      if (
        (Platform.isAndroid && AndroidPlatform.Version < 33) ||
        Platform.isIOS
      ) {
        let permission = await hasPermission(getMessaging());
        if (
          (permission ===
            AuthorizationStatus.NOT_DETERMINED ||
            permission === AuthorizationStatus.PROVISIONAL) &&
          !existingUser
        ) {
          await requestPermission(getMessaging());
          permission = await hasPermission(getMessaging());
        }
        await initializeToken();
      } else {
        let notificationPermission = await PermissionsAndroid.check(
          'android.permission.POST_NOTIFICATIONS',
        );
        if (!notificationPermission && !existingUser) {
          await PermissionsAndroid.request(
            'android.permission.POST_NOTIFICATIONS',
          );
          notificationPermission = await PermissionsAndroid.check(
            'android.permission.POST_NOTIFICATIONS',
          );
        }
        await initializeToken();
      }
    } catch (error) {}
  };

  const initializeFreshchat = async () => {
    try {
      const freshchatConfig = new FreshchatConfig(APP_ID, APP_KEY);
      freshchatConfig.domain = DOMAIN;
      await Freshchat.init(freshchatConfig);
    } catch (e) {}
  };
  const handleLocationPermission = async () => {
    if (Platform.isAndroid && AndroidPlatform.Version > 23) {
      const status = await PermissionsAndroid.request(
        'android.permission.ACCESS_FINE_LOCATION',
        {
          title: 'Request to access geo-location',
          message:
            'Permission to access your geo-location is used to provide services specific to your location',
          buttonPositive: 'Yes',
        },
      );
      store.dispatch(setPermission(status === 'granted'));
    }
  };

  useEffect(() => {
    const initialize = async () => {
      const tasks = [
        handleMessagingPermission(),
        handleLocationPermission(),
      ];
      await Promise.allSettled(tasks);
    };

    initialize();
  }, []);

  useEffect(() => {
    if (typeof fcmToken === 'string') {
      initializeFreshchat();
    }
  }, [fcmToken]);

  return {showContent};
};
