import React from 'react';
import {SafeAreaView} from 'react-native';
import {styles} from '../../../styles';
import Doctor from '../../../../modules/doctor';
import {useIsFocused} from '@react-navigation/native';
import {useEffect} from 'react';
import DoctorSlice, {
  setTabBarVisible,
} from '../../../../store/reducers/DoctorSlice';
import {useDispatch} from 'react-redux';

const DoctorScreen = props => {
  const focused = useIsFocused();
  const dispatch = useDispatch();
  useEffect(() => {
    if (props.navigation.isFocused()) {
      dispatch(setTabBarVisible(false));
    } else if (!props.navigation.isFocused()) {
      dispatch(setTabBarVisible(true));
    }
  }, [focused]);
  return (
    <SafeAreaView style={styles.container}>
      <Doctor />
    </SafeAreaView>
  );
};

export default DoctorScreen;
