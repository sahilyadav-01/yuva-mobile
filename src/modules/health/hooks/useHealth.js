import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { profileThunk } from "../../../store/reducers/ProfileSlice";
import { addRequestThunk, clearRequest } from "../../../store/reducers/TalkToDoctorSlice";
import { CHAT_SCREEN, HEALTH_LIST } from "../constant";

export const useHealth = (route) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { userDetails } = useSelector(state => state.profile);
  const {isRequested,programData} = useSelector(state => state.talkToDoctor);
  const [selected, setSelected] = useState();
  const [description, setDescription] = useState('');
const {relationId,userId,data:relativeId}=route?.params;
  useEffect(() => {
    if(isRequested) {
      navigation.navigate(CHAT_SCREEN);
    }
    return () => dispatch(clearRequest());
  }, [isRequested]);
  useEffect(() => {
    dispatch(profileThunk());
  }, [])
  const onChange = (text) => {
    setDescription(text);
  }
  const onPressConsultation = () => {
    if(description && !isNaN(selected)) {
      const data = {
        description: description,
        healthConcern: HEALTH_LIST[selected]?.name || '',
        id:userId || userDetails?.id,
        relationId:relationId || relativeId?.relativeId,
        userId: '0',
      };
      dispatch(addRequestThunk({data}));
    };
  };
  return {
    selected,
    setSelected,
    onChange,
    description,
    onPressConsultation,
  }
};
