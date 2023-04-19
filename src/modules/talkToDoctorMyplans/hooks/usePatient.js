import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Alert} from 'react-native';
import {programAndPlanThunk} from '../../../store/reducers/ProgramAndPlanSlice';
import {getAppointmentThunk, programOrPlanData} from '../../../store/reducers/TalkToDoctorSlice';

export const usePatient = () => {
  const dispatch = useDispatch();
  const {consultationList} = useSelector(state => state.talkToDoctor);
  const {programAndPlan} = useSelector(state => state.programAndPlan);

  useEffect(() => {
    dispatch(getAppointmentThunk());
  }, []);
  const {services} = useSelector(state => state.attribute);
  useEffect(() => {
    if (services?.length && services[3]?.id) {
      const serviceUuid = services[3].id;
      dispatch(programAndPlanThunk({serviceUuid}));
    }
  }, [services]);

  const navigation = useNavigation();
  const onConsult = (data) => {
    navigation.navigate('HealthScreen',{data:data,isScreen:"talkToDoctor"});
  };

  const onDownload = (path) => {
    checkPermission(path, PRESCRIPTION);
  }
  const onSelectMember=(data)=>{
    if(!data?.locked){
      navigation.navigate('PurchaseScreen')
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
