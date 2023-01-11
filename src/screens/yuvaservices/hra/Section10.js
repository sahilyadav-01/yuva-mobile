import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import Backbutton from '../../../components/Backbutton'
import { useNavigation } from '@react-navigation/core'


const Section10 = () => {
    const navigation = useNavigation()
    const previous = () => {
        navigation.navigate("HRAHome")
    }

    return (
        <SafeAreaView>
            <View className="flex-row justify-between items-center bg-[#1D2334] h-[60px] px-[10px] mt-[42px]">
                <View className="flex flex-row h-full items-center">
                    <Backbutton color="white" size={24} onPress={previous} />
                    <Text className="text-center text-white text-xl ml-[20px]">Health Risk Assesment</Text>
                </View>
            </View>
            <View className="h-full mx-[30px] my-[20px] ">
                <Text style={{ marginTop:106,fontWeight: '600' }} className="text-center text-xl text-[#E68D36]">YOUR RESPONSE HAS BEEN COLLECTED</Text>
                <Text style={{ marginTop:30,fontWeight: '500' }} className="text-center leading-2 text-[14px] text-[#44576A]">Your can access your report again from the My Report section under Profile.</Text>
            </View>
        </SafeAreaView>
    )
}

export default Section10
