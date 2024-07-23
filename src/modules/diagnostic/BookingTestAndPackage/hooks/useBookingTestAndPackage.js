import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  diagnosisPackageDetailsThunk,
  diagnosisTestDetailsThunk,
} from '../../../../store/reducers/DiagnosticsSlice';
import {useIsFocused, useNavigation} from '@react-navigation/core';
import {useRoute} from '@react-navigation/native';
import {
  BOOKINGCONFIRM,
  DETAILS,
  HEALTH_CHECKUP_DIAGNOSTIC,
  LIFE_STYLE,
  MY_TESTS,
} from '../constants';
import {useCart} from '../../../cart/hooks/useCart';

export const useBookingTestAndPackage = params => {
  const route = useRoute();
  const {
    packageName,
    name,
    cost,
    uuid,
    userVersion,
    version,
    plan,
    showCartButton,
    isTest,
    headerName,
    isScreenRes,
  } = params ?? route?.params;
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const focused = useIsFocused();
  const {packageDetails, testDetails} = useSelector(state => state.diagnostic);
  const [details, setDetails] = useState('');
  const {existingIds, addToCartLoad} = useSelector(state => state.cart);
  const [packageList, setPackageList] = useState('');
  const [renderData, setRenderData] = useState(false);
  const [isDisabled, setIsDisabled] = useState(
    existingIds.length > 0 && existingIds.includes(uuid?.toString()),
  );
  const {addToCart, onRemove} = useCart();

  useEffect(() => {
    if (isTest) {
      dispatch(diagnosisTestDetailsThunk({id: uuid}));
    } else {
      dispatch(diagnosisPackageDetailsThunk({packageName}));
    }
  }, [isScreenRes]);

  useEffect(() => {
    if (focused) {
      let isDisabled =
        existingIds.length > 0 && existingIds.includes(uuid?.toString());
      setIsDisabled(isDisabled);
    }
  }, [existingIds, focused]);

  useEffect(() => {
    if (focused && packageDetails && testDetails === '') {
      setDetails(packageDetails);
    } else if (focused && packageDetails === '' && testDetails) {
      setDetails(testDetails);
    }
  }, [focused, packageDetails, testDetails]);

  useEffect(() => {
    if (details !== '') {
      let list;
      if (!isTest) {
        list = details?.attributeResponseDtoList?.map(item => {
          return {
            ...item,
            isExpanded: false,
          };
        });
      } else {
        list = [{...details, isExpanded: false}];
      }
      setPackageList(list);
      setRenderData(true);
    }
  }, [details]);

  const PLAN = {
    Uuid: uuid,
    userVersion: userVersion,
    version: version,
    plan: plan,
  };
  const bookPackageScreen = () => {
    navigation.navigate(BOOKINGCONFIRM, PLAN);
  };

  const onUpdate = index => {
    const newList = packageList.map((item, itemIndex) => {
      return {
        ...item,
        isExpanded: itemIndex === index && !item.isExpanded,
      };
    });
    setPackageList(newList);
  };
  const onAddToCartPress = () => {
    addToCart(
      {
        name,
        cost,
        productId: uuid?.toString(),
      },
      isTest ? 'TEST' : 'PACKAGE',
    );
  };
  const headerTitle = () => {
    switch (headerName) {
      case 'health':
        return HEALTH_CHECKUP_DIAGNOSTIC;
      case 'myTest':
        return MY_TESTS;
      case 'lifestyle':
        return LIFE_STYLE;
      case 'Details':
        return HEALTH_CHECKUP_DIAGNOSTIC;
      default:
        return '';
    }
  };
  return {
    packageDetails: details,
    packageList,
    onUpdate,
    bookPackageScreen,
    showCartButton,
    onAddToCartPress,
    testDetails,
    renderData,
    isTest,
    isDisabled,
    headerName,
    headerTitle,
    isScreenRes,
  };
};
