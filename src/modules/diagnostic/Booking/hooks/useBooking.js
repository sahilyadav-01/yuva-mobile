import {useIsFocused, useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  bookingTestAndPackageThunk,
  resetState,
} from '../../../../store/reducers/DiagnosticsSlice';

export const useBooking = () => {
  const dispatch = useDispatch();
  const homeRefresh = useSelector(state => state.appointment.homeRefresh);
  const navigation = useNavigation();
  const focused = useIsFocused();
  useEffect(() => {
    if (navigation.isFocused()) {
      dispatch(resetState());
      dispatch(bookingTestAndPackageThunk());
    }
  }, [focused, homeRefresh]);

  const {bookedData} = useSelector(state => state.diagnostic);
  return {
    bookedData,
  };
};
