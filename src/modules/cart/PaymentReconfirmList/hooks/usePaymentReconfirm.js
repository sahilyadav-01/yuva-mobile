import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {Alert} from 'react-native';
import { TERMS_CONDITION } from '../../../ourPlan/components/CheckoutScreen/constants';

export const usePaymentReconfirm = () => {
  const navigation = useNavigation();
  const {
    termsAndCondtionChecked,
    cart: {itemDtoList},
  } = useSelector(state => state.cart);
  const {scheduleDate, addressData, relationData, processingCharge} = useSelector(
    state => state.checkOut,
  );
  const {selectedCity} = useSelector(
    state => state.profile,
  );
  const onPayPress = () => {
    if(!termsAndCondtionChecked){
      Alert.alert('Alert', TERMS_CONDITION)
    }
    else if (
      termsAndCondtionChecked &&
      scheduleDate !== null &&
      addressData?.address !== undefined &&
      addressData?.contact !== undefined &&
      addressData?.pincode !== undefined &&
      ((relationData?.name !== undefined &&
        relationData?.age !== undefined &&
        relationData?.gender !== undefined) ||
        relationData?.id === null)
    ) {
      const packageUuid = itemDtoList
        .filter(item => {
          if (item?.productType === 'PACKAGE') return item;
        })
        .map(item => {
          return item?.productId;
        });
      const testId = itemDtoList
        .filter(item => {
          if (item?.productType === 'TEST') return item;
        })
        .map(item => {
          return item?.productId;
        });
      const details =
        relationData?.id === null
          ? {age: 0, name: null, gender: null}
          : {
              name: relationData?.name,
              age: parseInt(relationData?.age),
              gender: relationData?.gender,
            };
      const paymentProps = {
        ...details,
        plan: false,
        bookingRequestDto: {
          address: addressData?.address,
          away: addressData?.away ?? false,
          cityId: selectedCity,
          contactNumber: addressData?.contact,
          packageUuid,
          pinCode: addressData?.pincode,
          plan: false,
          programOrPlanUuid: null,
          relationId: null,
          testId,
          timeSlot: scheduleDate,
        },
        subscriptionRequestDto: {},
      };
      navigation.navigate('Payment', {
        screen: 'PaymentScreen',
        params: {paymentProps},
      });
    }
  };
  return {onPayPress,processingCharge};
};
