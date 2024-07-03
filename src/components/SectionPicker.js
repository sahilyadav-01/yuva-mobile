import React from 'react';
import { View, Text } from 'react-native';
import SelectList from 'react-native-dropdown-select-list';
import { useDispatch } from 'react-redux';
import { DARK_BLUE, DARK_GRAY, SLATE_GRAY, WHITE } from '../styles/colors';
import { CENTER } from '../styles/constants';

const SectionPicker = ({
  dispatcher,
  onSelect,
  data,
  text,
  defaultAnswer,
  questionId,
  callBack,
  headerStyle,
}) => {
  const dispatch = useDispatch();
  const setSelected = value => {
  dispatcher && dispatch(dispatcher({ key: questionId, value: value }));
  callBack && callBack(value);
  };
  return (
    <View className="mt-[20px]">
      <Text style={{color: SLATE_GRAY}} className="text-base mb-[8px]" >{text}</Text>
      <SelectList
        boxStyles={{
          backgroundColor: WHITE,
          borderRadius: 8,
          height: 50,
          borderWidth: 1,
          borderColor: DARK_BLUE,
          alignItems: CENTER,
        }}
        inputStyles={{color: SLATE_GRAY}}
        //placeholder={(defaultAnswer === undefined ||  defaultAnswer === '') ? '' : data[defaultAnswer].value}
        placeholder={defaultAnswer ?? ''}
        placeholderTextColor={DARK_GRAY}
        setSelected={setSelected}
        data={data}
        search={false}
        onSelect={onSelect}
        dropdownTextStyles={{color:DARK_GRAY}}
      />
    </View>
  );
};

export default SectionPicker;
