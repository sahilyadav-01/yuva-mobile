import {useIsFocused, useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  getRelations,
  profileThunk,
} from '../../../../../store/reducers/ProfileSlice';
import {getAge} from '../../../../../utils/utils';
import {CHECKED, HEALTH_SCREEN, MALE, MYSELF, UNCHECKED} from '../constants';

export const useMemberSelect = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [startConsultation, setStartConsultation] = useState(false);
  const [data, setData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const [checkBoxFlag, setCheckBoxFlag] = useState([]);
  const [checkBoxPress, setCheckBoxPress] = useState(0);
  const [checkBoxStatus, setCheckBoxStatus] = useState(UNCHECKED);
  const [userData, setUserData] = useState(null);
  const dispatch = useDispatch();
  const focused = useIsFocused();
  const {userDetails, relations} = useSelector(state => state.profile);

  useEffect(() => {
    if (focused) {
      setModalVisible(false);
      setCheckBoxStatus(UNCHECKED);
      setCheckBoxFlag([]);
      setStartConsultation(false);
      setCheckBoxPress(0);
      setActiveIndex(null);
      dispatch(getRelations());
    }
  }, [focused]);
  useEffect(() => {
    if (startConsultation && userDetails) {
      setData(
        relations?.map((item, index) => {
          return {
            detailsText: `${item?.name}  |  ${item?.gender}  |  Age - ${item?.age}`,
            relation: item?.relation,
            onCheckBoxPress: () => {
              setActiveIndex(index);
              setCheckBoxPress(checkBoxPress + 1);
            },
            checkBoxStatus: checkBoxFlag[index]?.status ?? UNCHECKED,
          };
        }),
      );
      setModalVisible(true);
    }
  }, [relations, startConsultation, checkBoxFlag, userDetails]);
  useEffect(() => {
    if (activeIndex !== null) {
      const status = relations?.map((item, index) => {
        if (activeIndex === index) {
          let status =
            !checkBoxFlag[index]?.status ||
            checkBoxFlag[index].status === UNCHECKED
              ? CHECKED
              : UNCHECKED;
          return {index, status};
        } else {
          return {index, status: UNCHECKED};
        }
      });
      setCheckBoxFlag(status);
      setCheckBoxStatus(UNCHECKED);
    }
  }, [checkBoxPress]);

  useEffect(() => {
    if (checkBoxStatus === CHECKED) {
      const {name, dob, gender, id} = userDetails;
      setUserData({
        userId: id,
        name,
        age: getAge(new Date(dob)),
        gender,
        genderId: gender === MALE ? 0 : 1,
        relation: MYSELF,
        relationId: null,
      });
      setModalVisible(false);
    } else if (
      checkBoxFlag.length > 0 &&
      checkBoxFlag.filter(item => item.status === CHECKED).length > 0
    ) {
      const {id, name, age, gender, relation} =
        relations[checkBoxFlag.find(item => item.status === CHECKED).index];
      setUserData({
        relationId: id,
        name,
        age,
        gender,
        genderId: gender === MALE ? 0 : 1,
        relation,
        userId: userDetails?.id,
      });
      setModalVisible(false);
    }
  }, [checkBoxStatus, checkBoxFlag]);

  const openModal = () => {
    dispatch(profileThunk());
    setStartConsultation(true);
  };
  const onPressCheckBox = () => {
    setCheckBoxStatus(CHECKED);
    setCheckBoxFlag([]);
  };
  const onModalCrossPress = () => {
    setModalVisible(false);
    setStartConsultation(false);
  };
  const onPress = () => {
    navigation.navigate(HEALTH_SCREEN, userData);
  };
  return {
    modalVisible,
    openModal,
    onModalCrossPress,
    onPressCheckBox,
    data,
    checkBoxStatus,
    userData,
    onPress,
  };
};
