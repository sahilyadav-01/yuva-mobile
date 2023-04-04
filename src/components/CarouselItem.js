import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import CardButton from './CardButton';
import {getDimensions} from '../utils/utils';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {currentAppointment} from '../store/reducers/AppointmentSlice';
import {
  CANCEL_APPOINTMENT,
  CLOCK_OUTLINE,
  CLOSE,
  RESCHEDULE,
} from './constants';
import {CYAN_BLUE} from '../styles/colors';
import {styles} from './styles';

const CarouselItem = props => {
  const {item, index, totalItem,isScreen} = props;
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const viewAppointment = () => {
    dispatch(
      currentAppointment({
        doctorName: item?.doctorName,
        address: item?.address,
        status: item?.status,
        speciality: item?.speciality,
        description: item?.description,
        slot: item?.slot,
        otp: item?.otp,
        hospitalName: item?.hospitalName,
        relation: item?.relation,
        memberName: item?.memberName,
        customId: item?.customId,
      }),
    );
    navigation.navigate('ViewAppointment', {
      headerShown: true,
    });
  };

  return (
    <View>
      {isScreen!== "OurPlan" ?
    <TouchableOpacity onPress={viewAppointment}>
      <View
        style={[
          styles.carView,
          {
            marginLeft: index === 0 ? 0 : 10,
            marginRight: index === totalItem - 1 ? 0 : 10,
          },
        ]}>
        <View style={styles.overallView}>
          <View style={styles.StatusAndDoctorStyle}>
            <Text style={styles.carDoctorNameText}>{item?.status}</Text>
            <Text style={styles.carDoctorNameText}>{item?.doctorName}</Text>
          </View>
          <View>
            <Text style={styles.HospitalName}>{item?.hospitalName}</Text>
          </View>
          <View style={styles.ButtonStyle}>
            <CardButton
              text={RESCHEDULE}
              iconName={CLOCK_OUTLINE}
              iconColor={CYAN_BLUE}
              textStyle={styles.CancelReschedule}
              containerStyle={styles.RescheduleCancel}
            />
            <CardButton
              text={CANCEL_APPOINTMENT}
              iconName={CLOSE}
              iconColor={CYAN_BLUE}
              textStyle={styles.CancelReschedule}
              containerStyle={styles.RescheduleCancel}
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>:
    <View
    style={[
      styles.cartView,
      {
        marginLeft: index === 0 ? 0 : 10,
        marginRight: index === totalItem - 1 ? 0 : 10,
      },
    ]}><View>
           <Image
           source={item?.Image}
           style={styles.ImageCarousel}
         />
    </View>
        <Text style={styles.OurplanText}>{item?.Text}</Text>
  </View>
  }
    </View>
  );
};

export default CarouselItem;
