import { useIsFocused, useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import {
  createCartGuestThunk,
  createCartUserThunk,
} from '../../../store/reducers/CartSlice';
import { LOGIN_SIGNUP, SELECT_ADD_MEMBER,TO_BE_PAID, MYSELF, OTHER_RELATION, LOGIN_SCREEN_NAVIGATION, CHECKOUT_ADDRESS_NAVIGATION, MALE, FEMALE, KEY_VALUE1, KEY_VALUE2 } from '../constants';
import { deleteCartThunk, getCartGuestThunk, getCartUserThunk } from '../../../store/reducers/CartSlice';
import { useEffect, useState } from 'react';
import { getActiveRelations, getRelations, profileThunk } from '../../../store/reducers/ProfileSlice';
import { getAge } from '../../../utils/utils';
import { dispatch_processingCharge, dispatch_relationData } from '../../../store/reducers/CheckOutSlice';

export const useCart = (args) => {
  const fromHome = args?.isHomeScreen ?? false;
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { cart,loading } = useSelector(state => state.cart);
  const { coupon } = useSelector(state => state);
  const { isRemoved, amountToBePaid, processingCharge} = cart || {};
  const { loggedIn } = useSelector(state => state.auth);
  const isLoggedIn = loggedIn === 'loggedIn';
  const { redeemCoupons, couponView } = useSelector(state => state.coupon);
  /**/
  const [modalVisible, setModalVisible] = useState(false);
  const [addModalVisible, setAddModalVisible] = useState(false);
  const [startConsultation, setStartConsultation] = useState(false);
  const [data, setData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const [checkBoxFlag, setCheckBoxFlag] = useState([]);
  const [checkBoxPress, setCheckBoxPress] = useState(0);
  const [checkBoxStatus, setCheckBoxStatus] = useState('unchecked');
  const [userData, setUserData] = useState(null);
  const focused = useIsFocused();
  const { userDetails, relations } = useSelector(state => state.profile);
  const buttonText = userData !== null ? TO_BE_PAID(amountToBePaid) : isLoggedIn ? SELECT_ADD_MEMBER : LOGIN_SIGNUP;
  const relationsData = [
    { key: KEY_VALUE1, value: MALE },
    { key: KEY_VALUE2, value: FEMALE },
  ]
  /** */
  const onPressCardButton = () => {
    if (isLoggedIn) {
      dispatch(getCartUserThunk());
      if (userData == null) {
        openModal();
      } else {
        dispatch(dispatch_relationData({ userData }));
        dispatch(dispatch_processingCharge(processingCharge));
        navigation.navigate(CHECKOUT_ADDRESS_NAVIGATION);
      }
    } else {
      navigation.navigate(LOGIN_SCREEN_NAVIGATION);
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
  const addToCart = ({ name, cost, productId }, productType) => {
    const dToObj = { name, count: 1, cost, productId, productType };
    const dispatcher = isLoggedIn ? createCartUserThunk : createCartGuestThunk;
    const cartDto = {
      ...cart,
      itemDtoList: [...cart.itemDtoList, dToObj],
    };
    dispatch(dispatcher({ cartDto }));
  };
  const onRemove = item => {
    const { productId: itemId } = item || {};
    itemId && dispatch(deleteCartThunk({ itemId }));
  };

  const onAddMembersPress = () => {
    setModalVisible(false);
    setAddModalVisible(true)
  }
  useEffect(() => {
    if (isLoggedIn && isRemoved && !fromHome) {
      dispatch(getCartUserThunk());
    } else if(isRemoved && !fromHome) {
      dispatch(getCartGuestThunk());
    }
  }, [isRemoved]);

  /** */

  useEffect(() => {
    if (focused) {
      setModalVisible(false);
      setCheckBoxStatus('unchecked');
      setCheckBoxFlag([]);
      setStartConsultation(false);
      setCheckBoxPress(0);
      setActiveIndex(null);
      dispatch(getRelations());
      dispatch(getActiveRelations());
    }
  }, [focused]);
  useEffect(() => {
    if (startConsultation && userDetails && relations.length > 0) {
      setData(
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
      setModalVisible(true);
    }
  }, [userDetails, relations, startConsultation, checkBoxFlag]);

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

  const openModal = () => {
    dispatch(profileThunk());
    setStartConsultation(true);
  };
  const onPressCheckBox = () => {
    setCheckBoxStatus('checked');
    setCheckBoxFlag([]);
    setModalVisible(false);
    setStartConsultation(false);
  };

  const onModalCrossPress = () => {
    setModalVisible(false);
    setStartConsultation(false);
  };
  const onAddModalCrossPress = () => {
    setAddModalVisible(false);
  };


  /** */

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
    loading,
  };
};