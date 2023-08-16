import {useIsFocused, useNavigation, useRoute} from '@react-navigation/native';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getServicesThunk} from '../../../store/reducers/AttributeSlice';
import {allAppointmentThunk} from '../../../store/reducers/AppointmentSlice';
import {popularPackageNameThunk} from '../../../store/reducers/ProgramAndPlanSlice';
import {popularTestsSliceThunk} from '../../../store/reducers/PopularTestsSlice ';
import {lifeStyleSliceThunk} from '../../../store/reducers/LifeStyleSlice';
import {
  getCartGuestThunk,
  getCartUserThunk,
} from '../../../store/reducers/CartSlice';

export const useHome = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();
  const {loggedIn} = useSelector(state => state.auth);
  const {userDetails:{name}} = useSelector(state => state.profile);
  const focused = useIsFocused();

  useEffect(() => {
    if (navigation.isFocused()) {
      if (route?.params?.navigateToDetails) {
        navigation?.navigate('OurPlan', {
          screen: 'OurPlanDetails',
          params: route?.params?.screenParams,
        });
      }
      const isActive = 'true';
      dispatch(getServicesThunk({}));
      dispatch(allAppointmentThunk({isActive}));
      dispatch(popularPackageNameThunk({pageNo: 1, pageSize: 4, search: ''}));
      dispatch(popularTestsSliceThunk({pageNo: 1, pageSize: 4, search: ''}));
      dispatch(lifeStyleSliceThunk({}));
      if (loggedIn === 'loggedIn') {
        dispatch(getCartUserThunk());
      } else {
        dispatch(getCartGuestThunk());
      }
    }
  }, [focused, loggedIn]);
  return {name};
};
