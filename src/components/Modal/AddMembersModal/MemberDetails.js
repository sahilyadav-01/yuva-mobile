import React from 'react';
import {Text, TextInput} from 'react-native';
import SelectList from 'react-native-dropdown-select-list';
import {styles} from './style';

const MemberDetails = props => {
  const {listHeadingText, textInputStyle} = styles();
  const {item, onChangeText, relationsData, onItemSelect} = props;
  if (item?.type === 'input')
    return (
      <>
        <Text style={listHeadingText}>{item?.heading}</Text>
        <TextInput
          onChangeText={text => onChangeText(text, item?.heading)}
          style={textInputStyle}
          placeholder={item?.placeholder}
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
          search={false}
          data={relationsData}
          boxStyles={textInputStyle}
        />
      </>
    );
};

export default MemberDetails;
