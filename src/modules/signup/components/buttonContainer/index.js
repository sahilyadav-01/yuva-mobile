import React, { useEffect } from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {ORANGE, ORANGE_GREY} from '../../../../styles/colors';
import {useSignUp} from '../../useSignUp';
import styles from './style';

const ButtonContainer = () => {
  const {buttonContainer, buttonText} = styles();
  const backgroundColor = !true ? ORANGE_GREY : ORANGE;
  const signUp = useSignUp();

  // useEffect(()=>{
  //   console.log('Nameee',);
  // },[signUp?.name])
  return (
    <>
    <TouchableOpacity
      disabled={!true}
      style={{...buttonContainer, backgroundColor}}
      onPress={() => {}}>
      <Text style={buttonText}>{'A'}</Text>
    </TouchableOpacity>
    </>
  );
};

export default ButtonContainer;
