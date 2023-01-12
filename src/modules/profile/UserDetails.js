import React from 'react';
import {View, TouchableOpacity, TextInput} from 'react-native';
import SelectList from 'react-native-dropdown-select-list';
import {DARK_BLUE} from '../../styles/colors';
import {getDateText} from '../../utils/utils';
import {DD_MM_YYYY, SELECT_GENDER} from './constant';
import styles from './style';

function UserDetails({
  setSelectedGender,
  gender,
  openPicker,
  data,
  date,
  userDetails,
  edit,
  name,
  changeName
}) {
  const {userImage, textInputStyle, separatorStyle, dropdownBoxStyle} = styles({
    disabled: false,
  });
  const mockData = {
    email: userDetails.email,
    phoneNumber: userDetails.number,
    name: userDetails.name,
    organisation: userDetails.companyName,
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
      <TextInput onChangeText={changeName} value={name} style={textInputStyle} editable={edit}/>
      <TextInput
        value={mockData.organisation}
        editable={false}
        style={{...textInputStyle, marginBottom: 32}}
      />
    </>
  );
}

export default UserDetails;
