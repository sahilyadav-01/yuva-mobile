import React from 'react';
import {View, TouchableOpacity, TextInput} from 'react-native';
import SelectList from 'react-native-dropdown-select-list';
import {DARK_BLUE} from '../../styles/colors';
import {getDateText} from '../../utils/utils';
import {DD_MM_YYYY, SELECT_GENDER} from './constant';
import styles from './style';

function UserDetails({setSelectedGender, gender, openPicker, data, date}) {
  const {userImage, textInputStyle, separatorStyle, dropdownBoxStyle} = styles({
    disabled: false,
  });
  const mockData = {
    email: 'abhishek.kumar@gmail.com',
    phoneNumber: '9999999999',
    name: 'Abhishek Kumar',
    organisation: 'Nineleaps Technology Solutions Pvt Ltd',
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
      <>
        <SelectList
          setSelected={arg => setSelectedGender(arg, data)}
          search={false}
          data={data}
          placeholder={SELECT_GENDER}
          boxStyles={dropdownBoxStyle}
          inputStyles={gender ? {color: DARK_BLUE} : undefined}
        />
        <View style={separatorStyle} />
      </>
      <TouchableOpacity onPress={openPicker}>
        <TextInput
          placeholder={DD_MM_YYYY}
          value={getDateText(date)}
          editable={false}
          style={textInputStyle}
        />
      </TouchableOpacity>
      <TextInput value={mockData.name} style={textInputStyle} />
      <TextInput
        value={mockData.organisation}
        editable={false}
        style={{...textInputStyle, marginBottom: 32}}
      />
    </>
  );
}

export default UserDetails;
