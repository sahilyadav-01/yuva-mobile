import {useIsFocused, useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  addRelation,
  getActiveRelations,
  getRelations,
} from '../../../../../store/reducers/ProfileSlice';

export const useOnMood9Details = () => {
  const {loggedIn} = useSelector(state => state.auth);
  const {
    relationsError,
    relations,
    relationsLoading,
    activeRelations,
    activeRelationsLoading,
    activeRelationsError,
    relationAdded
  } = useSelector(state => state.profile);
  const navigation = useNavigation();
  const focused = useIsFocused();
  const dispatch = useDispatch();
  const [fetchRelations, setFetchRelations] = useState(false);
  const [fetchActiveRelations, setFetchActiveRelations] = useState(false);
  const [data, setData] = useState([]);
  const [activeRelationsData, setActiveRelationsData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [activeRelationsModalVisible, setActiveRelationsModalVisible] =
    useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [checkBoxFlag, setCheckBoxFlag] = useState([]);
  const [checkBoxPress, setCheckBoxPress] = useState(0);
  const [checkBoxStatus, setCheckBoxStatus] = useState('unchecked');
  const [addButtonPress, setAddButtonPress] = useState(false);
  useEffect(() => {
    if (navigation?.isFocused() && loggedIn === 'loggedIn') {
      setFetchRelations(true);
      setFetchActiveRelations(true);
      dispatch(getRelations());
      dispatch(getActiveRelations());
    }
  }, [focused]);

  useEffect(() => {
    if (
      fetchActiveRelations &&
      !activeRelationsLoading &&
      !activeRelationsError &&
      activeRelations?.length > 0
    ) {
      setFetchActiveRelations(false);
      console.log('Active relations', activeRelations);
      let activeRelationData = activeRelations.map((item, index) => {
        return {
          ...item,
          key: index.toString(),
          value: item.name,
          relation: item.id,
        };
      });
      setActiveRelationsData(activeRelationData);
    }
  }, [
    activeRelationsLoading,
    activeRelations,
    activeRelationsError,
    fetchActiveRelations,
  ]);

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
      if(addButtonPress) {
        setAddButtonPress(false);
        setActiveRelationsModalVisible(false);
        setModalVisible(true);
      }
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

  useEffect(() => {
    if (activeRelationsModalVisible) {
      dispatch(getRelations());
      setAddButtonPress(true);
      setFetchRelations(true);
    }
  }, [relationAdded]);

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

  const onAddMembersPress = () => {
    setModalVisible(false);
    setActiveRelationsModalVisible(true);
  };

  const onAddModalCrossPress = () => setActiveRelationsModalVisible(false);

  const onSaveDetailsPress = arg => {
    dispatch(
      addRelation({
        name: arg?.name,
        age: arg?.age,
        relation: arg?.selectedRelationEnum,
      }),
    );
  };

  return {
    onConsult,
    onModalCrossPress,
    data,
    modalVisible,
    checkBoxStatus,
    onPressCheckBox,
    onAddMembersPress,
    activeRelationsData,
    activeRelationsModalVisible,
    onAddModalCrossPress,
    onSaveDetailsPress,
  };
};
