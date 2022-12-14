import React from 'react'
import { View, Text ,Image} from 'react-native'
import { TouchableOpacity } from 'react-native'
import { Rating, AirbnbRating } from 'react-native-ratings';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import  {newAppointment} from '../store/reducers/AppointmentSlice'

const DoctorCard = ({
    doctorId,
    name,
    specialization,
    address, 
    rating,
    exp, 
    img,
    qual  
}) => {

    /**
     * Hooks
     */
    const navigation = useNavigation();
    const dispatch = useDispatch()

    const bookAppointment = () => {
        dispatch(newAppointment({doctorId, name, specialization}))
        //navigation.navigate('Appointments', {screen:"NewAppointment"})
        navigation.navigate("NewAppointment")
    }

    return (
        
        <View style={{backgroundColor:"#FAEADB"}} className='h-[130px] mt-[35px] mr-[15px] ml-[15px] rounded-lg shadow-md'>
            {/* Top */}
            <View className="flex-row mt-[25px] mr-[24px]  ml-[20px]">
                <View>
                    <Image
                        source = {require("../../assets/icon.png")}
                        className="h-[48px] w-[48px] bg-gray-300 rounded-full"/>
                </View>    
            
                <View className="ml-[16px] flex-1">
                    {/* Line1 */}
                    <View className="flex-row justify-between">
                        <Text  className="text-medium text-base text-[#1D2334]">{name} - {qual}</Text>
                        <Text  className= "text-xs text-center text-medium text-[#1D2334]">{exp} Years</Text>
                    </View>

                    {/* Line2 */}
                    <Text className= "text-xs text-semibold mt-[2px] text-[#1D2334]"  >{specialization}</Text>

                    {/* Line3 */}
                    <View className="flex-row mt-[4px]">
                        <Text 
                            className= "text-center mr-2  text-[#1D2334]"
                            style={{fontSize:12}}
                            >{address == undefined ? "":address.slice(0,20)}</Text>
                        <TouchableOpacity className="h-[14px] w-[14px]">
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            {/* Bottom */}
            <View className="flex-row justify-between items-center ml-2 mt-[8px]">
                <AirbnbRating
                    className="p-3"
                    showRating={false}
                    count={5}
                    size={16}
                    isDisabled={true}
                    unSelectedColor="white"
                    selectedColor="#E68D36"
                />
                <TouchableOpacity 
                    style={{backgroundColor:'#E68D36'}}  
                    className="flex p-1 h-9 items-center rounded-tl-lg  rounded-br-lg"
                    onPress={bookAppointment}
                >
                    <Text className="text-center mt-2 text-xs px-[25px] text-white">Book Appointment</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default DoctorCard
