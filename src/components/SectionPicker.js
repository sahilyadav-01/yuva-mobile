import React, { useState } from 'react';
import { View, Text } from 'react-native';
import SelectList from 'react-native-dropdown-select-list';
import { useDispatch } from 'react-redux';

const SectionPicker = ({
  dispatcher,
  onSelect,
  data,
  text,
  defaultAnswer,
  questionId,
}) => {
  const dispatch = useDispatch();
  const setSelected = value => {
    dispatch(dispatcher({ key: questionId, value: value }));
  };
  return (
    <View className="mt-[20px]">
      <Text style={{ textAlign: 'justify' }} className="text-base mb-[8px]" >{text}</Text>
      <SelectList
        boxStyles={{
          backgroundColor: 'white',
          borderRadius: 8,
          height: 50,
          borderWidth: 1,
          borderColor: '#1D2334',
        }}
        //placeholder={(defaultAnswer === undefined ||  defaultAnswer === '') ? '' : data[defaultAnswer].value}
        placeholder={defaultAnswer === undefined ? defaultAnswer === '' : ''}
        setSelected={setSelected}
        data={data}
        search={false}
        onSelect={onSelect}
      />
    </View>
  );
};

export default SectionPicker;
