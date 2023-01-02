import React from 'react'
import {View, Text, TextInput} from 'react-native';
// import { OPD_CHECKIN } from '../../../../modules/patient/constant';
const CheckInAppointment=({route})=> {
    const {otp}=route.params
  return (
  <View>
{/* <Text>{OPD_CHECKIN}</Text> */}

<Text className="flex h-[50px] font-[500] color-[#44576A] mr-[30px] ml-[30px] mt-[35px] mb-[30px] justify-center rounded">Thank You for Booking
Appointment with us.</Text>
<Text className="flex  font-[500] color-[#44576A] mr-[30px] ml-[30px] ] mb-[30px] justify-center rounded" > Your PIN for this appointment is - <Text className='color-[#E68D36]'>{otp}</Text>.</Text>
<Text className="flex  font-[500] color-[#44576A] mr-[30px] ml-[30px]  mb-[30px] justify-center rounded">Hope your appointment went well.Please share your PIN with the Doctor or Hospital Admin to complete your appointment.</Text>
<Text className="flex h-[50px] font-[500] color-[#44576A] mr-[30px] ml-[30px] mt-[20px] justify-center rounded">Thank You</Text>
<Text className="flex h-[50px] font-[500] color-[#44576A] mr-[30px] ml-[30px] mt-[-25px] justify-center rounded">Keep Smiling, Stay Healthy.!</Text>
  </View>
  )
}
export default CheckInAppointment;
