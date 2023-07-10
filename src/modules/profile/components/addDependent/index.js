import React  from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import SelectList from 'react-native-dropdown-select-list';
import styles from './style';
import { DARK_BLUE, DARK_GRAY } from '../../../../styles/colors';
import { ADD_MEMBER, AGE, NAME, RELATIONSHIP } from '../../constant';
import { color } from 'react-native-reanimated';

const AddDependentCard = ({
  addMembers,
  relationsData,
  setSelectedRelation,
  onAddMember,
  onNameChange,
  onAgeChange,
  onSelect,
  relationSelected
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
          placeholderTextColor={DARK_GRAY}
          onChangeText={onNameChange}
          style={textInputStyle}
        />
        <TextInput
          placeholder={AGE}
          placeholderTextColor={DARK_GRAY}
          keyboardType="number-pad"
          onChangeText={onAgeChange}
          style={textInputStyle}
        />
        <>
          <SelectList
            setSelected={setSelectedRelation}
            search={false}
            data={relationsData.map(item=>{return {...item,value:item?.value?.name}})}
            placeholder={RELATIONSHIP}
            placeholderTextColor={DARK_GRAY}
            boxStyles={dropdownBoxStyle}
            inputStyles={{color: relationSelected ? DARK_BLUE : DARK_GRAY}}
            onSelect={onSelect}
            dropdownTextStyles={{color:DARK_GRAY}}
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
