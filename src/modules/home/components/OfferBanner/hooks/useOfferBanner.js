import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {setOurPlanData} from '../../../../../store/reducers/ProgramAndPlanSlice';
import { redeemCouponsPlanSliceThunk } from '../../../../../store/reducers/CouponSlice';

export const useOfferBanner = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {popularPlan} = useSelector(state => state.programAndPlan);
  const addPackageTest = itemDetails => {
    if (itemDetails?.contentType === 'TEST') {
      navigation.navigate('ProductDetails', {
        headerName: 'health',
        packageName: itemDetails?.itemId,
        uuid: itemDetails?.itemId,
        showCartButton: true,
        isTest: true,
        name: null,
        cost: itemDetails?.cost ?? null,
      });
    } else if (itemDetails?.contentType === 'PACKAGE') {
      navigation.navigate('ProductDetails', {
        headerName: 'health',
        packageName: itemDetails?.itemId,
        uuid: itemDetails?.itemId,
        showCartButton: true,
        isTest: false,
        name: null,
        cost: itemDetails?.cost ?? null,
      });
    }
  };
  const handleService = details => {
    switch (details.itemId) {
      case '1dbcc55e-3dec-4e07-8c2a-e222631afebb':
        navigation.navigate('HRA');
        break;
      case 'bb4385d4-7f92-11ed-a1eb-0242ac120002':
        //Talk to Doctor Redirection goes here
        navigation.navigate('TalkToDoctor');
        break;
    }
  };

  const handlePlan = details => {
    const planData = popularPlan.filter(
      item => item?.planUuid === details?.itemId,
    )[0];
    dispatch(redeemCouponsPlanSliceThunk({couponCode:details?.coupon,planUuid:details?.itemId}));
    dispatch(setOurPlanData(planData));
    navigation.navigate('OurPlan');
  };
  const onBannerPress = details => {
    switch (details.contentType) {
      case 'TEST':
      case 'PACKAGE':
        addPackageTest(details);
        break;
      case 'PLAN':
        handlePlan(details);
        break;
      case 'SERVICE':
        handleService(details);
        break;
    }
  };
  return {onBannerPress};
};
