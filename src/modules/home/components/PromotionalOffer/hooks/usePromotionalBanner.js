import {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {ADD_ALERT, ITEM_ADDED} from '../constants';
import {useCart} from '../../../../cart/hooks/useCart';
import {redeemCouponsSliceThunk} from '../../../../../store/reducers/CouponSlice';
import {removeCouponCart} from '../../../../../store/reducers/CartSlice';
import {setOurPlanData} from '../../../../../store/reducers/ProgramAndPlanSlice';

export const usePromotionalBanner = () => {
  const {addToCart} = useCart();
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {cart, addToCartItem, existingIds} = useSelector(state => state.cart);
  const cartCoupon = useSelector(state => state.cart)?.couponViewCart ?? null;
  const {couponView} = useSelector(state => state.coupon);
  const {popularPlan} = useSelector(state => state.programAndPlan);
  const {banner2} = useSelector(state => state.banner);
  const [selectedItem, setSelectedItem] = useState(null);
  const [addedToCart, setAddedToCart] = useState(false);
  const [clearCoupons, setClearCoupons] = useState(false);
  const [applyCoupon, setApplyCoupon] = useState(false);
  const [data, setData] = useState(null);
  const badgeCount = cart?.itemDtoList?.length || 0;

  useEffect(() => {
    if (typeof banner2?.data?.data === 'object') setData(banner2.data.data);
  }, [banner2]);

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

  const getItemDetails = item => {
    switch (item.contentType) {
      case 'TEST':
      case 'PACKAGE':
        return {
          showDescription: false,
          buttonText: 'Book Now',
        };
      case 'PLAN':
        return {
          showDescription: false,
          buttonText: 'Buy Now',
        };
      case 'SERVICE':
        switch (item.itemId) {
          case '1dbcc55e-3dec-4e07-8c2a-e222631afebb':
            return {
              showDescription: true,
              description: 'Get Free Diet Chart',
              buttonText: 'Start Now',
            };
          case 'bb4385d4-7f92-11ed-a1eb-0242ac120002':
            return {
              showDescription: false,
              buttonText: 'Consult Now',
            };
        }
        break;
      default:
        return null;
    }
  };

  const addItemToCart = itemDetails => {
    setClearCoupons(true);
    setSelectedItem(itemDetails);
    dispatch(redeemCouponsSliceThunk({isLoggedIn: true}));
    dispatch(removeCouponCart());
  };
  const addPackageTest = details => {
    if (existingIds.includes(details?.itemId)) {
      Alert.alert('Alert', ITEM_ADDED);
    } else if (badgeCount > 0) {
      Alert.alert('Alert', ADD_ALERT, [
        {text: 'OK', onPress: () => addItemToCart(details)},
        {text: 'Cancel', style: 'cancel'},
      ]);
    } else addItemToCart(details);
  };

  const handleService = details => {
    switch (details.itemId) {
      case '1dbcc55e-3dec-4e07-8c2a-e222631afebb':
        navigation.navigate('HRA');
        break;
      case 'bb4385d4-7f92-11ed-a1eb-0242ac120002':
        //TTD Redirection
        break;
    }
  };

  const handlePlan = details => {
    const uuid = 'f807eb12-dbbc-4b74-a5ee-25ef4e5c6848';
    const planData = popularPlan.filter(
      item => item?.planUuid === /*details?.itemId*/ uuid,
    )[0];
    dispatch(setOurPlanData(planData));
    navigation.navigate('OurPlan');
  };

  const onBannerPress = details => {
    switch (details.contentType) {
      case 'TEST':
      case 'PACKAGE':
        addPackageTest(details);
      case 'PLAN':
        handlePlan(details);
        break;
      case 'SERVICE':
        handleService(details);
        break;
    }
  };
  return {onBannerPress, bannerData: data, getItemDetails};
};
