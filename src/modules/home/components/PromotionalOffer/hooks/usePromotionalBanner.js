import {Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {ADD_ALERT} from '../constants';
import {useCart} from '../../../../cart/hooks/useCart';
import {
  diagnosisPackageDetailsThunk,
  diagnosisTestDetailsThunk,
} from '../../../../../store/reducers/DiagnosticsSlice';
import {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import { redeemCouponsSliceThunk } from '../../../../../store/reducers/CouponSlice';

export const usePromotionalBanner = () => {
  const {addToCart} = useCart();
  const dispatch = useDispatch();
  const {cart, addToCartItem} = useSelector(state => state.cart);
  const {packageDetails, testDetails} = useSelector(state => state.diagnostic);
  const {couponView} = useSelector(state => state.coupon);
  const navigation = useNavigation();
  const [selectedItem, setSelectedItem] = useState(null);
  const [addedToCart, setAddedToCart] = useState(false);
  const badgeCount = cart?.itemDtoList?.length || 0;

  useEffect(() => {
    if (
      testDetails?.id &&
      testDetails?.id.toString() === selectedItem?.id.toString()
    ) {
      addToCart(
        {
          name: testDetails?.name,
          cost: testDetails?.cost,
          productId: testDetails?.id,
        },
        'TEST',
      );
      setAddedToCart(true);
    }
  }, [testDetails]);

  useEffect(() => {
    if (
      packageDetails?.packageUuid &&
      packageDetails?.packageUuid.toString() === selectedItem?.id.toString()
    ) {
      addToCart(
        {
          name: packageDetails?.packageName,
          cost: packageDetails?.packageCost,
          productId: packageDetails?.packageUuid,
        },
        'PACKAGE',
      );
      setAddedToCart(true);
    }
  }, [packageDetails]);

  useEffect(() => {
    if(couponView !== null && addedToCart) {
      setAddedToCart(false);
      navigation.navigate('HomeScreen', {
        screen: 'HomeDrawer',
        params: {screen: 'Cart'},
      });
    }
  }, [couponView])

  useEffect(() => {
    if (addToCartItem && addedToCart) {
      dispatch(redeemCouponsSliceThunk({isLoggedIn: true, couponCode: selectedItem?.coupon }));
      setSelectedItem(null);
    }
  }, [addToCartItem]);

  const addItemToCart = itemDetails => {
    setSelectedItem(itemDetails);
    // setSelectedItem({...itemDetails,id:4});
    //setSelectedItem({...itemDetails,id:'0c3ac5f8-c10c-46f4-9252-1da459e18b57'});
    if (itemDetails?.contentType === 'TEST') {
      dispatch(diagnosisTestDetailsThunk({id: itemDetails?.id}));
    } else if (itemDetails?.contentType === 'PACKAGE') {
      dispatch(diagnosisPackageDetailsThunk({packageName: itemDetails?.id}));
    }
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
