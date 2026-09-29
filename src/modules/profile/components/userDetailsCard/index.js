import React from 'react';
import {View} from 'react-native';
import ButtonContainer from '../buttonContainer';
import UserDetails from '../userDetails';
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
  addressLine1,
  city,
  pinCode,
  updateUserData,
  changeAddress,
  changeCity,
  changePincode,
  setSelectedCity,
  cityNames,
  profileGender,
  onPickerPress,
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
        addressLine1={addressLine1}
        city={city}
        pinCode={pinCode}
        changeName={changeName}
        changeAddress={changeAddress}
        changeCity={changeCity}
        changePincode={changePincode}
        setSelectedCity={setSelectedCity}
        cityNames={cityNames}
        profileGender={profileGender}
        onPickerPress={onPickerPress}
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
