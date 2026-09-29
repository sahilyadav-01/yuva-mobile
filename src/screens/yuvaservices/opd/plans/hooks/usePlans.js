import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {resetTabBarVisible} from '../../../../../store/reducers/DoctorSlice';
export const usePlans = () => {
  const dispatch = useDispatch();
  const {notificationRedirect} = useSelector(state => state.appointment);
  useEffect(() => {
    !notificationRedirect && dispatch(resetTabBarVisible(true));
  }, []);
  return {};
};
