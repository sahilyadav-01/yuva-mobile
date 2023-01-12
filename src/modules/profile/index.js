import React from 'react';
import {ScrollView} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import AddDependentCard from './AddDependent';
import Dependents from './Dependents';
import {useProfile} from './hooks/useProfile';
import styles from './style';
import UserDetailsCard from './UserDetailsCard';

const Profile = () => {
  const data = [
    {key: '1', value: 'Male'},
    {key: '2', value: 'Female'},
  ];
  const relationsData = [
    {key: '1', value: 'Father'},
    {key: '2', value: 'Mother'},
    {key: '3', value: 'Sister'},
  ];

  const {
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
  } = useProfile();

  const {container} = styles({disabled: false});

  let temporaryDetails = {name: '', age: '', gender: '', relation: ''};

  const onAddMember = () => {
    onAddMembersPress(temporaryDetails);
    temporaryDetails = {name: '', age: '', gender: '', relation: ''};
  };

  const setSelectedRelation = arg => {
    temporaryDetails['relation'] = relationsData.find(
      item => arg.toString() === item.key,
    ).value;
    temporaryDetails['gender'] = 'Male';
  };

  return (
    <ScrollView style={container}>
      <UserDetailsCard
        setSelectedGender={setSelectedGender}
        gender={gender}
        openPicker={openPicker}
        edit={edit}
        addMemberToList={addMemberToList}
        addMembers={addMembers}
        editDetails={editDetails}
        data={data}
        date={date}
      />
      <Dependents dependents={dependents} />
      <AddDependentCard
        onNameChange={text => (temporaryDetails['name'] = text)}
        onAgeChange={age => (temporaryDetails['age'] = age)}
        onAddMember={onAddMember}
        gender={gender}
        setSelectedRelation={setSelectedRelation}
        relationsData={relationsData}
        addMembers={addMembers}
      />
      <DateTimePickerModal
        date={date ?? new Date()}
        isVisible={picker}
        mode={'date'}
        onCancel={closePicker}
        onConfirm={onConfirmDate}
      />
    </ScrollView>
  );
};

export default Profile;
