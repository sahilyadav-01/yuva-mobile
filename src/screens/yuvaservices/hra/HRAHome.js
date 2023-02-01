import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView, Image, Alert, ScrollView} from 'react-native';
import HRASectionContainer from './HRASectionContainer';
import Header from '../../../components/Header';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/core';
import {reportStatusThunk} from '../../../store/reducers/Section9Slice';
import DownloadButton from '../../../components/DownloadButton';
import {checkPermission} from '../../../utils/utils';
import hraImg from '../../../../assets/hra_img.png';

const HRAHome = () => {
  let {metrics, reportStatus, reportDownload} = useSelector(
    state => state.section9,
  );

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [report, setReport] = useState(false);
  const {
    loggedIn,
  } = useSelector(state => state.auth);
  const [message, setMessage] = useState('');
  useEffect(() => {
    if (Object.keys(metrics).length != 0) {
    }
  });

  const onDisplay = () => {
    if (reportStatus === null) {
      Alert.alert('Alert', 'Fill the details first', [
        {
          text: 'Ok',
        },
      ]);
      fetchReport();
    }
    if (reportStatus?.ready != null && !reportStatus.ready) {
      setMessage('Your Report is being generated, Please wait ..');
      Alert.alert('Alert', 'Your Report is being generated, Please wait ..', [
        {
          text: 'Ok',
        },
      ]);
      fetchReport();
    }
    if (reportStatus?.ready != null && reportStatus.ready) {
      checkPermission(reportDownload, 'reportPdf.pdf');
    } else {
      setReport(true);
    }
  };
  const fetchReport = () => {

    dispatch(reportStatusThunk());
  };
  useEffect(() => {
    const timer = setInterval(() => {
      fetchReport();
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const onPressRightIcon = () => {
    if (loggedIn !== 'loggedIn') {
      navigation.navigate('LoginScreen');
    }
    //Drawer logic to be implemented in the else block here
  };
  return (
    <SafeAreaView>
      <Header
        isLoggedIn={loggedIn === 'loggedIn'}
        onPressRightIcon={onPressRightIcon}
      />
      <View className="flex">
        <View>
          <ScrollView
            contentContainerStyle={{
              paddingBottom: 400,
            }}>
            <View
              style={{
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowOffset: {width: 0, height: 0},
                shadowOpacity: 0.2,
                shadowRadius: 4,
                elevation: 4,
                marginTop: 24,
              }}
              className="h-[135px] mx-[14px] mt-[20px] rounded-[12px] bg-[#FFFFFF]">
              <View className="flex flex-row pl-[14px] py-[18px]">
                <View className="items-center">
                  <Text
                    style={{
                      color: '#1D2334',
                      fontWeight: 'bold',
                      marginTop: 30,
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
              <DownloadButton onPress={onDisplay} />
            </View>
            <HRASectionContainer />
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HRAHome;
