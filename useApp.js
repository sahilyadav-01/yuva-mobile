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
import VersionCheck from 'react-native-version-check';
import {Alert, Linking} from 'react-native';
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
  const handleVersionUpdate = (latestVersion, storeUrl) => {
    Alert.alert(
      'Alert',
      `Please update the app to the latest version ${latestVersion}`,
      [
        {
          text: 'Update',
          onPress: () => {
            Linking.openURL(storeUrl);
          },
        },
      ],
      [{cancelable: false}],
    );
  };

  const checkVersionUpdate = async (currentVersion, latestVersion) => {
    if (Platform?.isIOS) {
      const latestVersionObj = {
        latestVersion,
        provider: 'appStore',
        currentVersion,
      };
      const storeUrl = await VersionCheck.getAppStoreUrl({appID: '6449449413'});
      const versionObj = await VersionCheck.needUpdate(latestVersionObj);
      if (versionObj?.isNeeded) {
        handleVersionUpdate(versionObj.latestVersion, storeUrl);
      }
    } else if (Platform?.isAndroid) {
      const resolvedLatestVersion =
        latestVersion ?? (await VersionCheck.getLatestVersion());
      const androidPackageName = VersionCheck.getPackageName();
      const currentAndroidVersion =
        currentVersion ?? VersionCheck.getCurrentVersion();
      const storeUrl = await VersionCheck.getPlayStoreUrl({
        packageName: androidPackageName,
      });
      const versionObj = await VersionCheck.needUpdate({
        currentVersion: currentAndroidVersion,
        latestVersion: resolvedLatestVersion,
      });
      if (versionObj?.isNeeded) {
        handleVersionUpdate(versionObj.latestVersion, storeUrl);
      }
    }
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
        checkVersionUpdate(),
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
