import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {BLACK} from '../../../../styles/colors';
import {styles} from './styles';

const CalenderContainer = props => {
  const {date, time} = props;
  return (
    <View style={styles.calenderContainer}>
      <Icon name={'calendar-blank-outline'} color={BLACK} size={20} />
      <View style={styles.view3}>
        <Text style={styles.dateText}>{date}</Text>
        <Text style={styles.timeText}>{time}</Text>
      </View>
    </View>
  );
};

export default CalenderContainer;
