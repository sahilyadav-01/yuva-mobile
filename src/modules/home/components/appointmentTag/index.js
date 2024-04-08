import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import moment from 'moment';
import { styles } from './style';
import { useAppointment } from './hooks/useAppointmentTag';
import { getDimensions } from '../../../../utils/utils';
import { PNG, SVG } from '../../../../../assets';
import { MARINER } from '../../../../styles/colors';

const {width} = getDimensions();
const AppointmentTag = () => {
  const {activeIndex, userAppointments, viewabilityConfigCallbackPairs, viewabilityConfig, onAppointmentReschedule, onAppointmentCancel } = useAppointment();
  const renderItem = ({item}) => {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Upcoming Appointment</Text>
        <Text style={styles.slotText}>{moment(new Date(item.slot)).format('MMMM')} {moment(new Date(item.slot)).format('DD')}, {moment(new Date(item.slot)).format('yyyy')} - {moment(new Date(item.slot)).format('hh-mm A')}</Text>
        <View style={styles.separator}/>
        <View style={styles.rowContainer}>
          <Image source={PNG.DoctorAppointment} style={{width:'22%'}}/>
       <View style={{marginLeft:12}}>
        <Text style={styles.nameText}>{item?.doctorName}</Text>
        <View style={styles.rowView}>
        <SVG.Location/>
        <Text style={[styles.slotText,{marginLeft:4}]}>Max Hospital, Partapganj</Text>
        </View>
        <View style={{height:2}}/>
        <View style={styles.row}>
        <SVG.Appointment/>
        <Text style={[styles.slotText,styles.bookingId]}>Booking ID : <Text style={[styles.bookingText]}>#1232335</Text></Text>
        </View>
       </View>
        </View>

        <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={()=>onAppointmentCancel(item)} style={styles.buttonRowContainer}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>onAppointmentReschedule(item)} style={{...styles.buttonRowContainer,backgroundColor:MARINER}}>
          <Text style={styles.buttonText}>Reschedule</Text>
        </TouchableOpacity>
       </View>
      </View>
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
