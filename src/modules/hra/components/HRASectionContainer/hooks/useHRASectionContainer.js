import {useIsFocused, useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import { Alert, AppState } from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  resetHRA,
  resetHRAData,
  setCurrentHRAId,
} from '../../../../../store/reducers/HRASlice';
import {
  getRelations,
  profileThunk,
} from '../../../../../store/reducers/ProfileSlice';
import { getAge } from '../../../../../utils/utils';
import {ALERT, MIN_AGE, SECTION_1} from '../constant';

export const useHRASectionContainer = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [startHRA, setStartHRA] = useState(false);
  const [data, setData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const [checkBoxFlag, setCheckBoxFlag] = useState([]);
  const [checkBoxPress, setCheckBoxPress] = useState(0);
  const [checkBoxStatus, setCheckBoxStatus] = useState('unchecked');
  const [userData, setUserData] = useState(null);
  const [navigateToSection, setNavigateToSection] = useState(false);
  const dispatch = useDispatch();
  const focused = useIsFocused();
  const {userDetails, relations} = useSelector(state => state.profile);

  useEffect(()=>{
    const appStateListener = AppState.addEventListener('change',()=>{
      setModalVisible(modalVisible);
    });
    return () => {
      appStateListener.remove()
    }
  },[])
  useEffect(() => {
    if (focused) {
      setModalVisible(false);
      setCheckBoxStatus('unchecked');
      setCheckBoxFlag([]);
      setNavigateToSection(false);
      setStartHRA(false);
      setCheckBoxPress(0);
      setActiveIndex(null);
      dispatch(getRelations());
    }
  }, [focused]);
  useEffect(() => {
    if (startHRA && userDetails) {
      setData(
        relations.map((item, index) => {
          return {
            detailsText: `${item.name}  |  ${item.gender}  |  Age - ${item.age}`,
            relation: item.relation,
            onCheckBoxPress: () => {
              setActiveIndex(index);
              setCheckBoxPress(checkBoxPress + 1);
            },
            checkBoxStatus: checkBoxFlag[index]?.status ?? 'unchecked',
          };
        }),
      );
      dispatch(resetHRA());
      setModalVisible(true);
    }
  }, [userDetails, relations, startHRA, checkBoxFlag]);

  useEffect(() => {
    if (activeIndex !== null) {
      const status = relations.map((item, index) => {
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
      });
      parseInt(getAge(new Date(dob))) >=12 ? setNavigateToSection(true) : Alert.alert(ALERT,MIN_AGE);
    } else if (
      checkBoxFlag.length > 0 &&
      checkBoxFlag.filter(item => item.status === 'checked').length > 0
    ) {
      const {id, name, age, gender} =
        relations[checkBoxFlag.find(item => item.status === 'checked').index];
      setUserData({id, name, age, gender, genderId: gender === 'Male' ? 0 : 1});
      parseInt(age) >=12 ? setNavigateToSection(true) :  Alert.alert(ALERT,MIN_AGE);
    }
  }, [checkBoxStatus, checkBoxFlag]);

  useEffect(() => {
    if (navigateToSection && userData) {
      dispatch(setCurrentHRAId(userData.id ? parseFloat(userData?.id) : null));
      setModalVisible(false);
      navigation.navigate(SECTION_1, {
        userData,
        name: userData?.name,
        id: userData.id ? parseFloat(userData?.id) : null,
      });
    }
  }, [navigateToSection]);

  const openModal = () => {
    dispatch(resetHRAData());
    dispatch(profileThunk());
    setStartHRA(true);
  };

  const onPressCheckBox = () => {
    setCheckBoxStatus('checked');
    setCheckBoxFlag([]);
  };

  const onModalCrossPress = () => {
    setStartHRA(false);
    setModalVisible(false);
  };
  return {
    modalVisible,
    openModal,
    onModalCrossPress,
    onPressCheckBox,
    data,
    checkBoxStatus,
    userData,
  };
};
