import {useIsFocused, useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { resetHRA, resetHRAData } from '../../../../../store/reducers/HRASlice';
import {
  getRelations,
  profileThunk,
} from '../../../../../store/reducers/ProfileSlice';
import {SECTION_1} from '../constant';

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

  useEffect(() => {
    if (startHRA && userDetails && relations.length > 0) {
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
      const {id, name, age, gender} = userDetails;
      setUserData({id, name, age, gender, genderId: gender === 'Male' ? 0 : 1});
      setNavigateToSection(true);
    } else if (
      checkBoxFlag.length > 0 &&
      checkBoxFlag.filter(item => item.status === 'checked').length > 0
    ) {
      const {id, name, age, gender} =
        relations[checkBoxFlag.find(item => item.status === 'checked').index];
      setUserData({id, name, age, gender, genderId: gender === 'Male' ? 0 : 1});
      setNavigateToSection(true);
    }
  }, [checkBoxStatus, checkBoxFlag]);

  useEffect(() => {
    if (navigateToSection && userData)
      navigation.navigate(SECTION_1, {userData});
  }, [navigateToSection]);

  const openModal = () => {
    dispatch(resetHRAData());
    dispatch(profileThunk());
    dispatch(getRelations());
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
