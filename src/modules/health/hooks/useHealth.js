import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRequestThunk } from "../../../store/reducers/TalkToDoctorSlice";
import { HEALTH_LIST } from "../constant";

export const useHealth = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const goBack = () => {
    navigation.goBack();
  };

  const {jwt} = useSelector(state => state.auth.user);
  const {isRequested} = useSelector(state => state.talkToDoctor);
  const [selected, setSelected] = useState();
  const [description, setDescription] = useState('');

  useEffect(() => {
    if(isRequested) {
      navigation.navigate('ChatScreen');
    }
  }, [isRequested]);

  const onChange = (text) => {
    setDescription(text);
  }
  const onPressConsultation = () => {
    if(description && selected) {
      const data = {
        description: description,
        healthConcern: HEALTH_LIST[selected]?.name || '',
      };
      dispatch(addRequestThunk({jwt, data}));
    };
  };
  return {
    goBack,
    selected,
    setSelected,
    onChange,
    description,
    onPressConsultation,
  }
};
