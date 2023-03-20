
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import { Alert } from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  getRelations, profileThunk,
} from '../../../../../store/reducers/ProfileSlice';
import { getAge } from '../../../../../utils/utils';
import { ALERT, HEALTH_SCREEN, MYSELF, PLEASE_SELECT_MEMBER } from '../constants';

export const useMemberSelect = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [startConsultation, setStartConsultation] = useState(false);
  const [data, setData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const [checkBoxFlag, setCheckBoxFlag] = useState([]);
  const [checkBoxPress, setCheckBoxPress] = useState(0);
  const [checkBoxStatus, setCheckBoxStatus] = useState('unchecked');
  const [userData, setUserData] = useState(null);
  const dispatch = useDispatch();
  const focused = useIsFocused();
  const {userDetails, relations} = useSelector(state => state.profile);

  useEffect(() => {
    if (focused) {
      setModalVisible(false);
      setCheckBoxStatus('unchecked');
      setCheckBoxFlag([]);
      setStartConsultation(false);
      setCheckBoxPress(0);
      setActiveIndex(null);
    }
  }, [focused]);
  useEffect(() => {
    if (startConsultation && userDetails && relations?.length > 0) {
      setData(
        relations?.map((item, index) => {
          return {
            detailsText: `${item?.name}  |  ${item?.gender}  |  Age - ${item?.age}`,
            relation: item?.relation,
            onCheckBoxPress: () => {
              setActiveIndex(index);
              setCheckBoxPress(checkBoxPress + 1);
            },
            checkBoxStatus: checkBoxFlag[index]?.status ?? 'unchecked',
          };
        }),
      );
      setModalVisible(true);
    }
  }, [userDetails, relations,startConsultation, checkBoxFlag]);

  useEffect(() => {
    if (activeIndex !== null) {
      const status = relations?.map((item, index) => {
        if (activeIndex === index) {
          let status =
            !checkBoxFlag[index]?.status ||
            checkBoxFlag[index].status === 'unchecked'
              ? 'checked'
              : 'unchecked';
          return {index, status};
        } else return {index, status: 'unchecked'};
      });
      setCheckBoxFlag(status);
      setCheckBoxStatus('unchecked');
    }
  }, [checkBoxPress]);

  useEffect(() => {
    if (checkBoxStatus === 'checked') {
      const {name, dob, gender} = userDetails;
      setUserData({
        id: null,
        name,
        age:getAge(new Date(dob)),
        gender,
        genderId: gender === 'Male' ? 0 : 1,
        relation:MYSELF,
      });
    } else if (
      checkBoxFlag.length > 0 &&
      checkBoxFlag.filter(item => item.status === 'checked').length > 0
    ) {
      const {id, name, age, gender,relation} =
        relations[checkBoxFlag.find(item => item.status === 'checked').index];
      setUserData({id, name, age, gender, genderId: gender === 'Male' ? 0 : 1,relation});
    }
  }, [checkBoxStatus, checkBoxFlag]);

useEffect(()=>{
  dispatch(profileThunk());
  dispatch(getRelations());
  setStartConsultation(true);
},[])
  const openModal = () => {
    dispatch(profileThunk());
    dispatch(getRelations());
    setStartConsultation(true);
  };
  const onPressCheckBox = () => {
    setCheckBoxStatus('checked');
    setCheckBoxFlag([]);
    
  };
   const onModalCrossPress = () => {
      setModalVisible(false);
       setStartConsultation(false);
  };
  const onPress=()=>{
    navigation.navigate(HEALTH_SCREEN,userData);
  }
  return {
    modalVisible,
    openModal,
    onModalCrossPress,
    onPressCheckBox,
    data,
    checkBoxStatus,
    userData,
    onPress
  };
};

