import { useEffect, useState } from 'react';
import { Freshchat, FreshchatConfig } from 'react-native-freshchat-sdk';
import { APP_ID, APP_KEY, DOMAIN } from './src/utils/freshChatConfig';
import SplashScreen from 'react-native-splash-screen';
import VersionCheck from 'react-native-version-check';
import { Alert, Linking } from 'react-native';
import { getPlatform } from './src/utils/utils';

export const useApp = () => {
  const Platform = getPlatform();
  const [showContent, setShowContent] = useState(false);
  try {
    const freshchatConfig = new FreshchatConfig(APP_ID, APP_KEY);
    freshchatConfig.domain = DOMAIN;
    Freshchat.init(freshchatConfig);
  } catch (e) { };

  const handleVersionUpdate = (latestVersion,storeUrl) => {
    Alert.alert('Alert',`Please update the app to the latest version ${latestVersion}`,[{text:'Update',onPress:()=>{
      Linking.openURL(storeUrl);
    }}],[{cancelable: false}])
  }

  const checkVersionUpdate = (currentVersion,latestVersion) => {
    if(Platform?.isIOS) {
      const latestVersionObj = {latestVersion,provider:'appStore',currentVersion}
      VersionCheck.getAppStoreUrl({appID:'6449449413'}).then(storeUrl=>{
        VersionCheck.needUpdate(latestVersionObj).then(versionObj=> {
          if(versionObj && versionObj?.isNeeded) handleVersionUpdate(versionObj?.latestVersion,storeUrl)
          else setShowContent(true);
        })
      })
    }
    else if (Platform?.isAndroid) {
      VersionCheck.needUpdate().then((obj)=>{
        if(obj && obj?.isNeeded) handleVersionUpdate(obj?.latestVersion,obj?.storeUrl)
      })
    }
  }

  useEffect(()=> {
    if(Platform?.isIOS){
    const packageName = VersionCheck?.getPackageName();
    const latestVersion = VersionCheck?.getCurrentVersion();
   VersionCheck?.getCountry().then(countryCode=>{
    VersionCheck.getLatestVersion({provider:()=>fetch(`https://itunes.apple.com/${countryCode}/lookup?bundleId=${packageName}`)
    .then(r => r.json())
    .then((result) => checkVersionUpdate(result?.results[0]?.version,latestVersion))})
   })
    }
    else checkVersionUpdate()
    SplashScreen.hide();
  }, []);
  
  return {showContent};
};