import {useIsFocused, useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {cityIdThunk} from '../../../store/reducers/DiagnosticsSlice';
import {
  addRelation,
  profileThunk,
  getActiveRelations,
  updateProfile,
  getRelations,
  profileLock,
} from '../../../store/reducers/ProfileSlice';

export const useProfile = () => {
  const dispatch = useDispatch();
  const {
    profile,
    auth,
    diagnostic: {cityId},
  } = useSelector(state => state);
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
  const [addressLine1, setAddressLine1] = useState('');
  const [city, setCity] = useState('');
  const [pinCode, setPincode] = useState('');
  const [cityData, setCityData] = useState(null);
  const [selectedCityId, setSelectedCityId] = useState(null);
  const [enableLockButton, setEnableLockButton] = useState(false);

  useEffect(() => {
    if (navigation.isFocused()) {
      dispatch(profileThunk());
      dispatch(getRelations());
      dispatch(getActiveRelations());
      dispatch(cityIdThunk());
    }
  }, [focused, auth.loggedIn, reloadScreenCount]);

  useEffect(()=>{
    if(date && gender && addressLine1 && city && pinCode && focused)
    setEnableLockButton(true);
  },[date,gender,addressLine1,city,pinCode,focused])

  useEffect(() => {
    if (cityId) {
      setCityData(
        cityId.map((item, index) => {
          return {key: index.toString(), value: JSON.stringify(item)};
        }),
      );
    }
  }, [cityId]);

  useEffect(() => {
    if (profile.dataUpdated) {
      setEdit(false);
      dispatch(profileThunk());
    }
  }, [profile.dataUpdated]);

  useEffect(() => {
    if (profile.relationAdded) {
      setDependentAge('');
      setDependentName('');
      setDependentRelation('');
      setAddMembers(false);
      setRelationSelected(false);
      dispatch(getRelations());
      dispatch(getActiveRelations());
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
      setAddressLine1(profile.userDetails.address ?? '');
      setCity(profile.userDetails.cityName ?? '');
      setSelectedCityId(profile.userDetails.cityId);
      setPincode(profile.userDetails.pinCode ?? '');
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

  const setSelectedCity = (arg, data) => {
    const selectedCity = JSON.parse(
      data.find(item => arg.toString() === item.key).value,
    );
    setCity(selectedCity.name);
    setSelectedCityId(selectedCity.id);
  };

  const addMemberToList = () => {
    if (!date || !gender || !addressLine1 || !city || !pinCode)
      Alert.alert(
        'Alert',
        'Please save DOB, Gender, Address, City and Pin code details',
      );
    else if (profile.activeRelations.length === 0)
      Alert.alert('Alert', 'No active relations left');
    else if (!profile.enableAddMember) Alert.alert('Alert', 'Please add plans');
    else setAddMembers(true);
  };

  const editDetails = () => setEdit(true);

  const openPicker = () => setPicker(true);

  const closePicker = () => setPicker(false);

  const changeName = value => setName(value);

  const changeAddress = value => setAddressLine1(value);

  const changeCity = value => setCity(value);

  const changePincode = value => setPincode(value);

  const onSelect = () => setRelationSelected(true);

  const setSelectedRelation = arg => {
    setDependentRelation(
      relationsData.find(item => arg.toString() === item.key).value,
    );
  };

  const onDependentNameChange = name => setDependentName(name);

  const onDependentAgeChange = age => setDependentAge(age);

  const updateUserData = () => {
    const dob = Date.parse(date).toString();
    const pinCheck = /^\d+$/;
    if (!date || !gender || !addressLine1 || !city || !pinCode) {
      Alert.alert('Alert', 'Please fill the details');
    } else if (
      !pinCheck.test(pinCode) ||
      !(pinCode.toString().trim().length === 6)
    )
      Alert.alert('Alert', 'Please enter a valid Pin Code');
    else {
      setUserDetails(null);
      dispatch(
        updateProfile({
          dob,
          gender,
          address: addressLine1,
          cityId: selectedCityId,
          pinCode,
        }),
      );
    }
  };

  const onRetryPress = () => setReloadScreenCount(reloadScreenCount + 1);

  return {
    onAddMembersPress,
    onConfirmDate,
    setSelectedGender,
    setSelectedCity,
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
    userDetails,
    name,
    loading: profile.loading,
    activeRelations: profile.activeRelations,
    relationSelected,
    relationsData,
    addressLine1,
    city,
    pinCode,
    cityData,
    onRetryPress,
    changeAddress,
    changeCity,
    changePincode,
    showErrorMessage:
      profile.userDetailsErrorMessage ||
      profile.relationsErrorMessage ||
      profile.activeRelationsErrorMessage,
    profileLocked: profile.profileUpdated,
    enableLockButton,
    profileGender: profile?.userDetails?.gender
  };
};
