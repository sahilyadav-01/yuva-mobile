import {useEffect} from 'react';
import {BackHandler} from 'react-native';

export const usePaymentStatus = () => {
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => true);
  }, []);
};
