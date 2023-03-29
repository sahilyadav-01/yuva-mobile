import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRequestThunk, clearRequest } from "../../../store/reducers/TalkToDoctorSlice";
import { CHAT_SCREEN, HEALTH_LIST } from "../constant";

export const useHealth = (route) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const {isRequested,programData} = useSelector(state => state.talkToDoctor);
  const [selected, setSelected] = useState();
  const [description, setDescription] = useState('');
const {relationId,userId}=route?.params;
  useEffect(() => {
    if(isRequested) {
      navigation.navigate(CHAT_SCREEN);
    }
    return () => dispatch(clearRequest());
  }, [isRequested]);

  const onChange = (text) => {
    setDescription(text);
  }
  const onPressConsultation = () => {
    if(description && !isNaN(selected)) {
      const data = {
        description: description,
        healthConcern: HEALTH_LIST[selected]?.name || '',
        id:userId,
        relationId:relationId,
        plan: programData?.plan,
        programOrPlanUuid:programData?.uuid,
        userPlanVersion: programData?.userVersion,
        version:programData?.version
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
