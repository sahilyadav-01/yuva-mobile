import React from 'react';
import {View, TouchableOpacity, TextInput} from 'react-native';
import SelectList from 'react-native-dropdown-select-list';
import {
  DD_MM_YYYY,
  SELECT_GENDER,
  ADDRESS_1,
  CITY,
  PINCODE,
} from '../../constant';
import styles from './style';
import {DARK_BLUE} from '../../../../styles/colors';
import {getDateText} from '../../../../utils/utils';

const UserDetails = ({
  setSelectedGender,
  gender,
  openPicker,
  data,
  date,
  userDetails,
  edit,
  name,
  addressLine1,
  city,
  pinCode,
  changeName,
  changeAddress,
  changeCity,
  changePincode,
  setSelectedCity,
  cityNames,
}) => {
  const {userImage, textInputStyle, separatorStyle, dropdownBoxStyle} = styles({
    disabled: false,
  });
  const mockData = {
    email: userDetails.email,
    phoneNumber: userDetails.number,
    name: userDetails.name,
    organisation: userDetails.companyName,
    address: userDetails.address,
    city: userDetails.city,
    pinCode: userDetails.pinCode,
  };
  return (
    <>
      <View style={userImage}></View>
      <TextInput
        value={mockData.email}
        editable={false}
        style={textInputStyle}
      />
      <TextInput
        value={mockData.phoneNumber}
        editable={false}
        style={textInputStyle}
      />
      {!edit ? (
        <TextInput
          value={gender}
          editable={false}
          style={textInputStyle}
          placeholder={SELECT_GENDER}
        />
      ) : (
        <>
          <SelectList
            setSelected={arg => setSelectedGender(arg, data)}
            search={false}
            data={data}
            placeholder={gender ?? SELECT_GENDER}
            boxStyles={dropdownBoxStyle}
            inputStyles={gender ? {color: DARK_BLUE} : undefined}
          />
          <View style={separatorStyle} />
        </>
      )}
      {!edit ? (
        <TextInput
          value={getDateText(new Date(userDetails.dob))}
          editable={false}
          style={textInputStyle}
          placeholder={DD_MM_YYYY}
        />
      ) : (
        <TouchableOpacity onPress={openPicker}>
          <TextInput
            placeholder={DD_MM_YYYY}
            value={getDateText(date)}
            editable={false}
            style={textInputStyle}
          />
        </TouchableOpacity>
      )}
      <TextInput
        onChangeText={changeName}
        value={name}
        style={textInputStyle}
        editable={edit}
      />
      {mockData.organisation && (
        <TextInput
          value={mockData.organisation}
          editable={false}
          style={textInputStyle}
        />
      )}
      <TextInput
        placeholder={ADDRESS_1}
        value={mockData.address ?? addressLine1}
        editable={edit}
        style={textInputStyle}
        onChangeText={changeAddress}
      />
      {cityNames &&
        (!edit ? (
          <TextInput
            value={city}
            editable={false}
            style={textInputStyle}
            placeholder={CITY}
          />
        ) : (
          <>
            <SelectList
              setSelected={arg => {
                setSelectedCity(arg, cityNames);
              }}
              search={false}
              data={cityNames.map(item => {
                return {...item, value: JSON.parse(item.value).name};
              })}
              placeholder={CITY}
              boxStyles={dropdownBoxStyle}
              inputStyles={cityNames ? {color: DARK_BLUE} : undefined}
            />
            <View style={separatorStyle} />
          </>
        ))}
      <TextInput
        placeholder={PINCODE}
        value={mockData.pinCode ?? pinCode}
        editable={edit}
        style={{...textInputStyle, marginBottom: 32}}
        onChangeText={changePincode}
      />
    </>
  );
};

export default UserDetails;
