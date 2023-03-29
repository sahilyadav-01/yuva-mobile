import React from 'react';
import {View, Text, Image} from 'react-native';
import {PNG} from '../../../../../assets';
import {
  COMMA,
  DEAR,
  HOPE_YOUR_APPOINTMENT,
  THANKS,
  THANK_YOU,
  WISHES,
  YOUR_PIN,
} from '../../constant';
import {styles} from './styles';
import {useRoute} from '@react-navigation/native';
const CheckInAppointments = () => {
  const route = useRoute();
  const {otp, memberName} = route?.params;
  return (
    <View>
      <View style={styles.thanksMessageView}>
        <View style={styles.thanksView}>
          <Text style={styles.thanksMessageStyle}> {THANK_YOU}</Text>
        </View>
        <View style={styles.imageView}>
          <Image source={PNG.THANK_IMAGE} />
        </View>
      </View>
      <View style={styles.messageView}>
        <Image source={PNG.THANK_DESIGN} style={styles.imageStyle} />

        <View style={styles.secondView}>
          <Text style={styles.thankStyle}>
            {DEAR}
            {memberName}
            {COMMA}
          </Text>

          <View style={styles.otpView}>
            <Text style={styles.otpDescriptionStyle}>{YOUR_PIN}</Text>
            <Text style={styles.otpStyle}>{otp}</Text>
          </View>

          <Text style={styles.descriptionStyle}> {HOPE_YOUR_APPOINTMENT}</Text>

          <Text style={styles.thankStyle}>{THANKS}</Text>
          <Text style={styles.descriptionStyle}>{WISHES}</Text>
        </View>
      </View>
    </View>
  );
};
export default CheckInAppointments;
