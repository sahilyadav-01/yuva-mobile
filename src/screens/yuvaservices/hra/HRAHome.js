import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  LogBox,
  PermissionsAndroid,
  FileViewer,
  Image,
  Linking,
  Platform,
  Alert,
  ScrollView,TouchableOpacity
} from 'react-native';
import HRASectionContainer from './HRASectionContainer';
import HealthMetricCard from './HealthMetricCard';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/core';
import { reportStatusThunk } from '../../../store/reducers/Section9Slice';
import DownloadButton from '../../../components/DownloadButton';
import AlertBox from '../../../components/AlertBox';
import MessageBox from '../../../components/MessageBox';
import HealthReportSVG from '../../../components/svg/HealthReportSVG';
import Backbutton from '../../../components/Backbutton';
import RNFetchBlob from 'rn-fetch-blob';
import * as FileSystem from 'react-native-fs';
const { StorageAccessFramework } = FileSystem;
// import * as Sharing from 'expo-sharing';
import { granted } from '../../../utils/utils';
//const DOWNLOAD_REPORT = 'http://' + SERVER + ':8080/api/v1/yuva/hraPdfReport';
// import * as IntentLauncher from 'expo-intent-launcher';
import hraImg from '../../../../assets/hra_img.png';
import { date } from 'is_js';

LogBox.ignoreAllLogs();

/**
 * Download dir
 */


const HRAHome = () => {
  /**
   * Download meta data
   */

  let { chart, metrics, result, reportStatus, apiErrorMessage, reportDownload } = useSelector(
    state => state.section9,
  );

  /**
   *  Hooks
   */
  const navigation = useNavigation();
  const dispatch = useDispatch();

  /**
   *   State
   */
  const [report, setReport] = useState(false);
  const { jwt } = useSelector(state => state.auth.user);
  const [qReport, setQReport] = useState(true);
  const [message, setMessage] = useState('')

  /**
   * React Hooks
   */
  useEffect(() => {
    if (Object.keys(metrics).length != 0) {
    }
  });

  /**
   * callbacks
   */
  const checkpermission = async () => {
    if (Platform.OS === 'android') {
      downloadFile()
    } else {
      try {
        // const granted =await PermissionsAndroid.request(
        //   PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,{
        //     title:'storage permsioon reuqired',
        //     message:'app need to acess ypu sotrage'
        //   }
        // )
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
        description: 'File'
      }
    }
    config(options)
      .fetch('GET', file_Url)
      .then(res => {
        // Alert after successful downloading;
        alert('File Downloaded Successfully.');
      })

  }
  const getExtention = filename => {
    return /[.]/.exec(filename) ? /[^.]+$/.exec(filename) : undefined
  }

  const display = () => {
    if (reportStatus === null) {
      // setMessage("Fill the details first")
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
    //fetchReport();
    const timer = setInterval(() => {

      // if(reportStatus !=null && !reportStatus?.ready)
      // {
      fetchReport();
      //}
    }, 2500);
    return () => clearTimeout(timer);
  }, [])



  const disbaleAlert = () => {
    setReport(false);
  };

  const goBack = () => {
    navigation.goBack();
  };

  const goToSection1 = () => {
    navigation.navigate('section1');
  };

  return (
    <SafeAreaView>
      <View className="flex">
        <View className="flex flex-row items-center h-[60px] bg-[#1D2334] px-[0px] mt-[42px]">
          <Backbutton color="white" onPress={goBack} size={22} />
          <Text className="text-center text-white text-xl ml-[20px]">
            Health Risk Assesment
          </Text>
        </View>
        <View>
        <ScrollView contentContainerStyle={{
            paddingBottom: 300
          }}>
          {/* <View style={{boxShadow:"0px 0px 4px 4px rgba(0, 0, 0, 0.1);"}}className="h-[150px] mx-[10px] mt-[20px] rounded-[12px] bg-[#FFFFFF]"> */}
          <View
            style={{
              shadowColor: 'rgba(0, 0, 0, 0.1)',
              shadowOffset: { width: 0, height: 0 },
              shadowOpacity: 0.2,
              shadowRadius: 4,
              elevation: 4,
            }}
            className="h-[150px] mx-[10px] mt-[20px] rounded-[12px] bg-[#FFFFFF]">
            {/* wrapper */}
            <View className="flex flex-row pl-[14px] py-[18px]">
              <View className="items-center">
                <Text className="w-[180px] leading-2 text-[16px]">
                  Generate your Health Risk Assesment Today
                </Text>
                <TouchableOpacity
                  className="flex items-center justify-center h-[30px] w-[160px] bg-[#E68D36] rounded-[8px] mt-[26px]"
                  onPress={goToSection1}>
                  <Text className="text-[10px] text-white">
                    Enter your Health Parameters
                  </Text>
                </TouchableOpacity>
              </View>
              {/* SVG */}
              <View className="ml-[20px]">
                {/* <HealthReportSVG/> */}
                <Image source={hraImg} className="h-[100px] w-[130px]" />
              </View>
            </View>
            {/* <PureChart data={chart} type='bar' defaultColumnWidth={20}/> */}
          </View>

          <View>
            <DownloadButton onPress={display} />
          </View>
        
            <HRASectionContainer />
          </ScrollView>
        </View>
      </View>
      {/* <MessageBox
       head="Message"
        showDialog={report}
        message={message}
        hideDialog={disbaleAlert}
      /> */}

    </SafeAreaView>
  );
};

export default HRAHome;
