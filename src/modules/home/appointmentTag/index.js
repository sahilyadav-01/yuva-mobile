import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './style';
import {CONFIRM, DETAILS_DOCTOR, DETAILS_HOSPITAL, SCHEDULE_DATE, SCHEDULE_TIME, STATUS, UPCOMING_APPOINTMENT} from './constants';

const AppointmentTag = () => {

  return (
    <View style={styles.container}>
      <View style={[styles.borderStyle, styles.titleView]}>
        <Text style={styles.titleText}>{UPCOMING_APPOINTMENT}</Text>
      </View>
      <View style={[styles.detailsView, styles.borderStyle]}>
        <Text style={styles.textStyle}>{DETAILS_HOSPITAL}</Text>
        <Text style={styles.textStyle}>{DETAILS_DOCTOR}</Text>
      </View>
      <View style={[styles.scheduleView, styles.borderStyle]}>
        <Text style={styles.textStyle}>{SCHEDULE_DATE}</Text>
        <Text style={styles.textStyle}>{SCHEDULE_TIME}</Text>
      </View>
      <View style={[styles.borderStyle, styles.statusView]}>
        <Text style={styles.textStyle}>{STATUS}</Text>
        <Text style={styles.textStyle}>{CONFIRM}</Text>
      </View>
    </View>
  );
};

export default AppointmentTag;
