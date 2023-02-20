import React from 'react';
import {View, TextInput} from 'react-native';
import { SVG } from '../../../assets';
import { PALE_ORANGE } from '../../styles/colors';
import { styles } from './styles';

const Search = (props) => {
  const {onChangeText, placeholder, value} = props;
  return (
    <View style={styles.conatiner}>
      <SVG.SearchIcon />
      <TextInput 
        multiline={false}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={PALE_ORANGE}
        style={styles.textInputStyles}
        value={value}
        />
    </View>
  );
};

export default Search;