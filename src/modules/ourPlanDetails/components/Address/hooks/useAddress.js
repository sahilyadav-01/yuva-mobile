import {useNavigation, useRoute} from '@react-navigation/native';
import {useState} from 'react';
import {Alert} from 'react-native';
import {useSelector} from 'react-redux';
import {ALERT, CHECK_OUT_SCREEN, PLEASE_CHECK_ADDRESS} from '../constants';

export const useOurPlanAddress = () => {
  const route = useRoute();
  // NOTE:rectify this if required i.e,if data from backend is changed
  const {quarterlyPrice, halfYearlyPrice, plan, yearlyFinalCost} =
    route?.params || {};
  const navigation = useNavigation();
  const [checked, setChecked] = useState(null);
  const {userAddress, selectedAddress, profile, addressListing} = useSelector(
    state => state?.profile,
  );
  const checkoutData = {
    ...selectedAddress,
    quarterlyPrice,
    halfYearlyPrice,
    yearlyFinalCost,
  };
  const AddressAdded = () => {
    if (selectedAddress?.address) {
      navigation.navigate(CHECK_OUT_SCREEN, {
        ...checkoutData,
        plan: plan ?? null,
        number: profile?.data?.number ?? '',
      });
    } else {
      Alert.alert(ALERT, PLEASE_CHECK_ADDRESS);
    }
  };

  return {
    userAddress,
    setChecked,
    checked,
    AddressAdded,
    addressListing,
  };
};
