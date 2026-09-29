import {useEffect, useState, useCallback} from 'react';
import {useNavigation} from '@react-navigation/core';
import {NEXT_SCREEN} from '../constant';
import {useDispatch} from 'react-redux';
import {clearExistingCartIds} from '../../../store/reducers/CartSlice';

export const useTimer = props => {
  const interval = props?.interval || 60;
  const resetCart = props?.resetCart ?? false;
  const resetEnable = isReset => props?.resetEnable(isReset);
  const [duration, setDuration] = useState(interval);
  const durationCallback = useCallback(
    () => setDuration(duration => duration - 1),
    [],
  );
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (duration === 0 && props.HRA) {
      resetCart && dispatch(clearExistingCartIds());
      navigation.navigate(NEXT_SCREEN);
    }
    duration > 0 && setTimeout(durationCallback, 1000);
    resetEnable(duration === 0);
  }, [duration, durationCallback, navigation, props.HRA]);

  let minutes = Math.floor(duration / 60);
  let seconds = duration % 60;

  minutes = minutes < 10 ? `0${minutes}` : minutes;
  seconds = seconds < 10 ? `0${seconds}` : seconds;

  return {
    duration,
    minutes,
    seconds,
  };
};
