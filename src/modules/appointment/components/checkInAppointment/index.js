import React from 'react'
import { View, Text, TextInput,Image } from 'react-native';
import { useView } from '../viewAppointment/hooks/useView';
import { PNG,SVG } from '../../../../../assets';
import { HOPE_YOUR_APPOINTMENT, THANK_YOU, YOUR_PIN } from '../../constant';
import { styles } from './styles';
const CheckInAppointments = () => {
    const { otp } =useView();
    return (
        <View style={styles.contentContainerStyle} className='h-[130px] mt-[35px] mr-[15px] ml-[15px] rounded-lg shadow-md'>
        <View >
            <Text className="flex h-[50px] font-[500] color-[#44576A] w-40 mr-[30px] ml-[20px] mt-[35px] mb-[30px] justify-center rounded">{THANK_YOU}</Text>
                <Image className='flexml ml-[260px] mt-[-111px] justify-end' source={PNG.THANK_IMAGE}/>
                </View>
                <View style={styles.contentContainerStyle}  className='h-[300px] mt-[65px]  rounded-lg '>
                <Image className='flexml ml-[272px]  justify-end' source={PNG.THANK_DESIGN}/>
                <Text className="flex  font-[500] color-[#44576A] mr-[30px] ml-[30px] ] mt-[-76px] mb-[20px] justify-center rounded" >Dear.</Text>
            <Text className="flex  font-[500] color-[#44576A] mr-[30px] ml-[30px] ] mb-[30px] justify-center rounded" > {YOUR_PIN}<Text style={styles.text}  >{otp}</Text>.</Text>
            <Text className="flex  font-[500] color-[#44576A] mr-[30px] ml-[30px]  mb-[30px] justify-center rounded">{HOPE_YOUR_APPOINTMENT}</Text>
            <Text className="flex h-[50px] font-[500] color-[#44576A] mr-[30px] ml-[30px] mt-[10px] justify-center rounded">Thank You</Text>
            <Text className="flex h-[50px] font-[500] color-[#44576A] mr-[30px] ml-[30px] mt-[-25px] justify-center rounded">Keep Smiling, Stay Healthy.!</Text>
        </View>
        </View>
    )
}
export default CheckInAppointments;
