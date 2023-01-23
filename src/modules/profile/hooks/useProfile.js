import {useIsFocused, useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  addRelation,
  profileThunk,
  getActiveRelations,
  updateProfile,
  getRelations,
} from '../../../store/reducers/ProfileSlice';

export const useProfile = () => {
  const dispatch = useDispatch();
  const {profile, auth} = useSelector(state => state);
  const jwt = auth.user.jwt ?? null;
  const focused = useIsFocused();
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [gender, setGender] = useState(null);
  const [date, setDate] = useState(null);
  const [picker, setPicker] = useState(false);
  const [edit, setEdit] = useState(false);
  const [addMembers, setAddMembers] = useState(false);
  const [relationSelected, setRelationSelected] = useState(false);
  const [userDetails, setUserDetails] = useState(null);
  const [dependentName, setDependentName] = useState('');
  const [dependentAge, setDependentAge] = useState('');
  const [dependentRelation, setDependentRelation] = useState('');
  const [reloadScreenCount, setReloadScreenCount] = useState(0);

  useEffect(() => {
    if (navigation.isFocused()) {
      dispatch(profileThunk());
      dispatch(getRelations());
      dispatch(getActiveRelations());
    }
  }, [focused, auth.loggedIn, reloadScreenCount]);

  useEffect(() => {
    if (profile.dataUpdated) {
      setEdit(false);
      jwt && dispatch(profileThunk());
    }
  }, [profile.dataUpdated]);

  useEffect(() => {
    if (profile.relationAdded) {
      setDependentAge('');
      setDependentName('');
      setDependentRelation('');
      setAddMembers(false);
      setRelationSelected(false);
      jwt && dispatch(getRelations());
      jwt && dispatch(getActiveRelations());
    }
  }, [profile.relationAdded]);

  useEffect(() => {
    if (profile.userDetails) {
      setUserDetails(profile.userDetails);
      setName(profile.userDetails.name);
      profile.userDetails.dob
        ? setDate(new Date(profile.userDetails.dob))
        : null;
      setGender(profile.userDetails.gender);
    }
  }, [profile]);

  const relationsData = profile.activeRelations.map((item, index) => {
    return {key: `${index + 1}`, value: item};
  });

  const onAddMembersPress = () => {
    if (!(dependentName && dependentAge && dependentRelation)) {
      Alert.alert('Alert', 'Please enter all the details');
    }
    dispatch(
      addRelation({
        age: dependentAge,
        name: dependentName,
        relation: dependentRelation,
      }),
    );
  };

  const onConfirmDate = date => {
    setDate(date);
    setPicker(false);
  };

  const setSelectedGender = (arg, data) => {
    const selectedGender = data.find(item => arg.toString() === item.key).value;
    setGender(selectedGender);
  };

  const addMemberToList = () => {
    if (!date || !gender)
      Alert.alert('Alert', 'Please save DOB and Gender details');
    else if (profile.activeRelations.length === 0)
      Alert.alert('Alert', 'No active relations left');
    else setAddMembers(true);
  };

  const editDetails = () => setEdit(true);

  const openPicker = () => setPicker(true);

  const closePicker = () => setPicker(false);

  const changeName = value => setName(value);

  const onSelect = () => setRelationSelected(true);

  const setSelectedRelation = arg => {
    setDependentRelation(
      relationsData.find(item => arg.toString() === item.key).value,
    );
  };

  const onDependentNameChange = name => setDependentName(name);

  const onDependentAgeChange = age => setDependentAge(age);

  const updateUserData = () => {
    if (!date || !gender) {
      Alert.alert('Alert', 'Please fill the details');
    } else {
      setUserDetails(null);
      dispatch(updateProfile({dob: Date.parse(date).toString(), gender}));
    }
  };

  const onRetryPress = () => setReloadScreenCount(reloadScreenCount + 1);

  return {
    onAddMembersPress,
    onConfirmDate,
    setSelectedGender,
    addMemberToList,
    editDetails,
    openPicker,
    closePicker,
    changeName,
    updateUserData,
    onSelect,
    setSelectedRelation,
    onDependentAgeChange,
    onDependentNameChange,
    picker,
    edit,
    gender,
    addMembers,
    dependents: profile.relations,
    date,
    picker,
    userDetails,
    name,
    loading: profile.loading,
    activeRelations: profile.activeRelations,
    relationSelected,
    relationsData,
    onRetryPress,
    showErrorMessage:
      profile.userDetailsErrorMessage ||
      profile.relationsErrorMessage ||
      profile.activeRelationsErrorMessage,
  };
};
