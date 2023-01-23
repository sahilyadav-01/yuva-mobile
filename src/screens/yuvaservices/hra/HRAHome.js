import React, { useEffect } from 'react';
import {View,Text,SafeAreaView,LogBox,PermissionsAndroid,Image,Platform,Alert,ScrollView,} from 'react-native';
import HRASectionContainer from './HRASectionContainer';
import Header from '../../../components/Header';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/core';
import { reportStatusThunk } from '../../../store/reducers/Section9Slice';
import DownloadButton from '../../../components/DownloadButton';
import RNFetchBlob from 'rn-fetch-blob';
import * as FileSystem from 'react-native-fs';
const { StorageAccessFramework } = FileSystem;
import { granted } from '../../../utils/utils';
import hraImg from '../../../../assets/hra_img.png';

LogBox.ignoreAllLogs();

const HRAHome = () => {

  let { metrics, reportStatus, reportDownload } = useSelector(
    state => state.section9,
  );
 
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const {user: {jwt},loggedIn,} = useSelector(state => state.auth);

  useEffect(() => {
    if (Object.keys(metrics).length != 0) {
    }
  });

  const checkpermission = async () => {
    if (Platform.OS === 'android') {
      downloadFile()
    } else {
      try {
        granted();
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          downloadFile();
        }
      } catch (error) {
      }
    }
  }
  const downloadFile = () => {
    let date = new Date()
    let file_Url = reportDownload;
    let ext = getExtention(file_Url)
    ext = 'reportpdf.' + ext[0]
    const { config, fs } = RNFetchBlob
    let DownloadDir = fs.dirs.DownloadDir;
    let options = {
      fileCache: true,
      addAndroidDownloads: {
        useDownloadManager: true,
        notification: true,
        path: DownloadDir + '/foldername/' + ext,
        description: 'File',
        mime: 'application/pdf',
        showNotification: true,
      }
    }
    config(options)
      .fetch('GET', file_Url)
      .then(res => {
        alert('File Downloaded Successfully.');
      })

  }
  const getExtention = filename => {
    return /[.]/.exec(filename) ? /[^.]+$/.exec(filename) : undefined
  }

  const display = () => {
    if (reportStatus === null) {
      Alert.alert("Alert", "Fill the details first", [{
        text: "Ok",
      }])
      fetchReport();
    }
    if (reportStatus?.ready != null && !reportStatus.ready) {
      setMessage("Your Report is being generated, Please wait ..")
      Alert.alert("Alert", "Your Report is being generated, Please wait ..", [{
        text: "Ok",
      }])
      fetchReport()
    }
    if (reportStatus?.ready != null && reportStatus.ready) {
      checkpermission();
    }
    else {
      setReport(true);
    }
  };
  const fetchReport = () => {
    dispatch(reportStatusThunk({ jwt })).then(() => { });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      fetchReport();
    }, 2500);
    return () => clearTimeout(timer);
  }, [])

  const onPressRightIcon = () => {
    if (loggedIn !== 'loggedIn') {
      navigation.navigate('LoginScreen');
    } else {
      //The logic for opening the drawer should be added here
    }
  };
  return (
    <SafeAreaView>
       <Header 
           isLoggedIn={loggedIn === 'loggedIn'}
           onPressRightIcon={onPressRightIcon}/>
      <View className="flex">
        <View>
        <ScrollView contentContainerStyle={{
            paddingBottom: 400,
        
          }}>
          <View
            style={{
              shadowColor: 'rgba(0, 0, 0, 0.1)',
              shadowOffset: { width: 0, height: 0 },
              shadowOpacity: 0.2,
              shadowRadius: 4,
              elevation: 4,
              marginTop: 24
            }}
            className="h-[135px] mx-[14px] mt-[20px] rounded-[12px] bg-[#FFFFFF]">
            <View className="flex flex-row pl-[14px] py-[18px]">
              <View className="items-center">
                <Text 
                 style={{
                  color: '#1D2334',
                  fontWeight: 'bold',
                  marginTop: 30
              }}
                  className="h-[100px] w-[180px] leading-2 text-[15px]">
                  Generate your Health Risk Assement report today.
                </Text>
              </View>
              <View className="ml-[20px]">
                <Image source={hraImg} className="h-[100px] w-[130px]" />
              </View>
            </View>
          </View>
          <View className="mx-[14px]">
            <DownloadButton onPress={display} />
          </View >
            <HRASectionContainer />
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HRAHome;