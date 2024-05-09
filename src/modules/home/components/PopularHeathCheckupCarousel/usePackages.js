import {useNavigation} from '@react-navigation/native';
import { Alert } from 'react-native';
import {useSelector} from 'react-redux';
import {
  HEALTH,
  NEXTSCREEN_NAVIGATION,
  PRODUCT_DETAILS_NAVIGATION,
} from './constant';
import {useCart} from '../../../../modules/cart/hooks/useCart';

export const usePackages = (isTest) => {
  const {addToCart} = useCart({isHomeScreen: true});
  const navigation = useNavigation();
  const {existingIds} = useSelector(state => state.cart);
  const onPackagePress = item =>
    navigation.navigate(PRODUCT_DETAILS_NAVIGATION, {
      headerName: HEALTH,
      packageName: item.packageUuid,
      uuid: item.packageUuid ?? null,
      showCartButton: true,
      isTest: item.testId ? true : false,
      name: item.packageName ?? null,
      cost: item.cost ?? null,
    });
  const onPressAdd = (item) => {
    if(!isTest && !existingIds.includes(item?.packageUuid)){
    addToCart(
      {name: item.name, cost: item.finalPrice, productId: item.id},
      'PACKAGE',
    );
    navigation.navigate(NEXTSCREEN_NAVIGATION, {index: 0});
    }
    else if(isTest && !existingIds.includes(item?.testId)){
    addToCart({ name: item.name, cost: item.finalPrice, productId:item.id.toString() }, 'TEST');
    navigation.navigate(NEXTSCREEN_NAVIGATION, { index: 1 });
    }
    else Alert.alert('Alert','Item already exists in the Cart')
  };

  return {
    onPackagePress,
    onPressAdd,
    existingIds,
  };
};
