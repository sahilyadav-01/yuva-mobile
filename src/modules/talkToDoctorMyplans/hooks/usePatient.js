import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAppointmentThunk } from "../../../store/reducers/TalkToDoctorSlice";
import {checkPermission} from '../../../utils/utils';
import { PRESCRIPTION } from "../constant";

export const usePatient = () => {
  const dispatch = useDispatch();
  const {consultationList} = useSelector(state => state.talkToDoctor)
  useEffect(() => {
    dispatch(getAppointmentThunk());
  }, []);
  const navigation = useNavigation();

  const onPressNext = () => {
    navigation.navigate('HealthScreen');
  };

  const onConsult = () => {
    navigation.navigate('HealthScreen');
  };

  const onDownload = (path) => {
    checkPermission(path, PRESCRIPTION);
  }
  const onSelectMember=()=>{
    navigation.navigate("MemberSelectScreen");
  }

  return {
    onPressNext,
    consultationList,
    onDownload,
    onConsult,
    onSelectMember,
  };
};
