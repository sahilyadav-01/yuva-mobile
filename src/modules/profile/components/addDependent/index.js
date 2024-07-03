import React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import SelectList from 'react-native-dropdown-select-list';
import styles from './style';
import {BLACK, DARK_BLUE, DARK_GRAY} from '../../../../styles/colors';
import {ADD_MEMBER, AGE, NAME, RELATIONSHIP} from '../../constant';
import {color} from 'react-native-reanimated';

const AddDependentCard = ({
  addMembers,
  relationsData,
  setSelectedRelation,
  onAddMember,
  onNameChange,
  onAgeChange,
  onSelect,
  relationSelected,
}) => {
  const {
    scrollViewContainer,
    saveDetailsButton,
    textInputStyle,
    saveButtonText,
    separatorStyle,
    dropdownBoxStyle,
    inputStyle,
  } = styles({disabled: false});

  return (
    addMembers && (
      <View style={scrollViewContainer}>
        <TextInput
          placeholder={NAME}
          placeholderTextColor={BLACK}
          onChangeText={onNameChange}
          style={textInputStyle}
        />
        <TextInput
          placeholder={AGE}
          placeholderTextColor={BLACK}
          keyboardType="number-pad"
          onChangeText={onAgeChange}
          style={textInputStyle}
        />
        <SelectList
          setSelected={setSelectedRelation}
          search={false}
          data={relationsData.map(item => {
            return {...item, value: item?.value?.name};
          })}
          placeholder={RELATIONSHIP}
          placeholderTextColor={BLACK}
          boxStyles={dropdownBoxStyle}
          inputStyles={inputStyle}
          onSelect={onSelect}
          dropdownTextStyles={inputStyle}
        />
        <TouchableOpacity onPress={onAddMember} style={saveDetailsButton}>
          <Text style={saveButtonText}>{ADD_MEMBER}</Text>
        </TouchableOpacity>
      </View>
    )
  );
};

export default AddDependentCard;
