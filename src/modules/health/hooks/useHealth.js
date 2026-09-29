import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {profileThunk} from '../../../store/reducers/ProfileSlice';
import {CHAT_SCREEN, HEALTH_LIST} from '../constant';

export const useHealth = route => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [selected, setSelected] = useState();
  const [description, setDescription] = useState('');
  const {relationId, userId, data: relativeId} = route?.params;
  useEffect(() => {
    dispatch(profileThunk());
  }, []);
  const onChange = text => {
    setDescription(text);
  };
  const onPressConsultation = () => {
    if (description && !isNaN(selected)) {
      const data = {
        description: description,
        healthConcern: HEALTH_LIST[selected]?.name || '',
        relationId: relationId || relativeId?.relativeId,
        userId: userId || '0',
      };
      navigation.navigate(CHAT_SCREEN, {data});
    }
  };
  return {
    selected,
    setSelected,
    onChange,
    description,
    onPressConsultation,
  };
};
