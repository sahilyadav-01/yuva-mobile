import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { useCart } from '../../../modules/cart/hooks/useCart';
import { HEALTH, NEXTSCREEN_NAVIGATION, PRODUCT_DETAILS_NAVIGATION, TESTCOUNT } from '../constant';

export const useCarouselItem4 = (props) => {
  const { item } = props;
  const { addToCart } = useCart({isHomeScreen:true});
  const navigation = useNavigation();
  const {existingIds} = useSelector(state=>state.cart)
   const onTestPress = (item) => navigation.navigate(PRODUCT_DETAILS_NAVIGATION, {
    headerName:HEALTH,
    packageName: item.testId ,
    uuid: item.testId ?? null,
    showCartButton: true,
    isTest: item.testId ? true : false,
    name:item.testName ?? null,
    cost: item.cost ?? null
  });
  const getTestCount = (item) => {
    return TESTCOUNT(item.parameterCount === 0 ? 1 : item.parameterCount);
  };

  const onPressAdd = () => {
    addToCart({ name: item.testName, cost: item.cost, productId:item.testId.toString() }, 'TEST');
    navigation.navigate(NEXTSCREEN_NAVIGATION, { index: 1 });
  }

  return {
  onTestPress,
  getTestCount,
  onPressAdd,
  existingIds
  };
}