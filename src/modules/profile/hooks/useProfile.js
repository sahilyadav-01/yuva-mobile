import {useState} from 'react';

export const useProfile = () => {
  const [gender, setGender] = useState(null);
  const [date, setDate] = useState(null);
  const [picker, setPicker] = useState(false);
  const [edit, setEdit] = useState(false);
  const [addMembers, setAddMembers] = useState(false);
  const [dependents, setDependents] = useState([]);

  const onAddMembersPress = details => {
    setAddMembers(false);
    setDependents(dependents.concat([details]));
  };

  const onConfirmDate = date => {
    setDate(date);
    setPicker(false);
  };

  const setSelectedGender = (arg, data) => {
    const selectedGender = data.find(item => arg.toString() === item.key).value;
    setGender(selectedGender);
  };

  const addMemberToList = () => setAddMembers(true);

  const editDetails = () => setEdit(true);

  const openPicker = () => setPicker(true);

  const closePicker = () => setPicker(false);

  return {
    onAddMembersPress,
    onConfirmDate,
    setSelectedGender,
    addMemberToList,
    editDetails,
    openPicker,
    closePicker,
    picker,
    edit,
    gender,
    addMembers,
    dependents,
    date,
    picker,
  };
};
