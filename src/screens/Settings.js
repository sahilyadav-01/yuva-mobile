import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {useSelector, useDispatch} from 'react-redux';
import {logoutThunk} from '../store/reducers/AuthSlice';
import {resetAppointments} from '../store/reducers/AppointmentSlice';

const Settings = () => {
  const [isLoggedOut, setIsLoggedOut] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const loggedIn = useSelector(state => state.auth.loggedIn);

  const logoff = () => {
    setIsLoggedOut(true);
    dispatch(logoutThunk());
    dispatch(resetAppointments());
  };

  useEffect(() => {
    if ((loggedIn === 'notLoggedIn' || loggedIn === 'init') && isLoggedOut) {
      navigation.navigate('Home', {prevScreen: 'Home'});
    }
  }, [loggedIn, isLoggedOut]);

  return (
    <View className="flex h-full justify-center items-center">
      <TouchableOpacity
        onPress={logoff}
        className="flex justify-center w-[100px] h-[40px] bg-gray-300 rounded">
        <Text className="text-center">Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Settings;
