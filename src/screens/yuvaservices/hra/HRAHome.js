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
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/core';
import { reportStatusThunk } from '../../../store/reducers/Section9Slice';
import DownloadButton from '../../../components/DownloadButton';
import Backbutton from '../../../components/Backbutton';
import { checkPermission } from '../../../utils/utils';
import hraImg from '../../../../assets/hra_img.png';
import { date } from 'is_js';

LogBox.ignoreAllLogs();


const HRAHome = () => {


  let { chart, metrics, result, reportStatus, apiErrorMessage, reportDownload } = useSelector(
    state => state.section9,
  );

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [report, setReport] = useState(false);
  const { jwt } = useSelector(state => state.auth.user);
  const [message, setMessage] = useState('')

  useEffect(() => {
    if (Object.keys(metrics).length != 0) {
    }
  });

  const onDisplay = () => {
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

      checkPermission(reportDownload,'reportPdf.pdf');

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

  const goBack = () => {
    navigation.goBack();
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
            paddingBottom: 400
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
            className="h-[135px] mx-[10px] mt-[20px] rounded-[12px] bg-[#FFFFFF]">
            {/* wrapper */}
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
              {/* SVG */}
              <View className="ml-[20px]">
                {/* <HealthReportSVG/> */}
                <Image source={hraImg} className="h-[100px] w-[130px]" />
              </View>
            </View>
            {/* <PureChart data={chart} type='bar' defaultColumnWidth={20}/> */}
          </View>

          <View>
            <DownloadButton onPress={onDisplay} />
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
