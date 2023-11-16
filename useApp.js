import {useEffect, useState} from 'react';
import firebaseMessaging from '@react-native-firebase/messaging';
import {Freshchat, FreshchatConfig} from 'react-native-freshchat-sdk';
import {PermissionsAndroid, Platform as AndroidPlatform} from 'react-native';
import {APP_ID, APP_KEY, DOMAIN} from './src/utils/freshChatConfig';
import SplashScreen from 'react-native-splash-screen';
import VersionCheck from 'react-native-version-check';
import {Alert, Linking} from 'react-native';
import {getPlatform} from './src/utils/utils';
import store from './src/store/Store';
import {setFcmToken} from './src/store/reducers/NotificationSlice';
import { getExistingUser } from './src/store/LocalStore';

export const useApp = () => {
  const Platform = getPlatform();
  const checkVersion = true;
  const [showContent, setShowContent] = useState(!checkVersion);

  const initializeToken = async status => {
    if (status) {
      const token = await firebaseMessaging().getToken();
      console.log('Token',token);
      store.dispatch(setFcmToken({status, token}));
    } else store.dispatch(setFcmToken({status: permission, token: null}));
  };

  const handleMessagingPermission = async () => {
    try {
      const existingUser = await getExistingUser();
      if (
        (Platform.isAndroid && AndroidPlatform.Version < 33) ||
        Platform.isIOS
      ) {
        let permission = await firebaseMessaging().hasPermission();
        if (
          (permission === firebaseMessaging.AuthorizationStatus.NOT_DETERMINED ||
          permission === firebaseMessaging.AuthorizationStatus.PROVISIONAL) && !existingUser
        ) {
          await firebaseMessaging().requestPermission();
          permission = await firebaseMessaging().hasPermission();
        }
        initializeToken(
          permission === firebaseMessaging.AuthorizationStatus.AUTHORIZED,
        );
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
        initializeToken(notificationPermission);
      }
    } catch (error) {}
  };

  const initializeFreshchat = () => {
    try {
      const freshchatConfig = new FreshchatConfig(APP_ID, APP_KEY);
      freshchatConfig.domain = DOMAIN;
      Freshchat.init(freshchatConfig);
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

  const checkVersionUpdate = (currentVersion, latestVersion) => {
    if (Platform?.isIOS) {
      const latestVersionObj = {
        latestVersion,
        provider: 'appStore',
        currentVersion,
      };
      VersionCheck.getAppStoreUrl({appID: '6449449413'}).then(storeUrl => {
        VersionCheck.needUpdate(latestVersionObj).then(versionObj => {
          if (versionObj && versionObj?.isNeeded)
            handleVersionUpdate(versionObj?.latestVersion, storeUrl);
          else setShowContent(true);
        });
      });
    } else if (Platform?.isAndroid) {
      VersionCheck.getLatestVersion().then(latestVersion => {
        const androidPackageName = VersionCheck?.getPackageName();
        const currentAndroidVersion = VersionCheck.getCurrentVersion();
        VersionCheck?.getPlayStoreUrl({packageName: androidPackageName}).then(
          storeUrl => {
            VersionCheck.needUpdate({
              currentVersion: currentAndroidVersion,
              latestVersion,
            }).then(obj => {
              if (obj && obj?.isNeeded)
                handleVersionUpdate(obj?.latestVersion, storeUrl);
              else setShowContent(true);
            });
          },
        );
      });
    }
  };

  useEffect(() => {
    if (Platform?.isIOS && checkVersion) {
      const packageName = VersionCheck?.getPackageName();
      const currentIosVersion = VersionCheck?.getCurrentVersion();
      VersionCheck?.getCountry().then(countryCode => {
        VersionCheck.getLatestVersion({
          provider: () =>
            fetch(
              `https://itunes.apple.com/${countryCode}/lookup?bundleId=${packageName}`,
            )
              .then(r => r.json())
              .then(result =>
                checkVersionUpdate(
                  currentIosVersion,
                  result?.results[0]?.version,
                ),
              ),
        });
      });
    } else if (Platform?.isAndroid && checkVersion) checkVersionUpdate();
    SplashScreen.hide();
    handleMessagingPermission().finally(() => {
      initializeFreshchat();
    });
  }, []);

  return {showContent};
};