import React, {useState} from 'react'
import { View, Text, Image, TextInput, TouchableOpacity} from 'react-native'
import { SafeAreaView } from 'react-native'
import { Divider} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Backbutton from '../../components/Backbutton';

const ForgotPassword = () => {
    const [email, onChangeEmail] = useState("Email");
    const navigation  = useNavigation();

    const verifyOTP = ()=> {
        navigation.navigate("Login")
    }

    const login = ()=> {
        navigation.navigate("Login")
    }

    return (
        <SafeAreaView className="flex h-full">

            <Backbutton onPress={login}/>

            {/* Top Section */}
            <View className="h-[75px] mt-[20px] mr-[20px] ml-[20px]">
                <View className="flex-row justify-between">
                    <View className="flex-row">
                        <Image
                    
                            source = {require("../../../assets/yuva_logo-2.png")}
                            className="h-[60px] w-[50px]"
                        />
                        <View className="flex ml-2 items-end">
                            {/* <View className="h-[40px] w-[120px] bg-gray-500"></View> */}
                            <Image
                                source = {require("../../../assets/yuva_text.png")}
                                className="h-[40px] w-[120px]"
                                resizeMode="contain"
                            />
                            <View className=""></View>
                            <Image
                                source = {require("../../../assets/HEALTH.png")}
                                className="h-[15px] w-[70px] mt-2"
                                resizeMode="contain"
                            />
                        </View>
                    </View>
                    <View className="flex items-end justify-end">
                        <Text className="text-bold text-base">FORGOT PASSWORD</Text>
                        <Divider style={{backgroundColor:'#52608E'}} className="h-1 w-20 rounded mt-0.5"/>
                    </View>
                </View>
            </View>

            {/* Login Screen */}
            <View className="flex h-[260px] mt-[60px]">
                <TextInput style={{backgroundColor:"#f5f9fa"}} className="h-[50px] mr-[30px] ml-[30px] rounded shadow-2xl border-b-2 pl-2" placeholder="Email"/>

                <TouchableOpacity 
                    style={{backgroundColor:"#52608E"}} 
                    className="mt-[45px] mr-[30px] ml-[30px] rounded">
                    {/* <View className="flex h-50px bg-gray-100 justify-center"> */}
                        <Text className="text-center pt-[15px] pb-[15px] text-white">Send OTP</Text>
                    {/* </View> */}
                </TouchableOpacity>
                <TouchableOpacity
                >
                    {/* <View className="flex h-50px bg-gray-100 justify-center"> */}
                        <Text style={{color:"#52608E"}}  className="text-center mt-[20px]">Verify OTP</Text>
                    {/* </View> */}
                </TouchableOpacity>

            </View>

        </SafeAreaView>
    )
}

export default ForgotPassword
