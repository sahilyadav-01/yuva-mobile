import React from 'react';
import {View, TextInput} from 'react-native';
import {SVG} from '../../../assets';
import {PALE_ORANGE} from '../../styles/colors';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';

const Search = props => {
  const {
    onChangeText,
    placeholder,
    value,
    isScreen,
    isSearch,
    editable,
    onSubmitEditing,
  } = props;
  const navigation = useNavigation();
  const onSubmit = () => {
    if (isSearch && onSubmitEditing?.trim()?.length>2) {
      navigation.navigate('HomeSearchDetails', {item: onSubmitEditing.trim()});
    }
  };
const onPress=()=>{
  if (isScreen) {
    navigation.navigate('HomeSearch');
  }
}
  return (
    <View style={styles.conatiner}>
      <SVG.SearchIcon />
      <TextInput
        onSubmitEditing={onSubmit}
        editable={editable}
        multiline={false}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={PALE_ORANGE}
        style={styles.textInputStyles}
        value={value}
        onPressIn={onPress}
      />
    </View>
  );
};

export default Search;