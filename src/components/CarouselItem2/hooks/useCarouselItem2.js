import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {
  HEALTH,
  NEXTSCREEN_NAVIGATION,
  PRODUCT_DETAILS_NAVIGATION,
  TESTCOUNT,
} from '../constant';
import {useCart} from '../../../modules/cart/hooks/useCart';

export const useCarouselItem2 = props => {
  const {item} = props;
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
  const getTestCount = item => {
    return TESTCOUNT(
      item.parameterCount === 0 ? item.totalTest : item.parameterCount,
    );
  };

  const onPressAdd = () => {
    addToCart(
      {name: item.packageName, cost: item.cost, productId: item.packageUuid},
      'PACKAGE',
    );
    navigation.navigate(NEXTSCREEN_NAVIGATION, {index: 0});
  };

  return {
    onPackagePress,
    getTestCount,
    onPressAdd,
    existingIds,
  };
};
