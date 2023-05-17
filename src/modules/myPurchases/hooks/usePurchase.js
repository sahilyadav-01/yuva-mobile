import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import _ from 'lodash';
import {getPlans, getPurchases} from '../../../store/reducers/PurchasesSlice';
import { BackHandler } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const usePurchase = plan => {
  const {purchasesTab, plans, plansError, purchases, purchasesError} =
    useSelector(state => state.purchases);
  const [planList, setPlanList] = useState([]);
  const [purchasesList, setPurchasesList] = useState([]);
  const [plansPageNo, setPlansPageNo] = useState(1);
  const [purchasesPageNo, setPurchasesPageNo] = useState(1);
  const [loading, setLoading] = useState(true);
  const [purchasesLoader, setPurchasesLoader] = useState(true);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  useEffect(()=>{
    BackHandler.addEventListener('hardwareBackPress',()=>navigation.goBack());
    return () => BackHandler.removeEventListener('hardwareBackPress',()=>{});
  },[])
  useEffect(() => {
    if (purchasesTab === 0 && plansPageNo === 1 && plan) {
      dispatch(getPlans({pageNo: plansPageNo, pageSize: 3, orderStatus: ''}));
    } else if (purchasesPageNo === 1 && purchasesTab === 1 && !plan) {
      dispatch(
        getPurchases({pageNo: purchasesPageNo, pageSize: 3, orderStatus: ''}),
      );
    }
  }, [purchasesTab]);

  useEffect(() => {
    if (plansPageNo > 1 && purchasesTab === 0) {
      dispatch(getPlans({pageNo: plansPageNo, pageSize: 3, orderStatus: ''}));
    }
  }, [plansPageNo]);

  useEffect(() => {
    if (purchasesPageNo > 1 && purchasesTab === 1) {
      getPurchases({pageNo: purchasesPageNo, pageSize: 3, orderStatus: ''});
    }
  }, [purchasesPageNo]);

  useEffect(() => {
    if (
      plans &&
      typeof plans?.userPlanOrderHistoryResponseDtoList === 'object' &&
      plans?.userPlanOrderHistoryResponseDtoList.length > 0
    ) {
      setPlanList(
        _.uniqBy(
          planList.concat(plans.userPlanOrderHistoryResponseDtoList),
          'dateOfPurchase',
        ),
      );
      setLoading(false);
    } else if (
      plans &&
      typeof plans?.userPlanOrderHistoryResponseDtoList === 'object' &&
      plans?.userPlanOrderHistoryResponseDtoList.length === 0
    ) {
      setLoading(false);
    } else if (plans === null && plansError) {
      setLoading(false);
    }
  }, [plans, plansError]);

  useEffect(() => {
    if (
      purchases &&
      typeof purchases?.userOrderHistoryResponseDto === 'object' &&
      purchases?.userOrderHistoryResponseDto.length > 0
    ) {
      setPurchasesList(
        _.uniqBy(
          purchasesList.concat(
            purchases?.userOrderHistoryResponseDto.map(item => {
              return {
                ...item,
                dateOfPurchase: item?.date,
                amountPaid: item?.amount,
                customerName: item?.name,
              };
            }),
          ),
          'date',
        ),
      );
      setPurchasesLoader(false);
    } else if (
      purchases &&
      typeof purchases?.userOrderHistoryResponseDto === 'object' &&
      purchases?.userOrderHistoryResponseDto.length === 0
    ) {
      setPurchasesLoader(false);
    } else if (purchases === null && purchasesError) {
      setPurchasesLoader(false);
    }
  }, [purchases, purchasesError]);

  const onEndReached = () => {
    if (purchasesTab === 0 && plansPageNo < plans?.totalPages) {
      setPlansPageNo(plansPageNo + 1);
    } else if (purchasesTab === 1 && purchasesPageNo < purchases?.totalPages) {
      setPurchasesPageNo(purchasesPageNo + 1);
    }
  };

  return {
    tabIndex: purchasesTab,
    planList,
    onEndReached,
    loading,
    plansError,
    purchasesLoader,
    purchasesList,
    purchasesError,
  };
};
