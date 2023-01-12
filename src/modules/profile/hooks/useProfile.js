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
  const state = useSelector(state => state);
  const jwt = state.auth.user.jwt ?? null;
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

  useEffect(() => {
    navigation.addListener('focus', () => {
      jwt && dispatch(profileThunk({jwt}));
      jwt && dispatch(getRelations({jwt}));
      jwt && dispatch(getActiveRelations({jwt}));
    });
  }, [focused]);

  useEffect(() => {
    if (state.profile.dataUpdated) {
      setEdit(false);
      jwt && dispatch(profileThunk({jwt}));}
  }, [state.profile.dataUpdated]);

  useEffect(() => {
    if (state.profile.relationAdded) {
      setDependentAge('');
      setDependentName('');
      setDependentRelation('');
      setAddMembers(false);
      setRelationSelected(false);
      jwt && dispatch(getRelations({jwt}));
      jwt && dispatch(getActiveRelations({jwt}));
    }
  }, [state.profile.relationAdded]);

  useEffect(() => {
    if (state.profile.userDetails) {
      setUserDetails(state.profile.userDetails);
      setName(state.profile.userDetails.name);
      state.profile.userDetails.dob
        ? setDate(new Date(state.profile.userDetails.dob))
        : null;
      setGender(state.profile.userDetails.gender);
    }
  }, [state.profile]);

  const relationsData = state.profile.activeRelations.map((item, index) => {
    return {key: `${index + 1}`, value: item};
  });

  const onAddMembersPress = () => {
    if (!(dependentName && dependentAge && dependentRelation)) {
      Alert.alert('Alert', 'Please enter all the details');
    }
    dispatch(
      addRelation({
        jwt,
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
    if(!date || !gender)
    Alert.alert('Alert','Please save DOB and Gender')
    else if(state.profile.activeRelations.length === 0)
    Alert.alert('Alert','No active relations left')
    else
    setAddMembers(true);
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
    if(!date || !gender){
      Alert.alert('Alert','Please fill the details');
    }
    else {
    setUserDetails(null);
    dispatch(
      updateProfile({
        jwt,
        dob: Date.parse(date).toString(),
        gender,
        userDetails,
      }),
    );
    }
  };

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
    dependents: state.profile.relations,
    date,
    picker,
    userDetails,
    name,
    loading: state.profile.loading,
    activeRelations: state.profile.activeRelations,
    relationSelected,
    relationsData,
  };
};
