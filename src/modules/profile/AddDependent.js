import React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import SelectList from 'react-native-dropdown-select-list';
import { DARK_BLUE } from '../../styles/colors';
import { ADD_MEMBER, AGE, NAME, RELATIONSHIP } from './constant';
import styles from './style';

const AddDependentCard = ({
  addMembers,
  relationsData,
  setSelectedRelation,
  gender,
  onAddMember,
  onNameChange,
  onAgeChange,
}) => {
  const {
    scrollViewContainer,
    saveDetailsButton,
    textInputStyle,
    saveButtonText,
    separatorStyle,
    dropdownBoxStyle,
  } = styles({disabled: false});
  return (
    addMembers && (
      <View style={scrollViewContainer}>
        <TextInput
          placeholder={NAME}
          onChangeText={onNameChange}
          style={textInputStyle}
        />
        <TextInput
          placeholder={AGE}
          keyboardType="number-pad"
          onChangeText={onAgeChange}
          style={textInputStyle}
        />
        <>
          <SelectList
            setSelected={setSelectedRelation}
            search={false}
            data={relationsData}
            placeholder={RELATIONSHIP}
            boxStyles={dropdownBoxStyle}
            inputStyles={gender ? {color: DARK_BLUE} : undefined}
          />
          <View style={separatorStyle} />
        </>
        <TouchableOpacity onPress={onAddMember} style={saveDetailsButton}>
          <Text style={saveButtonText}>{ADD_MEMBER}</Text>
        </TouchableOpacity>
      </View>
    )
  );
};

export default AddDependentCard;
