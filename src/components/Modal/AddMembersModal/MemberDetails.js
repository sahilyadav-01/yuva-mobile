import React from 'react';
import {Text, TextInput} from 'react-native';
import SelectList from 'react-native-dropdown-select-list';
import { DARK_GRAY } from '../../../styles/colors';
import {styles} from './style';

const MemberDetails = props => {
  const {listHeadingText, textInputStyle, valueStyle} = styles();
  const {item, onChangeText, relationsData, onItemSelect} = props;
  if (item?.type === 'input')
    return (
      <>
        <Text style={listHeadingText}>{item?.heading}</Text>
        <TextInput
          onChangeText={text => onChangeText(text, item?.heading)}
          style={textInputStyle}
          placeholder={item?.placeholder}
          placeholderTextColor={DARK_GRAY}
          value={item?.value}
          keyboardType={item?.keyboardType}
        />
      </>
    );
  if (item?.type === 'picker')
    return (
      <>
        <Text style={listHeadingText}>{item?.heading}</Text>
        <SelectList
          setSelected={onItemSelect}
          inputStyles={valueStyle}
          search={false}
          data={relationsData}
          boxStyles={textInputStyle}
          dropdownTextStyles={{color:DARK_GRAY}}
        />
      </>
    );
};

export default MemberDetails;
