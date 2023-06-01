import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Alert} from 'react-native';
import {
  addRelation,
  getActiveRelations,
  getRelations,
} from '../../../../../store/reducers/ProfileSlice';
import {
  ALERT,
  CANCEL,
  CANNOT_ADD_MEMBERS,
  CHILDREN_ALERT,
  DAUGHTER,
  ERROR_TEXT,
  LOCK_PLAN,
  NO_RELATIONS,
  OK,
  PLAN_LOCKED,
  PLEASE_SELECT_MEMBERS,
  SON,
  TRY_AGAIN,
} from '../constants';
import { programAndPlanLockUserThunk } from '../../../../../store/reducers/ProgramAndPlanSlice';

export const useFooter = planDetails => {
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
  const {lockedState,planLockLoading,planLockError} = useSelector(state => state.programAndPlan);
  const [details, setDetails] = useState('');
  const [planLockView, setPlanLockView] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [addMember, setAddMember] = useState(false);
  const [dependents, setDependents] = useState([]);
  const [planLockPress, setPlanLockPress] = useState(false);

  useEffect(() => {
    if (details === '') setPlanLockView(false);
    else {
      dispatch(
        getRelations({
          uuid: details?.uuid,check:'program'
        }),
      );
      dispatch(
        getActiveRelations({uuid: details?.uuid,check:'program'
        }),
      );
    }
  }, [details]);

  useEffect(() => {
    if (!relationsLoading && !relationsError && details !== '' && !addMember) {
      setDependents(relations);
      !planLockView && setPlanLockView(true);
    } else if (!relationsLoading && !relationsError && addMember) {
      setAddMember(false);
      setDependents(relations);
      setModalVisible(false);
    }
  }, [relationsLoading, relations, relationsError]);

  useEffect(() => {
    if (relationAdded && details !== '') {
      setAddMember(true);
      dispatch(
        getRelations({
          uuid: details?.uuid,check:'program'
        }),
      );
      dispatch(
        getActiveRelations({uuid: details?.uuid,check:'program'}),
      );
    }
  }, [relationAdded]);

  useEffect(()=>{
    if(planLockPress && !planLockLoading && !planLockError){
      setPlanLockPress(false);
      dispatch(
        getRelations({
          uuid: planDetails?.uuid,check:'program'
        }),
      );
    }
    else if(planLockPress && !planLockLoading && planLockError) {
      setPlanLockPress(false);
    }
  },[planLockPress,planLockLoading,planLockError])

  const onToggle = item => {
    details !== '' ? setDetails('') : setDetails(item);
  };

  const onAddMembersPress = () => {
    if (
      planDetails?.locked ||
      lockedState.filter(item => {
        if (
          item?.uuid === planDetails?.uuid 
        ) {
          return item;
        }
      }).length > 0
    ) {
      Alert.alert(ALERT, CANNOT_ADD_MEMBERS);
    } else if (
      activeRelationsLoading &&
      !activeRelationsError &&
      activeRelations
    ) {
      Alert.alert(ALERT, TRY_AGAIN);
    } else if (
      !activeRelationsLoading &&
      !activeRelationsError &&
      activeRelations.length === 0
    ) {
      Alert.alert(ALERT, NO_RELATIONS);
    } else if (!activeRelationsLoading && activeRelationsError) {
      Alert.alert(ALERT, ERROR_TEXT);
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
    if (
      planDetails?.locked ||
      lockedState.filter(item => {
        if (
          item?.uuid === planDetails?.uuid
        ) {
          return item;
        }
      }).length > 0
    ) {
      Alert.alert(ALERT, PLAN_LOCKED);
    } else {
      Alert.alert(ALERT, LOCK_PLAN, [
        {
          text: OK,
          onPress: () => lockPlan(item),
        },
        {text: CANCEL},
      ]);
    }
  };

  const lockPlan = item => {
    const checkedList = dependents.filter(item => {
      if (item?.status) return item;
    });
    const relationId = checkedList.map(item => item.id);
    const relations = checkedList.map(item => item.relation);
    const childrenCount = relations.filter(item => {
      if (item === SON || item === DAUGHTER) return item;
    }).length;
    if (childrenCount > planDetails?.childrenCount)
      Alert.alert(ALERT, CHILDREN_ALERT(planDetails?.childrenCount));
    else {
      dispatch(
        programAndPlanLockUserThunk({
          programOrPlanUuid: item.uuid,
          relationId
        }),
      );
      setPlanLockPress(true);
    }
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
