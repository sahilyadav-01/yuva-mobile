import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {Alert} from 'react-native';
import {TERMS_CONDITION} from '../constant';
import {setTermsAndCondtionChecked} from '../../../../store/reducers/CartSlice';
import { changePaymentMethod } from '../../../../store/reducers/PaymentSlice';

export const usePaymentReconfirm = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  const {
    termsAndCondtionChecked,
    cart: {itemDtoList},
    apiErrorMessage
  } = useSelector(state => state.cart);
  const {cod} = useSelector(state => state.payment);
  const {scheduleDate, addressData, relationData, processingCharge} =
    useSelector(state => state.checkOut);
  const { user } = useSelector(state => state.auth);
  const {selectedCity,userDetails} = useSelector(state => state.profile);
  const itemType = itemDtoList?.map(item => item?.productType);
  const isProduct =
    !itemType?.includes('TEST') && !itemType?.includes('PACKAGE');

  const fetchProductId = type => {
    const itemType = itemDtoList.filter(item => item?.productType === type);
    const productIds = itemType.map(item => item?.productId);
    return productIds;
  };

  const onCheckboxPress = check => {
    setChecked(!check);
    dispatch(setTermsAndCondtionChecked(!check));
  };

  const onCodPress = () => {dispatch(changePaymentMethod(true));}

  const onOnlinePress = () => {dispatch(changePaymentMethod(false));}

  const onPayPress = () => {
    const {address, contact, pincode, away} = {
      address: addressData?.address ?? '',
      contact: addressData?.contact ?? '',
      pincode: addressData?.pincode ?? '',
      away: addressData?.away ?? false,
    };
    const {name, age, gender} = {
      name: relationData?.name ?? '',
      age: relationData?.age ?? '',
      gender: relationData?.gender ?? null,
    };
    const myself = relationData?.id === null;
    const isRelationValid = (name && age && gender) || myself;
    const isAddressValid = address && contact && pincode;
    const isScheduleValid = scheduleDate ?? '';
    const isBooking = isScheduleValid && isRelationValid;
    const timeSlot = !isProduct ? scheduleDate : undefined;

    if (!termsAndCondtionChecked) Alert.alert('Alert', TERMS_CONDITION);
    else if (isAddressValid && (isProduct || isBooking)) {
      const packageUuid = fetchProductId('PACKAGE');
      const testId = fetchProductId('TEST');
      const selfDetails = {age: 0, name:true ? null : user?.name, gender: (false && userDetails?.gender) ? userDetails?.gender?.toUpperCase() : null};
      const relationDetails = {name, age: parseInt(age), gender};
      const details = myself ? selfDetails : relationDetails;
      const paymentProps = {
        ...details,
        plan: false,
        bookingRequestDto: {
          address,
          away: away === 'true' ? true : false,
          cityId: selectedCity,
          contactNumber: contact,
          packageUuid,
          pinCode: pincode,
          plan: false,
          programOrPlanUuid: null,
          relationId: null,
          testId,
          timeSlot,
        },
        subscriptionRequestDto: {},
        cart: true,
      };
      navigation.navigate('Payment', {
        screen: 'PaymentScreen',
        params: {paymentProps},
      });
    }
  };
  return {onPayPress, processingCharge, isProduct, checked, onCheckboxPress,cod,onCodPress,onOnlinePress, apiErrorMessage};
};
