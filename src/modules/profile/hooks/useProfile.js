import {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addRelation, getProfile, getActiveRelations, updateProfile, getRelations} from '../../../store/reducers/ProfileSlice';

export const useProfile = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const jwt = state.auth.user.jwt ?? null;
  const [name, setName] = useState('');
  const [gender, setGender] = useState(null);
  const [date, setDate] = useState(null);
  const [picker, setPicker] = useState(false);
  const [edit, setEdit] = useState(false);
  const [addMembers, setAddMembers] = useState(false);
  const [relationSelected, setRelationSelected] = useState(false);
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    jwt && dispatch(getProfile({jwt}));
    jwt && dispatch(getRelations({jwt}));
    jwt && dispatch(getActiveRelations({jwt}));
  }, []);

  useEffect(() => {
    if(state.profile.dataUpdated)
    jwt && dispatch(getProfile({jwt}));
  } ,[state.profile.dataUpdated])

  useEffect(() => {
    if(state.profile.relationAdded)
    jwt && dispatch(getRelations({jwt}));
  } ,[state.profile.relationAdded])

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

  const onAddMembersPress = ({name,age,relation}) => {
    if(!name || !age || !relation){
      Alert.alert("Alert", 'Please enter all the details')
    }
    dispatch(addRelation({jwt,age,name,relation}))
    setAddMembers(false);
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
    setAddMembers(true);
  }

  const editDetails = () => setEdit(true);

  const openPicker = () => setPicker(true);

  const closePicker = () => setPicker(false);

  const changeName = value => setName(value);

  const onSelect = () => setRelationSelected(true);

  const updateUserData = () => {
    setUserDetails(null);
    dispatch(updateProfile({jwt, dob: Date.parse(date).toString(), gender, userDetails}));
  }

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
    picker,
    edit,
    gender,
    addMembers,
    dependents:state.profile.relations,
    date,
    picker,
    userDetails,
    name,
    loading:state.profile.loading,
    activeRelations:state.profile.activeRelations,
    relationSelected
  };
};
