import React from 'react';
import {View, TextInput} from 'react-native';
import {BLACK} from '../../styles/colors';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {SVG} from '../../../assets';

const Search = props => {
  const {
    onChangeText,
    placeholder,
    value,
    isScreen,
    isSearch,
    editable,
    onSubmitEditing,
    searchStyle,
  } = props;
  const navigation = useNavigation();
  const onSubmit = (isSearch, onSubmitEditing) => {
    if (isSearch && onSubmitEditing?.trim()?.length > 2) {
      navigation.navigate('HomeSearchDetails', {item: onSubmitEditing.trim()});
    }
  };
  const onPress = isScreen => {
    if (isScreen) {
      navigation.navigate('HomeSearch');
    }
  };
  return (
    <View style={styles.container}>
      <SVG.SEARCH_NETWORK_SEARCH_ICON />
      <TextInput
        onSubmitEditing={() => onSubmit(isSearch, onSubmitEditing)}
        editable={editable}
        multiline={false}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={BLACK}
        style={[styles.textInputStyles, searchStyle]}
        value={value}
        onPressIn={() => onPress(isScreen)}
      />
    </View>
  );
};

export default Search;
