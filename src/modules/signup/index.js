import React from 'react';
import {KeyboardAvoidingView, ScrollView, View} from 'react-native';
import SignUpCard from './components/signUpCard';
import {useSignUp} from './useSignUp';
import { getPlatform } from '../../utils/utils';
import { styles } from './style';

const SignUp = ({from}) => {
  const {name} = useSignUp();
  const style= styles();
  const Container = getPlatform().isIOS ? KeyboardAvoidingView : View;
  return (
    <Container behavior='padding' style={style.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
        nestedScrollEnabled={true}
        keyboardShouldPersistTaps="handled">
        <SignUpCard name={name} from={from} />
      </ScrollView>
    </Container>
  );
};
export default SignUp;
