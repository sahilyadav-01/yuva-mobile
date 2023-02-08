import React from 'react';
import {SafeAreaView} from 'react-native';
import ChangePasswordScreen from '../../modules/changePassword';
import {FLASH_WHITE} from '../../styles/colors';

const ChangePassword = props => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: FLASH_WHITE}}>
      <ChangePasswordScreen from={props?.route?.params?.from} hash={props?.route?.params?.hash} number={props?.route?.params?.number} />
    </SafeAreaView>
  );
};

export default ChangePassword;
