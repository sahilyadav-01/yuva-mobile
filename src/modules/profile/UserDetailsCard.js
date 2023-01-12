import React from 'react';
import {View} from 'react-native';
import ButtonContainer from './ButtonContainer';
import UserDetails from './UserDetails';
import styles from './style';

const UserDetailsCard = ({
  setSelectedGender,
  gender,
  openPicker,
  edit,
  addMemberToList,
  addMembers,
  editDetails,
  data,
  date,
  userDetails,
  name,
  changeName,
  updateUserData
}) => {
  const {scrollViewContainer} = styles({disabled: false});
  return (
    <View
      showsVerticalScrollIndicator={false}
      bounces={false}
      style={scrollViewContainer}>
      <UserDetails
        setSelectedGender={setSelectedGender}
        gender={gender}
        openPicker={openPicker}
        data={data}
        date={date}
        userDetails={userDetails}
        edit={edit}
        name={name}
        changeName={changeName}
      />
      <ButtonContainer
        edit={edit}
        addMemberToList={addMemberToList}
        addMembers={addMembers}
        editDetails={editDetails}
        updateUserData={updateUserData}
      />
    </View>
  );
};
export default UserDetailsCard;
