import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {programAndPlanThunk} from '../../../../../store/reducers/ProgramAndPlanSlice';
import { useIsFocused, useNavigation } from '@react-navigation/native';

export const usePackageCard = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const focused = useIsFocused();
  const {programAndPlan} = useSelector(state => state.programAndPlan);
  const {services} = useSelector(state => state.attribute);
  useEffect(() => {
    if (services?.length && services[0]?.id && navigation?.isFocused()) {
      const serviceUuid = services[0].id;
      dispatch(programAndPlanThunk({serviceUuid}));
    }
  }, [services, focused]);

  const bookNow = (plan, userVersion, uuid, version, locked) => {
    if(!locked) {
      navigation.navigate(plan ? 'PurchaseScreen' : 'MyCorporateProgram');
    }
    else {
    navigation.navigate('Doctor', {
      plan: plan,
      userVersion: userVersion,
      uuid: uuid,
      version: version,
    });
  }
  };
  return {
    programAndPlan,
    bookNow
  };
};
