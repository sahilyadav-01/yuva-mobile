import React from 'react';
import {SafeAreaView} from 'react-native';
import ChangePasswordScreen from '../../modules/changePassword';
import {styles} from './style';

const ChangePassword = props => {
  const {container} = styles();
  return (
    <SafeAreaView style={container}>
      <ChangePasswordScreen
        from={props?.route?.params?.from}
        hash={props?.route?.params?.hash}
        number={props?.route?.params?.number}
      />
    </SafeAreaView>
  );
};

export default ChangePassword;
