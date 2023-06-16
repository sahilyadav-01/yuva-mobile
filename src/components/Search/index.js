import React from 'react';
import { View, TextInput } from 'react-native';
import { SVG } from '../../../assets';
import { PALE_ORANGE } from '../../styles/colors';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

const Search = (props) => {
  const { onChangeText, placeholder, value, isScreen ,  editable,onSubmitEditing} = props;
  const navigation = useNavigation();
  const onSubmit=()=>{
    navigation.navigate('HomeSearchDetails',{item:onSubmitEditing})
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
        onPressIn={() => {
          if (isScreen) {
            navigation.navigate('HomeSearch')
          }
        }}
        />
    </View>
  );
};

export default Search;