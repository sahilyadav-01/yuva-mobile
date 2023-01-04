import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAppointmentThunk } from "../../../store/reducers/TalkToDoctorSlice";
import {checkPermission} from '../../../utils/utils';
import { PRESCRIPTION } from "../constant";

export const usePatient = () => {
  const dispatch = useDispatch();
  const {jwt} = useSelector(state => state.auth.user);
  const {consultationList} = useSelector(state => state.talkToDoctor)
  useEffect(() => {
    dispatch(getAppointmentThunk({jwt}));
  }, []);
  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  };

  const onPressNext = () => {

  };

  const onConsult = () => {

  };

  const onDownload = (path) => {
    checkPermission(path, PRESCRIPTION);
  }

  return {
    goBack,
    onPressNext,
    consultationList,
    onDownload,
    onConsult,
  };
};
