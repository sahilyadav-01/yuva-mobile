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
  const onPayPress = () => {
    if(!termsAndCondtionChecked){
      Alert.alert('Alert', TERMS_CONDITION)
    }
    else if (
      termsAndCondtionChecked &&
      scheduleDate?.date &&
      scheduleDate?.time &&
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
      const hours = new Date(scheduleDate?.time).getHours();
      const minutes = new Date(scheduleDate?.time).getMinutes();
      const year = new Date(scheduleDate?.date).getFullYear();
      const month = new Date(scheduleDate?.date).getMonth();
      const date = new Date(scheduleDate?.date).getDate();
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
          cityId: addressData?.cityId,
          contactNumber: addressData?.contact,
          packageUuid,
          pinCode: addressData?.pincode,
          plan: false,
          programOrPlanUuid: '',
          relationId: null,
          testId,
          timeSlot: new Date(year, month, date, hours, minutes).getTime(),
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
