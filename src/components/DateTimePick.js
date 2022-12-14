import React, {useState} from 'react';
import {View, Text} from 'react-native';

const DateTimePick = ({dateLabel, onChange}) => {
  const finDate = dateLabel.toLowerCase();
  const [date, setDate] = useState(new Date());
  const change = value => {
    setDate(value);
    onChange(value);
  };
  return (
    <View className="mt-{40px}">
      <Text>{date}</Text>
      {/* //   <DateTimePickerModal
    //     type={`${finDate}`}
    //     value={date}
    //     style={{backgroundColor: '#FFFFF', color: '#1D2334'}}
    //     selectionColor="#1D2334"
    //     theme={{colors: {text: 'black'}}}
    //     onChangeDate={change}
    //   /> */}
    </View>
  );
};

export default DateTimePick;
