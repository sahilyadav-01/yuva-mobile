import React from 'react';
import { View, TextInput } from 'react-native';
import { SVG } from '../../../assets';
import { PALE_ORANGE } from '../../styles/colors';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

const Search = (props) => {
  const { onChangeText, placeholder, value, isScreen } = props;
  const navigation = useNavigation();
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
        onFocus={() => {
          if (isScreen) {
            navigation.navigate('HomeSearch')
          }
        }}
        />
    </View>
  );
};

export default Search;