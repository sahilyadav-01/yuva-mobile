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

  const {
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
    dependents,
    date,
    userDetails,
    name,
    activeRelations,
    relationSelected,
  } = useProfile();

  const relationsData = activeRelations.map((item, index) => {
    return {key: `${index + 1}`, value: item};
  });

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

  if (!userDetails) {
    return null;
  }
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
        userDetails={userDetails}
        name={name}
        changeName={changeName}
        updateUserData={updateUserData}
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
        onSelect={onSelect}
        relationSelected={relationSelected}
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
