import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {setOurPlanData} from '../../../../../store/reducers/ProgramAndPlanSlice';

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
        name: itemDetails?.innerBannerName ?? null,
        cost: itemDetails?.cost ?? null,
      });
    } else if (itemDetails?.contentType === 'PACKAGE') {
      navigation.navigate('ProductDetails', {
        headerName: 'health',
        packageName: itemDetails?.itemId,
        uuid: itemDetails?.itemId,
        showCartButton: true,
        isTest: false,
        name: itemDetails?.innerBannerName ?? null,
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
  return {onBannerPress};
};
