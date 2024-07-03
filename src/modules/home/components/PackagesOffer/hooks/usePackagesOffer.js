import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {setOurPlanData} from '../../../../../store/reducers/ProgramAndPlanSlice';

export const usePackagesOffer = () => {
  const navigation = useNavigation();
  const {popularPlan} = useSelector(state => state.programAndPlan);
  const dispatch = useDispatch();
  const onPackagePress = itemDetails => {
    switch (itemDetails?.contentType) {
      case 'TEST':
        navigation.navigate('ProductDetails', {
          headerName: 'health',
          packageName: itemDetails?.itemId,
          uuid: itemDetails?.itemId,
          showCartButton: true,
          isTest: true,
          name: null,
          cost: itemDetails?.cost ?? null,
        });
        break;
      case 'PACKAGE':
        navigation.navigate('ProductDetails', {
          headerName: 'health',
          packageName: itemDetails?.itemId,
          uuid: itemDetails?.itemId,
          showCartButton: true,
          isTest: false,
          name: null,
          cost: itemDetails?.cost ?? null,
        });
        break;
      case 'PLAN':
        const planData = popularPlan.filter(
          item => item?.planUuid === itemDetails?.itemId,
        )[0];
        dispatch(setOurPlanData(planData));
        navigation.navigate('OurPlan');
        break;
    }
  };
  return {onPackagePress};
};
