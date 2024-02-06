import { useIsFocused, useNavigation, useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import {
  createCartUserThunk,
  removeCouponCart,
} from '../../../store/reducers/CartSlice';
import { LOGIN_SIGNUP, SELECT_ADD_MEMBER,TO_BE_PAID, MYSELF, OTHER_RELATION, LOGIN_SCREEN_NAVIGATION, CHECKOUT_ADDRESS_NAVIGATION, MALE, FEMALE, KEY_VALUE1, KEY_VALUE2 } from '../constants';
import { deleteCartThunk, getCartUserThunk } from '../../../store/reducers/CartSlice';
import { useEffect, useState } from 'react';
import { addRelation, getActiveRelations, getRelations, profileThunk, resetRelations } from '../../../store/reducers/ProfileSlice';
import { getAge } from '../../../utils/utils';
import { dispatch_processingCharge, dispatch_relationData } from '../../../store/reducers/CheckOutSlice';
import { clearApiErrorMessage, redeemCouponsSliceThunk, removeCoupon, removePlaneCoupon } from '../../../store/reducers/CouponSlice';

export const useCart = (args) => {
  const fromHome = args?.isHomeScreen ?? false;
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();
  const focused = useIsFocused();
  const { cart, loading, addToCartItem } = useSelector(state => state.cart);
  const { coupon } = useSelector(state => state);
  const { isRemoved, amountToBePaid, processingCharge, couponViewCart } = cart || {};
  const { loggedIn } = useSelector(state => state.auth);
  const isLoggedIn = loggedIn === 'loggedIn';
  const { redeemCoupons, couponView, amountToBePaidCoupon, couponId } = useSelector(state => state.coupon);
  const [addButtonPress, setAddButtonPress] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [addModalVisible, setAddModalVisible] = useState(false);
  const [data, setData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const [checkBoxFlag, setCheckBoxFlag] = useState([]);
  const [checkBoxPress, setCheckBoxPress] = useState(0);
  const [checkBoxStatus, setCheckBoxStatus] = useState('unchecked');
  const [userData, setUserData] = useState(null);
  const [relationsModalVisible, setRelationsModalVisible] = useState(false);
  const [buttonText, setButtonText] = useState('');
  const { userDetails, relations, activeRelations, relationAdded, relationsLoading, relationsError } = useSelector(state => state.profile);
  
  const relationsData = [
    { key: KEY_VALUE1, value: MALE },
    { key: KEY_VALUE2, value: FEMALE },
  ]
  /** */

  const onPressCardButton = () => {
    if (isLoggedIn) {
      setAddButtonPress(true);
      dispatch(getCartUserThunk());
      if (userData == null) {
        openModal();
      } else {
        dispatch(dispatch_relationData({ userData }));
        dispatch(dispatch_processingCharge(processingCharge));
        navigation.navigate(CHECKOUT_ADDRESS_NAVIGATION);
      }
    } else {
      navigation.navigate('Home',{screen:LOGIN_SCREEN_NAVIGATION,params:{from: 'CartScreen'}});
    }
  };
  const onSaveDetailsPress = (arg) => {
    setUserData({
      name: arg.name,
      age: arg.age,
      gender: arg.selectedRelation,
      relation: OTHER_RELATION
    })
    setAddModalVisible(false);
  }

  const onSaveRelationsPress = (arg) => {
    dispatch(
      addRelation({
        name: arg?.name,
        age: arg?.age,
        relation: arg?.selectedRelationEnum,
      }),
    );
  }

  const addToCart = (obj, productType, count = 1) => {
    const dToObj = {...obj,productType,count}
    const itemDtoList = cart.itemDtoList.map(item=>{
      const {name,count,cost,productId,productType} = item;
      return {name,count,cost,productId,productType,productPriceId:item?.productPriceId ?? null}
    })
    const cartDto = {
      ...cart,
      itemDtoList: [...itemDtoList, dToObj],
    };
    dispatch(createCartUserThunk({ cartDto }));
  };
  const onRemove = item => {
    const { productId: itemId } = item || {};
    itemId && dispatch(deleteCartThunk({ itemId }));
  };

  const onAddMembersPress = () => {
    setModalVisible(false);
    setAddModalVisible(true)
  }

  const onAddRelativePress = () => {
    if (activeRelations.length > 0) {
      setModalVisible(false);
      setRelationsModalVisible(true);
    }
  }

  useEffect(()=>{
   if(couponId === null && userData !== null) setButtonText(TO_BE_PAID(amountToBePaid))
   else if(couponId !== null && userData !== null) setButtonText(TO_BE_PAID(amountToBePaidCoupon))
   else if(userData === null && isLoggedIn) setButtonText(SELECT_ADD_MEMBER)
   else if(userData === null && !isLoggedIn) setButtonText(LOGIN_SIGNUP)
  },[userData])

  useEffect(() => {
    if (relationsModalVisible && route?.name === 'Cart') {
      dispatch(getRelations());
      setRelationsModalVisible(false);
      setAddButtonPress(true);
    }
  }, [relationAdded])

  useEffect(() => {
    if(userData === null && loggedIn === 'loggedIn') setButtonText(SELECT_ADD_MEMBER)
    else if(userData === null && loggedIn !== 'loggedIn') setButtonText(LOGIN_SIGNUP)
    if (route?.name === 'Cart' && navigation.isFocused() && !isRemoved ) {
      dispatch(getCartUserThunk());
    }
  }, [focused])


  useEffect(() => {
    if (isRemoved && !fromHome) {
      dispatch(getCartUserThunk());
    }
  }, [isRemoved]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      setModalVisible(false);
    });
    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    if (navigation.isFocused()) {
      setAddButtonPress(false);
      setModalVisible(false);
      setCheckBoxStatus('unchecked');
      setCheckBoxFlag([]);
      setCheckBoxPress(0);
      setActiveIndex(null);
      route?.name === 'Cart' ? dispatch(resetRelations()) : null;
      dispatch(removePlaneCoupon());
      dispatch(clearApiErrorMessage(''));
    }
  }, [focused]);

  useEffect(() => {
    if (!relationsLoading && !relationsError && route?.name === 'Cart' && (addButtonPress || checkBoxFlag.length > 0)) {
      dispatch(getActiveRelations());
      relations.length > 0 && setData(
        relations.map((item, index) => {
          return {
            detailsText: `${item.name}  |  ${item.gender}  |  Age - ${item.age}`,
            relation: item.relation,
            onCheckBoxPress: () => {
              setActiveIndex(index);
              setCheckBoxPress(checkBoxPress + 1);
            },
            checkBoxStatus: checkBoxFlag[index]?.status ?? 'unchecked',
          };
        }),
      );
      setRelationsModalVisible(false);
      setModalVisible(true);
      setAddButtonPress(false);
    }
  }, [relationsLoading, checkBoxFlag]);

  useEffect(() => {
    if (activeIndex !== null) {
      const status = relations.map((item, index) => {
        if (activeIndex === index) {
          let status =
            !checkBoxFlag[index]?.status ||
              checkBoxFlag[index].status === 'unchecked'
              ? 'checked'
              : 'unchecked';
          return { index, status };
        } else return { index, status: 'unchecked' };
      });
      setCheckBoxFlag(status);
      setCheckBoxStatus('unchecked');
    }
  }, [checkBoxPress]);

  useEffect(() => {
    if (checkBoxStatus === 'checked') {
      const { name, dob, gender } = userDetails;
      setUserData({
        id: null,
        name,
        age: getAge(new Date(dob)),
        gender,
        genderId: gender === 'Male' ? 0 : 1,
        relation: MYSELF
      });
    } else if (
      checkBoxFlag.length > 0 &&
      checkBoxFlag.filter(item => item.status === 'checked').length > 0
    ) {
      const { id, name, age, gender, relation } =
        relations[checkBoxFlag.find(item => item.status === 'checked').index];
      setUserData({ id, name, age, gender, genderId: gender === 'Male' ? 0 : 1, relation });
    }
  }, [checkBoxStatus, checkBoxFlag]);

  useEffect(() => {
    if ((couponViewCart || couponView) && (isRemoved || addToCartItem) && navigation.isFocused() && route?.name === 'Cart') {
      dispatch(redeemCouponsSliceThunk({ isLoggedIn }));
      dispatch(removeCoupon());
      dispatch(removeCouponCart());
    }
  }, [isRemoved, addToCartItem, focused]);
  const openModal = () => {
    dispatch(profileThunk());
    dispatch(getRelations());
  };
  const onPressCheckBox = () => {
    setCheckBoxStatus('checked');
    setCheckBoxFlag([]);
    setModalVisible(false);
  };

  const onModalCrossPress = () => {
    setModalVisible(false);
  };
  const onAddModalCrossPress = () => {
    setAddModalVisible(false);
  };

  const onRelationModalCrossPress = () => {
    setRelationsModalVisible(false);
  };

  const onContainerCrossPress = () => {
    setCheckBoxStatus('unchecked');
    setCheckBoxFlag([]);
    setCheckBoxPress(0);
    setActiveIndex(null);
    setUserData(null);
  }


  return {
    cart,
    onPressCardButton,
    buttonText,
    addToCart,
    onRemove,
    redeemCoupons,
    couponView,
    coupon,
    onModalCrossPress,
    onPressCheckBox,
    checkBoxStatus,
    modalVisible,
    openModal,
    data,
    userData,
    onAddMembersPress,
    addModalVisible,
    relationsData,
    onAddModalCrossPress,
    onSaveDetailsPress,
    relationsModalVisible,
    onRelationModalCrossPress,
    onAddRelativePress,
    onSaveRelationsPress,
    relativesData: activeRelations.map((item, index) => { return { key: index.toString(), value: item?.name, relation: item?.id } }),
    loading,
    onContainerCrossPress
  };
};