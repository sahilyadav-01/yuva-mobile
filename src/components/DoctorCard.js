import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {newAppointment} from '../store/reducers/AppointmentSlice';
import {PNG, SVG} from '../../assets';
import {styles} from './styles';
import {BOOK_APPOINTMENT, YEARS_EXP} from './constants';
const DoctorCard = ({
  doctorId,
  name,
  specialization,
  address,
  rating,
  exp,
  img,
  qual,
  plan,
  userVersion,
  uuid,
  version,
  hospital,
}) => {
  const params = {
    Doctor: name,
    Specialization: specialization,
    plan: plan,
    userVersion: userVersion,
    uuid: uuid,
    version: version,
  };
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const bookAppointment = () => {
    dispatch(newAppointment({doctorId, name, specialization}));
    navigation.navigate('NewAppointment', params);
  };

  return (
    <View style={styles.CompleteView}>
      <View style={styles.Top}>
        <View style={styles.pngView}>
          <Image source={PNG.ICON} style={styles.Image} />
        </View>

        <View style={styles.Add}>
          <View style={styles.Cont}>
            <Text style={styles.NameStyle}>
              {name}{qual}
            </Text>
            <Text style={styles.Year}>
              {exp} {YEARS_EXP}
            </Text>
          </View>
          <Text style={styles.ContentStyle}>{specialization}</Text>
          <Text style={styles.HospitalStyle} numberOfLines={1}>{hospital} </Text>
          <View style={styles.addressView}>
            <SVG.LocationOn />
            <Text style={styles.Address} numberOfLines={3}>
            {address && address.split('\n').slice(0, 3).join('\n')}
            {address && address.split('\n').length > 3 ? '...' : ''}
            </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.Button} onPress={bookAppointment}>
        <Text style={styles.ButtonText}>{BOOK_APPOINTMENT}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DoctorCard;
