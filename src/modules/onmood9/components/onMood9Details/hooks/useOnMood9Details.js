import {useIsFocused, useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getRelations} from '../../../../../store/reducers/ProfileSlice';

export const useOnMood9Details = () => {
  const {loggedIn} = useSelector(state => state.auth);
  const {relationsError, relations, relationsLoading} = useSelector(
    state => state.profile,
  );
  const navigation = useNavigation();
  const focused = useIsFocused();
  const dispatch = useDispatch();
  const [fetchRelations, setFetchRelations] = useState(false);
  const [data, setData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [checkBoxFlag, setCheckBoxFlag] = useState([]);
  const [checkBoxPress, setCheckBoxPress] = useState(0);
  const [checkBoxStatus, setCheckBoxStatus] = useState('unchecked');
  useEffect(() => {
    if (navigation?.isFocused() && loggedIn === 'loggedIn') {
      setFetchRelations(true);
      dispatch(getRelations());
    }
  }, [focused]);
  useEffect(() => {
    if (
      fetchRelations &&
      !relationsLoading &&
      !relationsError &&
      relations?.length > 0
    ) {
      setFetchRelations(false);
      let relationsData = relations.map((item, index) => {
        return {
          ...item,
          detailsText: `${item?.name}  |  ${item?.gender}  | Age - ${item?.age}`,
          relation: `${item?.relation}`,
          checkBoxStatus: checkBoxFlag[index]?.status ?? 'unchecked',
          onCheckBoxPress: () => {
            setActiveIndex(index);
            setCheckBoxPress(checkBoxPress + 1);
          },
        };
      });
      setData(relationsData);
    }
  }, [relationsLoading, fetchRelations, relationsError, checkBoxFlag]);

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
      setFetchRelations(true);
    }
  }, [checkBoxPress]);

  useEffect(() => {
    if (data?.length > 0) {
      let checkedItem = data.filter(item => item?.checkBoxStatus === 'checked');
      if (checkedItem?.length > 0) {
        setModalVisible(false);
        setActiveIndex(null);
        setCheckBoxFlag([]);
        setCheckBoxPress(0);
        setCheckBoxStatus('unchecked');
        setData(
          data?.map(item => {
            return {...item, checkBoxStatus: 'unchecked'};
          }),
        );
        checkedItem?.length > 0 &&
          navigation.navigate('OnMood9', {id: checkedItem[0]?.id});
      }
    }
  }, [data]);

  useEffect(() => {
    if (checkBoxStatus === 'checked') {
      setModalVisible(false);
      setModalVisible(false);
      setActiveIndex(null);
      setCheckBoxFlag([]);
      setCheckBoxPress(0);
      setCheckBoxStatus('unchecked');
      setData(
        data?.map(item => {
          return {...item, checkBoxStatus: 'unchecked'};
        }),
      );
      navigation.navigate('OnMood9', {id: null});
    }
  }, [checkBoxStatus]);

  const onModalCrossPress = () => setModalVisible(false);

  const onPressCheckBox = () => {
    if (checkBoxStatus === 'unchecked') setCheckBoxStatus('checked');
    else if (checkBoxStatus === 'checked') setCheckBoxStatus('unchecked');
  };

  const onConsult = () => {
    if (loggedIn !== 'loggedIn')
      navigation.navigate('LoginScreen', {from: 'MentalWellness'});
    else if (loggedIn === 'loggedIn') setModalVisible(true);
  };
  return {
    onConsult,
    onModalCrossPress,
    data,
    modalVisible,
    checkBoxStatus,
    onPressCheckBox,
  };
};
