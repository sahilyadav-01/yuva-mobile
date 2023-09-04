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

export const usePromotionalBanner = () => {
  const {addToCart} = useCart();
  const dispatch = useDispatch();
  const {cart, addToCartItem} = useSelector(state => state.cart);
  const {packageDetails, testDetails} = useSelector(state => state.diagnostic);
  const navigation = useNavigation();
  const badgeCount = cart?.itemDtoList?.length || 0;
  const [selectedItem, setSelectedItem] = useState(null);
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    if (
      testDetails?.id &&
      testDetails?.id.toString() === selectedItem?.id.toString()
    ) {
      setSelectedItem(null);
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
      setSelectedItem(null);
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
    if (addToCartItem && addedToCart) {
      setAddedToCart(false);
      //Add coupon as well here.. post which navigation should happen
      navigation.navigate('HomeScreen', {
        screen: 'HomeDrawer',
        params: {screen: 'Cart'},
      });
    }
  }, [addToCartItem]);

  const addItemToCart = itemDetails => {
    setSelectedItem(itemDetails);
    //setSelectedITem({id:4});
    //setSelectedItem({id:'0c3ac5f8-c10c-46f4-9252-1da459e18b57'});
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
