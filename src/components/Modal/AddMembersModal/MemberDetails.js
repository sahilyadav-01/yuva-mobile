import React from 'react';
import {Text, TextInput,View} from 'react-native';
import SelectList from 'react-native-dropdown-select-list';
import { BLACK, DARK_GRAY } from '../../../styles/colors';
import {styles} from './style';

const MemberDetails = props => {
  const {listHeadingText, textInputStyle, valueStyle, itemContainer, inputStyle} = styles();
  const {item, onChangeText, relationsData, onItemSelect} = props;
  if (item?.type === 'input')
    return (
      <View style={itemContainer}>
        <Text style={listHeadingText}>{item?.heading}</Text>
        <TextInput
          onChangeText={text => onChangeText(text, item?.heading)}
          style={textInputStyle}
          placeholder={item?.placeholder}
          placeholderTextColor={BLACK}
          value={item?.value}
          keyboardType={item?.keyboardType}
        />
      </View>
    );
  if (item?.type === 'picker')
    return (
      <View style={itemContainer}>
        <Text style={listHeadingText}>{item?.heading}</Text>
        <SelectList
          setSelected={onItemSelect}
          inputStyles={inputStyle}
          search={false}
          data={relationsData}
          boxStyles={textInputStyle}
          dropdownTextStyles={inputStyle}
        />
      </View>
    );
};

export default MemberDetails;
