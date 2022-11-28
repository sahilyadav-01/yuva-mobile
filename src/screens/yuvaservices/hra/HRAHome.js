import React, {useEffect, useState} from 'react';
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
} from 'react-native';
import HRASectionContainer from './HRASectionContainer';
import HealthMetricCard from './HealthMetricCard';
import PureChart from 'react-native-pure-chart';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/core';
import {reportStatusThunk} from '../../../store/reducers/Section9Slice';
import DownloadButton from '../../../components/DownloadButton';
import AlertBox from '../../../components/AlertBox';
import MessageBox from '../../../components/MessageBox';
import HealthReportSVG from '../../../components/svg/HealthReportSVG';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Backbutton from '../../../components/Backbutton';

import * as FileSystem from 'react-native-fs';
const {StorageAccessFramework} = FileSystem;
// import * as Sharing from 'expo-sharing';
import {SERVER} from '../../../utils/utils';
const DOWNLOAD_REPORT = 'http://' + SERVER + ':8080/api/v1/yuva/hraPdfReport';
// import * as IntentLauncher from 'expo-intent-launcher';
import hraImg from '../../../../assets/hra_img.png';

LogBox.ignoreAllLogs();

/**
 * Download dir
 */

const downloadCallback = () => {
  //alert("download  finished")
};
const ensureDirAsync = async (dir, intermediates = true) => {
  const props = await FileSystem.getInfoAsync(dir);
  if (props.exist && props.isDirectory) {
    return props;
  }
  let _ = await FileSystem.makeDirectoryAsync(dir, {intermediates});
  return await ensureDirAsync(dir, intermediates);
};

const downloadFile = async (fileUrl, downloadPath, jwt) => {
  if (Platform.OS == 'android') {
    const dir = ensureDirAsync(downloadPath);
  }

  //let fileName = fileUrl.split('Reports/')[1];
  let fileName = 'report2.pdf';
  //alert(fileName)
  const downloadResumable = FileSystem.createDownloadResumable(
    fileUrl,
    downloadPath + fileName,
    {
      headers: {Authorization: 'Bearer ' + jwt},
    },
    downloadCallback,
  );

  try {
    const {uri} = await downloadResumable.downloadAsync();
    if (Platform.OS == 'android')
      //saveAndroidFile(uri, fileName)
      save2(uri);
    else saveIosFile(uri);
  } catch (e) {
    console.error('download error:', e);
  }
};

const save2 = async fileUri => {
  // const shareResult = await Sharing.shareAsync(fileUri, {
  //     mimeType: 'application/pdf',
  //     dialogTitle: 'Open file',
  //     UTI: 'com.adobe.pdf',
  //  });
  //   try {
  //     const cUri = await FileSystem.getContentUriAsync(fileUri);
  //         await IntentLauncher.startActivityAsync('android.intent.action.VIEW', {
  //           data: cUri,
  //           flags: 1,
  //           type: 'application/pdf',
  //         });
  //   } catch (e) {
  //   }
};
const saveAndroidFile = async (fileUri, fileName = 'File') => {
  try {
    const fileString = await FileSystem.readAsStringAsync(fileUri, {
      encoding: FileSystem.EncodingType.Base64,
    });

    const permissions =
      await StorageAccessFramework.requestDirectoryPermissionsAsync();
    if (!permissions.granted) {
      return;
    }

    try {
      await StorageAccessFramework.createFileAsync(
        permissions.directoryUri,
        fileName,
        'application/pdf',
      )
        .then(async uri => {
          await FileSystem.writeAsStringAsync(uri, fileString, {
            encoding: FileSystem.EncodingType.Base64,
          });
          //   alert('Report Downloaded Successfully');
        })
        .catch(e => {});
    } catch (e) {
      throw new Error(e);
    }
  } catch (err) {}
};

const saveIosFile = async fileUri => {
  // your ios code
  // i use expo share module to save ios file
  const UTI = 'public.item';
  //   const shareResult = await Sharing.shareAsync(fileUri, {UTI});
};

const HRAHome = () => {
  /**
   * Download meta data
   */
  const [downloadProgress, setDownloadProgress] = useState();
  const downloadPath =
    FileSystem.documentDirectory + (Platform.OS == 'android' ? '' : '');

  let {chart, metrics, result, reportStatus,apiErrorMessage} = useSelector(
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
  const {jwt} = useSelector(state => state.auth.user);
  const [qReport, setQReport] = useState(true);
  const [message,setMessage]=useState('')

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
  const display = () => {
    if (reportStatus === null  ) {  
      setMessage("Fill the details first")
      fetchReport();
    }
    if(reportStatus?.ready !=null && !reportStatus.ready){
      setMessage("Your Report is being generated, Please wait ..")
      fetchReport()
    }
    if (reportStatus?.ready !=null && reportStatus.ready) {
      downloadFile(DOWNLOAD_REPORT, downloadPath, jwt);
    } 
    else{
     // setMessage(apiErrorMessage)
      setReport(true);
      
    }
  };

  const fetchReport = () => {

    dispatch(reportStatusThunk({jwt})).then(() => {});
  };
useEffect(()=>{
 const timer= setInterval(() => {
 
    fetchReport()

  },2000)

return () => clearTimeout(timer);
},[])



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
        <View className="flex flex-row items-center h-[60px] bg-[#1D2334] px-[10px] mt-[20px]">
          <Backbutton color="white" onPress={goBack} size={22} />
          <Text className="text-center text-white text-xl ml-[20px]">
            Health Risk Assesment
          </Text>
        </View>
        {/* <View style={{boxShadow:"0px 0px 4px 4px rgba(0, 0, 0, 0.1);"}}className="h-[150px] mx-[10px] mt-[20px] rounded-[12px] bg-[#FFFFFF]"> */}
        <View
          style={{
            shadowColor: 'rgba(0, 0, 0, 0.1)',
            shadowOffset: {width: 0, height: 0},
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

        {/* Risk indicators
                <View style={{backgroundColor:"#f5f9fa"}} className="px-2 py-3 shadow-2xl mx-[30px] mt-[20px] rounded border-b-2">
                    <View className="flex-row h-[80px] justify-between">

                        <HealthMetricCard key = "SCORE" metric={metrics} label="Health Score" color="bg-green-200" borderColor="border-green-500" metricColor="text-green-700"/>
                        <HealthMetricCard key = "BMI" metric={metrics} label="BMI" color="bg-red-200" borderColor="border-red-500" metricColor="text-red-700"/>
                        <HealthMetricCard key = "CANCER" metric={metrics} label="Diabetes Risk" color="bg-red-200" borderColor="border-red-500" metricColor="text-red-700"/>
                        <HealthMetricCard key = "DIABETES" metric={metrics} label="Cancer Risk" color="bg-red-200" borderColor="border-red-500" metricColor="text-red-700"/>
                    </View>
                </View> */}
        <View>
          <DownloadButton onPress={display} />
        </View>
        <HRASectionContainer />
      </View>
      <MessageBox
        showDialog={report}
        hideDialog={disbaleAlert}
       //message="Your Report is being generated, Please wait .."
       message={message}
      />
    </SafeAreaView>
  );
};

export default HRAHome;
