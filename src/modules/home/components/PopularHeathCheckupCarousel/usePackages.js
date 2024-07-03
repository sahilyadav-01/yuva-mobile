import {useNavigation} from '@react-navigation/native';
import {Alert} from 'react-native';
import {useSelector} from 'react-redux';
import {
  HEALTH,
  NEXTSCREEN_NAVIGATION,
  PRODUCT_DETAILS_NAVIGATION,
} from './constant';
import {useCart} from '../../../../modules/cart/hooks/useCart';

export const usePackages = isTest => {
  const {addToCart} = useCart({isHomeScreen: true});
  const navigation = useNavigation();
  const {existingIds} = useSelector(state => state.cart);
  const onPackagePress = item => {
    navigation.navigate(PRODUCT_DETAILS_NAVIGATION, {
      headerName: HEALTH,
      packageName: item.id,
      uuid: item.id ?? null,
      showCartButton: true,
      isTest: item?.test,
      name: item.name ?? null,
      cost: item.originalPrice ?? null,
    });
  };
  const onPressAdd = item => {
    if (!item?.test && !existingIds.includes(item?.id)) {
      addToCart(
        {name: item.name, cost: item.finalPrice, productId: item.id},
        'PACKAGE',
      );
      navigation.navigate(NEXTSCREEN_NAVIGATION, {index: 0});
    } else if (item?.test && !existingIds.includes(item?.id)) {
      addToCart(
        {name: item.name, cost: item.finalPrice, productId: item.id.toString()},
        'TEST',
      );
      navigation.navigate(NEXTSCREEN_NAVIGATION, {index: 1});
    } else {
      Alert.alert('Alert', 'Item already exists in the Cart');
    }
  };

  return {
    onPackagePress,
    onPressAdd,
    existingIds,
  };
};
