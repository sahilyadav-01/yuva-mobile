import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {DATE, SELECT_DATE_TIME, TIME} from './constant';
import {DARK_BLUE} from '../../styles/colors';
import {DateTimePicker} from '@hashiprobr/react-native-paper-datetimepicker';

const DateAndTime = props => {
  const {handleDate, handleTime, date, time} = props;
  return (
    <View>
      <Text style={styles.TitleStyle}>{SELECT_DATE_TIME}</Text>
      <View style={styles.border}>
        <View style={styles.dateAndTime}>
          <Text style={styles.Date}>{DATE}</Text>
          <DateTimePicker
            type="date"
            value={date}
            onChangeDate={date => handleDate(date)}
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
            onChangeDate={date => handleTime(date)}
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
