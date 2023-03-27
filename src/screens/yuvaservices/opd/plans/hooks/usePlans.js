import {useEffect} from 'react';

import {useDispatch} from 'react-redux';
import {resetTabBarVisible} from '../../../../../store/reducers/DoctorSlice';
export const usePlans = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetTabBarVisible(true));
  }, []);
  return {};
};
