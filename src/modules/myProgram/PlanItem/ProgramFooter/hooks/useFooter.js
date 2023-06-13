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
  const [currentItem, setCurrentItem] = useState(null);
  const [toggleCount, setToggleCount] = useState(0);
  const [addedPlanDetails, setAddedPlanDetails] = useState('');
  const [planLocked, setPlanLocked] = useState(false);

  useEffect(() => {
    if (details === '') setPlanLockView(false);
    else 
      if (details !== '' && !planLockView) {
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
  }, [toggleCount]);

  useEffect(() => {
    if (
      !relationsLoading &&
      !relationsError &&
      details !== '' &&
      !addMember &&
      !planLockView
    )
      setCurrentItem(details);
    else if (
      addMember &&
      planLockView &&
      !relationsLoading &&
      !relationsError &&
      addedPlanDetails !== ''
    ) {
      setCurrentItem(addedPlanDetails);
      setAddMember(false);
      setModalVisible(false);
    } else if (
      planLocked &&
      planLockView &&
      !relationsLoading &&
      !relationsError &&
      addedPlanDetails !== ''
    ) {
      setCurrentItem(addedPlanDetails);
      setPlanLocked(false);
    }
  }, [relationsLoading, relations, relationsError]);

  useEffect(() => {
    if (currentItem !== null) {
      setDependents(relations);
      !planLockView && setPlanLockView(true);
    }
  }, [currentItem]);

  useEffect(() => {
    if (relationAdded) {
      setCurrentItem(null);
      setAddMember(true);
      dispatch(
        getRelations({
          uuid: addedPlanDetails?.uuid,check:'program'
        }),
      );
      dispatch(
        getActiveRelations({uuid: addedPlanDetails?.uuid,check:'program'}),
      );
    }
  }, [relationAdded]);

  useEffect(() => {
    if (planLockPress && !planLockLoading && !planLockError) {
      setPlanLockPress(false);
      setCurrentItem(null);
      dispatch(
        getRelations({
          uuid: planDetails?.uuid,check:'program'
        }),
      );
    } else if (planLockPress && !planLockLoading && planLockError) {
      setPlanLockPress(false);
    }
  }, [planLockPress, planLockLoading, planLockError]);
  const onToggle = item => {
    if (!planLockView) {
      setDetails(item);
      setToggleCount(toggleCount + 1);
    } else if (details !== '') {
      setPlanLockView(false);
      setCurrentItem(null);
    }
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
    setAddedPlanDetails(details);
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
      setPlanLocked(true);
      setAddedPlanDetails(item);
      dispatch(
        programAndPlanLockUserThunk({
          programOrPlanUuid: item.uuid,
          relationId
        }),
      );
      setPlanLockPress(true);
    }
  };
  const filteredRelation  = activeRelations.map((item, index) => {
    return {key: index.toString(), value: item.name, relation: item.id};
  });

  return {
    planLockView,
    onToggle,
    onAddMembersPress,
    modalVisible,
    onCrossPress,
    dependents,
    onSaveDetailsPress,
    relations,
    onCheckboxPress,
    onLockPlan,
    filteredRelation,
  };
};
