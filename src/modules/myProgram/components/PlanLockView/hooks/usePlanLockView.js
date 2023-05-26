import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

export const usePlanLockView = planDetails => {
  const {lockedState} = useSelector(state => state.purchases);
  const [lock, setLock] = useState(false);
  useEffect(() => {
    if (
      lockedState.filter(item => {
        if (
          item?.uuid === planDetails?.uuid &&
          item?.version === planDetails?.version &&
          item?.userVersion === planDetails?.userVersion
        ) {
          return item;
        }
      }).length > 0
    ) {
      setLock(true);
    }
  }, [lockedState]);
  return {lock};
};