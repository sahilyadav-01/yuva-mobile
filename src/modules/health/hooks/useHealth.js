import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRequestThunk, clearRequest } from "../../../store/reducers/TalkToDoctorSlice";
import { HEALTH_LIST } from "../constant";

export const useHealth = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const {isRequested} = useSelector(state => state.talkToDoctor);
  const [selected, setSelected] = useState();
  const [description, setDescription] = useState('');

  useEffect(() => {
    if(isRequested) {
      navigation.navigate('ChatScreen');
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
