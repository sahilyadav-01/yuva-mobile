import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { styles } from './style';
import { DATE, TIME, STATUS, UPCOMING_APPOINTMENT} from './constants';
import { useAppointment } from './hooks/useAppointmentTag';
import { getCalendarValue, getDimensions } from '../../../../utils/utils';

const {width} = getDimensions();
const AppointmentTag = () => {
  const {activeIndex, userAppointments, viewabilityConfigCallbackPairs, viewabilityConfig, onAppointment } = useAppointment();
  const renderItem = ({item, index}) => {
    const {date, time} = getCalendarValue(item?.slot)
    const onAppointmentPress = () => onAppointment(item);
    return (
      <TouchableOpacity style={styles.container} key={index} onPress={onAppointmentPress}>
        <View style={[styles.borderStyle, styles.titleView]}>
          <Text style={styles.titleText}>{UPCOMING_APPOINTMENT}</Text>
        </View>
        <View style={[styles.detailsView, styles.borderStyle]}>
          <Text style={styles.textStyle}>{item?.hospitalName}</Text>
          <Text style={styles.textStyle}>{item?.doctorName}</Text>
        </View>
        <View style={[styles.scheduleView, styles.borderStyle]}>
          <Text style={styles.textStyle}>{`${DATE}${date}`}</Text>
          <Text style={styles.textStyle}>{`${TIME}${time}`}</Text>
        </View>
        <View style={[styles.borderStyle, styles.statusView]}>
          <Text style={styles.textStyle}>{STATUS}</Text>
          <Text style={styles.textStyle}>{item?.status}</Text>
        </View>
      </TouchableOpacity>
    );
  }
  const renderDots = ({items, index}) => {
    return (
      <View style={[styles.dotView, activeIndex ===index && styles.activeView]} key={index} />
    );
  }
  return (
    <View style={styles.mainView}>
      <FlatList 
        data={userAppointments}
        renderItem={renderItem}
        keyExtractor={(item, index) => `${index}`}
        key={(item, index) => index}
        snapToAlignment={'start'}
        snapToInterval={width - 1}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
        viewabilityConfig={viewabilityConfig}
      />
      { userAppointments?.length > 1 &&
        <FlatList
          data={userAppointments}
          renderItem={renderDots}
          keyExtractor={(item, index) => `${index}`}
          key={(item, index) => index}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      }
    </View>
  );
};

export default AppointmentTag;
