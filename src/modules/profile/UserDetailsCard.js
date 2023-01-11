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
  date
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
      />
      <ButtonContainer
        edit={edit}
        addMemberToList={addMemberToList}
        addMembers={addMembers}
        editDetails={editDetails}
      />
    </View>
  );
};
export default UserDetailsCard;
