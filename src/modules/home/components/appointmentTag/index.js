import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import moment from 'moment';
import { styles } from './style';
import { DATE, TIME, STATUS, UPCOMING_APPOINTMENT} from './constants';
import { useAppointment } from './hooks/useAppointmentTag';
import { getCalendarValue, getDimensions } from '../../../../utils/utils';
import { PNG, SVG } from '../../../../../assets';
import { MARINER } from '../../../../styles/colors';

const {width} = getDimensions();
const AppointmentTag = () => {
  const {activeIndex, userAppointments, viewabilityConfigCallbackPairs, viewabilityConfig, onAppointment } = useAppointment();
  const renderItem = ({item, index}) => {
    const {date, time} = getCalendarValue(item?.slot)
    const onAppointmentPress = () => onAppointment(item);
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Upcoming Appointment</Text>
        <Text style={styles.slotText}>{moment(new Date(item.slot)).format('MMMM')} {moment(new Date(item.slot)).format('DD')}, {moment(new Date(item.slot)).format('yyyy')} - {moment(new Date(item.slot)).format('hh-mm A')}</Text>
        <View style={styles.separator}/>
        <View style={styles.rowContainer}>
          <Image source={PNG.DoctorAppointment} style={{width:'22%'}}/>
       <View style={{marginLeft:12}}>
        <Text style={styles.nameText}>{item?.doctorName}</Text>
        <View style={{flexDirection:'row',alignItems:'center'}}>
        <SVG.Location/>
        <Text style={[styles.slotText,{marginLeft:4}]}>Max Hospital, Partapganj</Text>
        </View>
        <View style={{height:2}}/>
        <View style={{flexDirection:'row'}}>
        <SVG.Appointment/>
        <Text style={[styles.slotText,{marginLeft:4,textAlignVertical:'center'}]}>Booking ID : <Text style={[styles.bookingText]}>#1232335</Text></Text>
        </View>
       </View>
        </View>

        <View style={{marginTop:12,flexDirection:'row',justifyContent:'space-between'}}>
        <TouchableOpacity style={{borderRadius:6,padding:12,justifyContent:'center',alignItems:'center',backgroundColor:'#8DBFFF',flex:1,marginRight:20}}>
          <Text>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{borderRadius:6,padding:12,justifyContent:'center',alignItems:'center',backgroundColor:MARINER,flex:1}}>
          <Text>Reschedule</Text>
        </TouchableOpacity>
       </View>
      </View>
    );
    // return (
    //   <TouchableOpacity style={styles.container} key={index} onPress={onAppointmentPress}>
    //     <View style={[styles.borderStyle, styles.titleView]}>
    //       <Text style={styles.titleText}>{UPCOMING_APPOINTMENT}</Text>
    //     </View>
    //     <View style={[styles.detailsView, styles.borderStyle]}>
    //       <Text style={styles.textStyle}>{item?.hospitalName}</Text>
    //       <Text style={styles.textStyle}>{item?.doctorName}</Text>
    //     </View>
    //     <View style={[styles.scheduleView, styles.borderStyle]}>
    //       <Text style={styles.textStyle}>{`${DATE}${date}`}</Text>
    //       <Text style={styles.textStyle}>{`${TIME}${time}`}</Text>
    //     </View>
    //     <View style={[styles.borderStyle, styles.statusView]}>
    //       <Text style={styles.textStyle}>{STATUS}</Text>
    //       <Text style={styles.textStyle}>{item?.status}</Text>
    //     </View>
    //   </TouchableOpacity>
    // );

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
        style={{backgroundColor:'blue'}}
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
