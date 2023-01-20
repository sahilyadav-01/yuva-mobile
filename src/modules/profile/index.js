import React from 'react';
import {ScrollView,Text} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import AddDependentCard from './components/addDependent';
import Dependents from './components/dependents';
import {useProfile} from './hooks/useProfile';
import styles from './style';
import UserDetailsCard from './components/userDetailsCard';
import Header from '../../components/Header';

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
    setSelectedRelation,
    onDependentAgeChange,
    onDependentNameChange,
    relationSelected,
    relationsData,
  } = useProfile();

  
  const {container} = styles({disabled: false});

  if (!userDetails) {
    return null;
  }
  return (
    <>
    <Header isLoggedIn={true}/>
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
        onNameChange={onDependentNameChange}
        onAgeChange={onDependentAgeChange}
        onAddMember={onAddMembersPress}
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
    </>
  );
};

export default Profile;
