import React from 'react'
import { View, Text, TextInput,Image } from 'react-native';
import { ViewAppointmentHooks } from '../../hooks/ViewAppointmentHooks';
import { PNG,SVG } from '../../../../../assets';
const CheckInAppointments = () => {
    const { otp } =ViewAppointmentHooks();
    return (
        <View style={{backgroundColor:"#FFFFFF"}} className='h-[130px] mt-[35px] mr-[15px] ml-[15px] rounded-lg shadow-md'>
        <View >
            <Text className="flex h-[50px] font-[500] color-[#44576A] w-40 mr-[30px] ml-[20px] mt-[35px] mb-[30px] justify-center rounded">Thank You for Booking 
                Appointment with us.</Text>
                <Image className='flexml ml-[260px] mt-[-111px] justify-end' source={SVG.THANK_IMAGE}/>
                </View>
                <View style={{backgroundColor:"#FFFFFF"}} className='h-[300px] mt-[65px]  rounded-lg '>
                <Image className='flexml ml-[272px]  justify-end' source={PNG.THANK_DESIGN}/>
                <Text className="flex  font-[500] color-[#44576A] mr-[30px] ml-[30px] ] mt-[-76px] mb-[20px] justify-center rounded" >Dear.</Text>
            <Text className="flex  font-[500] color-[#44576A] mr-[30px] ml-[30px] ] mb-[30px] justify-center rounded" > Your PIN for this appointment is - <Text className='color-[#E68D36]'>{otp}</Text>.</Text>
            <Text className="flex  font-[500] color-[#44576A] mr-[30px] ml-[30px]  mb-[30px] justify-center rounded">Hope your appointment went well.Please share your PIN with the Doctor or Hospital Admin to complete your appointment.</Text>
            <Text className="flex h-[50px] font-[500] color-[#44576A] mr-[30px] ml-[30px] mt-[10px] justify-center rounded">Thank You</Text>
            <Text className="flex h-[50px] font-[500] color-[#44576A] mr-[30px] ml-[30px] mt-[-25px] justify-center rounded">Keep Smiling, Stay Healthy.!</Text>
        </View>
        </View>
    )
}
export default CheckInAppointments;
