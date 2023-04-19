import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Alert} from 'react-native';
import {
  addRelation,
  getActiveRelations,
  getRelations,
} from '../../../../../../store/reducers/ProfileSlice';
import {programAndPlanLockThunk} from '../../../../../../store/reducers/PurchasesSlice';

export const useFooter = (planDetails) => {
  const dispatch = useDispatch();
  const {
    relationsLoading,
    activeRelationsLoading,
    activeRelationsError,
    relationsError,
    activeRelations,
    relations,
    relationAdded,
  } = useSelector(state => state.profile);
  const [details, setDetails] = useState('');
  const [planLockView, setPlanLockView] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [addMember, setAddMember] = useState(false);
  const [dependents, setDependents] = useState([]);

  useEffect(() => {
    if (details === '') setPlanLockView(false);
    else {
      dispatch(getRelations({uuid: details?.uuid, version: details?.version}));
      dispatch(
        getActiveRelations({uuid: details?.uuid, version: details?.version}),
      );
    }
  }, [details]);

  useEffect(() => {
    if (!relationsLoading && !relationsError && details !== '' && !addMember) {
      setDependents(relations);
      setPlanLockView(!planLockView);
    } else if (!relationsLoading && !relationsError && addMember) {
      setAddMember(false);
      setDependents(relations);
      setModalVisible(false);
    }
  }, [relationsLoading, relations, relationsError]);

  useEffect(() => {
    if (relationAdded && details !== '') {
      setAddMember(true);
      dispatch(getRelations({uuid: details?.uuid, version: details?.version}));
      dispatch(
        getActiveRelations({uuid: details?.uuid, version: details?.version}),
      );
    }
  }, [relationAdded]);

  const onToggle = item => {
    details !== '' ? setDetails('') : setDetails(item);
  };

  const onAddMembersPress = () => {
    if(planDetails?.locked){
      Alert.alert('Alert','Cannot add any further members as plan has been locked')
    }
    else if (activeRelationsLoading && !activeRelationsError && activeRelations) {
      Alert.alert('Alert', 'Relations being fetched. Please try again');
    } else if (
      !activeRelationsLoading &&
      !activeRelationsError &&
      activeRelations.length === 0
    ) {
      Alert.alert('Alert', 'No Active relations left for this plan');
    } else if (!activeRelationsLoading && activeRelationsError) {
      Alert.alert('Alert', 'Network Error. Unable to fetch relatives');
    } else if (
      !activeRelationsLoading &&
      !activeRelationsError &&
      activeRelations.length > 0
    ) {
      setModalVisible(true);
    }
  };

  const onCrossPress = () => setModalVisible(false);

  const onSaveDetailsPress = arg => {
    dispatch(
      addRelation({
        name: arg?.name,
        age: arg?.age,
        relation: arg?.selectedRelationEnum,
      }),
    );
  };

  const onCheckboxPress = arrIndex => {
    setDependents(
      dependents.map((item, index) => {
        if (index === arrIndex) {
          return {...item, status: item?.status ? false : true};
        }
        return item;
      }),
    );
  };

  const onLockPlan = item => {
    if(planDetails?.locked){
      Alert.alert('Alert','Plan has been locked')
    }

    else if(dependents.filter(item=>{if(item?.status) return item}).length === 0){
      Alert.alert('Alert','Please select members')
    }
    else {
      Alert.alert('Alert', 'Are you sure want to lock the plan?', [
        {
          text: 'OK',
          onPress: () => lockPlan(item),
        },
        {text: 'Cancel'},
      ]);
    }
  };

  const lockPlan = item => {
    dispatch(
      programAndPlanLockThunk({
        programOrPlanUuid: item.uuid,
        relationId: dependents.filter(item=>{if(item?.status) return item}).map(item => item.id),
        version: item.version,
        userVersion: item.userVersion
      }),
    );
  };

  return {
    planLockView,
    onToggle,
    onAddMembersPress,
    modalVisible,
    onCrossPress,
    dependents,
    onSaveDetailsPress,
    relations,
    activeRelations,
    onCheckboxPress,
    onLockPlan,
  };
};
