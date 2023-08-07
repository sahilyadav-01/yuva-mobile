import {useIsFocused, useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {programAndPlanThunk} from '../../../store/reducers/ProgramAndPlanSlice';
import {getAppointmentThunk, programOrPlanData} from '../../../store/reducers/TalkToDoctorSlice';

export const usePatient = () => {
  const dispatch = useDispatch();
  const {consultationList} = useSelector(state => state.talkToDoctor);
  const {programAndPlan} = useSelector(state => state.programAndPlan);
  const focused = useIsFocused();
  const navigation = useNavigation();

  useEffect(() => {
    if(navigation?.isFocused())
    dispatch(getAppointmentThunk());
  }, [focused]);
  const {services} = useSelector(state => state.attribute);
  useEffect(() => {
    if (services?.length && services[3]?.id && navigation?.isFocused()) {
      const serviceUuid = services[3].id;
      dispatch(programAndPlanThunk({serviceUuid}));
    }
  }, [services,focused]);

  const onConsult = (data) => {
    navigation.navigate('HealthScreen',{data:data,isScreen:"talkToDoctor"});
  };

  const onDownload = (path) => {
    checkPermission(path, PRESCRIPTION);
  }
  const onSelectMember=(data)=>{
    if(!data?.locked){
      navigation.navigate(data?.plan ? 'PurchaseScreen' : 'MyCorporateProgram');
    }
    else {
    dispatch(programOrPlanData(data))
    navigation.navigate("MemberSelectScreen");
    }
  }
  return {
    consultationList,
    onConsult,
    onSelectMember,
    programAndPlan,
  };
};
