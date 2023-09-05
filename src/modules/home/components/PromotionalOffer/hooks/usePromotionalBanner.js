import {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {ADD_ALERT} from '../constants';
import {useCart} from '../../../../cart/hooks/useCart';
import {redeemCouponsSliceThunk} from '../../../../../store/reducers/CouponSlice';
import {removeCouponCart} from '../../../../../store/reducers/CartSlice';

export const usePromotionalBanner = bannerData => {
  const {addToCart} = useCart();
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {cart, addToCartItem, existingIds} = useSelector(state => state.cart);
  const cartCoupon = useSelector(state => state.cart)?.couponViewCart ?? null;
  const {couponView} = useSelector(state => state.coupon);
  const [selectedItem, setSelectedItem] = useState(null);
  const [addedToCart, setAddedToCart] = useState(false);
  const [clearCoupons, setClearCoupons] = useState(false);
  const [applyCoupon, setApplyCoupon] = useState(false);
  const [data, setData] = useState(null);
  const badgeCount = cart?.itemDtoList?.length || 0;

  useEffect(() => {
    console.log('BD', bannerData);
    setData(bannerData);
  }, [bannerData]);

  useEffect(() => {
    if (
      couponView === null &&
      cartCoupon === null &&
      selectedItem !== null &&
      clearCoupons
    ) {
      setClearCoupons(false);
      addToCart({productId: selectedItem?.itemId}, selectedItem?.contentType);
      setAddedToCart(true);
    } else if (
      !clearCoupons &&
      selectedItem !== null &&
      couponView === null &&
      addedToCart &&
      applyCoupon
    ) {
      setSelectedItem(null);
      setAddedToCart(false);
      navigateToCart();
    } else if (
      couponView !== null &&
      addedToCart &&
      selectedItem !== null &&
      !clearCoupons &&
      applyCoupon
    ) {
      setSelectedItem(null);
      setAddedToCart(false);
      navigateToCart();
    }
  }, [couponView, cartCoupon, selectedItem, applyCoupon]);

  useEffect(() => {
    if (addToCartItem && addedToCart) {
      if (selectedItem?.coupon) {
        dispatch(
          redeemCouponsSliceThunk({
            isLoggedIn: true,
            couponCode: selectedItem?.coupon,
          }),
        );
        setApplyCoupon(true);
      } else {
        setSelectedItem(null);
        setAddedToCart(false);
        navigateToCart();
      }
    }
  }, [addToCartItem, addedToCart]);

  const navigateToCart = () => {
    navigation.navigate('HomeScreen', {
      screen: 'HomeDrawer',
      params: {screen: 'Cart'},
    });
  };

  const addItemToCart = itemDetails => {
    setClearCoupons(true);
    setSelectedItem(itemDetails);
    dispatch(redeemCouponsSliceThunk({isLoggedIn: true}));
    dispatch(removeCouponCart());
  };
  const addPackageTest = details => {
    if (existingIds.includes(details?.itemId)) {
      Alert.alert('Alert', 'This item has already been added to the cart');
    } else if (badgeCount > 0) {
      Alert.alert('Alert', ADD_ALERT, [
        {text: 'OK', onPress: () => addItemToCart(details)},
        {text: 'Cancel', style: 'cancel'},
      ]);
    } else addItemToCart(details);
  };

  const handleService = details => {
    //switch (details.itemId) {
      switch ('1dbcc55e-3dec-4e07-8c2a-e222631afebb') {
      case '1dbcc55e-3dec-4e07-8c2a-e222631afebb':
        //HRA Redirection
        navigation.navigate('HRA')
        break;
      case 'bb4385d4-7f92-11ed-a1eb-0242ac120002':
        //TTD Redirection
        break;
    }
  };

  const handlePlan = details => {

  };

  const onBannerPress = details => {
    //switch (details.contentType) {
      switch ('PLAN') {
      // case 'TEST':
      // case 'PACKAGE':
      //   addPackageTest(details)
      case 'PLAN':
        handlePlan(details);
        break;
      case 'SERVICE':
        handleService(details);
        break;
    }
  };
  return {onBannerPress, bannerData: data};
};
