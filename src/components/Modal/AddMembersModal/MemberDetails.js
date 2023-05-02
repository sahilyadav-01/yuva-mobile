import React from 'react';
import {Text, TextInput,View} from 'react-native';
import SelectList from 'react-native-dropdown-select-list';
import { DARK_GRAY } from '../../../styles/colors';
import {styles} from './style';

const MemberDetails = props => {
  const {listHeadingText, textInputStyle, itemContainer} = styles();
  const {item, onChangeText, relationsData, onItemSelect} = props;
  if (item?.type === 'input')
    return (
      <View style={itemContainer}>
        <Text style={listHeadingText}>{item?.heading}</Text>
        <TextInput
          onChangeText={text => onChangeText(text, item?.heading)}
          style={textInputStyle}
          placeholder={item?.placeholder}
          placeholderTextColor={DARK_GRAY}
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
          search={false}
          data={relationsData}
          boxStyles={textInputStyle}
          dropdownTextStyles={{color:DARK_GRAY}}
        />
      </View>
    );
};

export default MemberDetails;
