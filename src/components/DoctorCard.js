import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {newAppointment} from '../store/reducers/AppointmentSlice';
import {PNG, SVG} from '../../assets';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './styles';
import {BOOK_APPOINTMENT} from './constants';
const DoctorCard = ({
  doctorId,
  name,
  specialization,
  address,
  rating,
  exp,
  img,
  qual,
}) => {
  /**
   * Hooks
   */
  const params = {
    Doctor: name,
    Specialization: specialization,
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
        <View>
          <Image
            source={require('../../assets/icon.png')}
            style={styles.Image}
          />
        </View>

        <View style={styles.Add}>
          <View style={styles.Cont}>
            <Text style={styles.NameStyle}>
              {name} - {qual}
            </Text>
            <Text style={styles.Year}>{exp} Years</Text>
          </View>

          <Text style={styles.ContentStyle}>{specialization}</Text>

          <View style={styles.Location}>
            <SVG.LocationOn />
            <Text style={styles.Address}>
              {address == undefined ? '' : address.slice(0, 20)}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.buttonView}>
        <TouchableOpacity style={styles.Button} onPress={bookAppointment}>
          <Text style={styles.ButtonText}>{BOOK_APPOINTMENT}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DoctorCard;
