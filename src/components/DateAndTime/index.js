import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {DATE, SELECT_DATE_TIME, TIME} from './constant';
import {DARK_BLUE} from '../../styles/colors';
import {useDateAndTime} from './hooks/useDateAndTime';
import {DateTimePicker} from '@hashiprobr/react-native-paper-datetimepicker';

const DateAndTime = () => {
  const {handleDate, handleTime, date, time} = useDateAndTime();
  return (
    <View>
      <Text style={styles.TitleStyle}>{SELECT_DATE_TIME}</Text>
      <View style={styles.border}>
        <View style={styles.dateAndTime}>
          <Text style={styles.Date}>{DATE}</Text>
          <DateTimePicker
            type="date"
            value={date}
            onChangeDate={handleDate}
            style={styles.dateTimePicker}
            selectionColor={DARK_BLUE}
            theme={styles.theme}
            minimumDate={new Date()}
          />
        </View>

        <View style={styles.dateAndTime}>
          <Text tyle={styles.Time}>{TIME}</Text>
          <DateTimePicker
            type="time"
            value={time}
            onChangeDate={handleTime}
            style={styles.dateTimePicker}
            selectionColor={DARK_BLUE}
            theme={styles.theme}
          />
        </View>
      </View>
    </View>
  );
};

export default DateAndTime;
