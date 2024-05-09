import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { dispatch_addressData, dispatch_scheduleData } from '../../../../store/reducers/CheckOutSlice';
import { ADDRESS_CHECK, ALERT, CHECKOUT_SCHEDULE_NAVIGATION, PAYMENT_PAGE_NAVIGATION, TIME_CHECK } from '../constant';

export const useCartAddressList = () => {
  const dispatch = useDispatch();
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [epochTime, setEpochTime] = useState(null);
  const navigation = useNavigation();
  const { selectedAddress,addressListing} = useSelector(state => state.profile);
  const { cart } = useSelector(state => state?.cart);
  useEffect(()=>{
    const tomorrow = new Date()
      tomorrow.setDate(tomorrow.getDate() +1);
    tomorrow.setHours(7);
    tomorrow.setMinutes(0);
    tomorrow.setSeconds(0);
    setTime(tomorrow);
    setDate(tomorrow);
  },[])
  const handleDate = arg => {
    setDate(arg);
  };

  const handleTime = arg => {
    setTime(arg);
  };

  const handleDateTime = (arg) => {
    if(arg?.status)
    setEpochTime(arg?.value);
  }

  const ConfirmAddress = () => {
    const itemType = cart?.itemDtoList?.map(item=>item?.productType);
    const isProduct = !itemType?.includes('TEST') && !itemType?.includes('PACKAGE');
    const navigateTo = isProduct ? PAYMENT_PAGE_NAVIGATION : CHECKOUT_SCHEDULE_NAVIGATION;
    const addressSelected = selectedAddress?.address ?? false;
    if (!addressSelected) Alert.alert(ALERT, ADDRESS_CHECK)
    else {
      dispatch(dispatch_addressData({ selectedAddress }));
      navigation.navigate(navigateTo);
    }
  };
  
  const ConfirmDateAndTime = () => {
    if(epochTime!==null) {
      dispatch(dispatch_scheduleData(epochTime));
      navigation.navigate(PAYMENT_PAGE_NAVIGATION);
    }
    else {
      Alert.alert(ALERT, TIME_CHECK)
    }
  };

  const onAddAddress = () =>  navigation.navigate('NewAddress')

  return {
    ConfirmAddress,
    ConfirmDateAndTime,
    handleDate,
    handleTime,
    date,
    time,
    addressListing,
    handleDateTime,
    onAddAddress
  };
};
