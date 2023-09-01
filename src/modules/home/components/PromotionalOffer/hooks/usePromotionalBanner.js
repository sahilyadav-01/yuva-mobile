import {Alert} from 'react-native';
import {useSelector} from 'react-redux';
import {ADD_ALERT} from '../constants';

export const usePromotionalBanner = () => {
  const {cart} = useSelector(state => state.cart);
  const badgeCount = cart?.itemDtoList?.length || 0;

  const addItemToCart = (itemDetails) => {
    console.log('Item details',itemDetails);
  };
  const onBannerPress = details => {
    if (badgeCount > 0) {
      Alert.alert('Alert', ADD_ALERT, [
        {text: 'OK', onPress: () => addItemToCart(details)},
        {text: 'Cancel', style: 'cancel'},
      ]);
    } else addItemToCart(details);
  };
  return {onBannerPress};
};
