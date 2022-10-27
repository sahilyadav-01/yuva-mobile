import React from 'react'
import { View, Text } from 'react-native'
import Backbutton from '../components/Backbutton'
import { useNavigation } from '@react-navigation/native';
import Doctor from '../screens/yuvaservices/opd/doctors/Doctor';


import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AppointmentNav from './AppointmentNav';


const Tab = createMaterialTopTabNavigator();

const OPDNavigation = () => {
    const navigation = useNavigation();
    const  goBack  = () => navigation.goBack();
    return (
        <View>
            <View className="flex-row items-center h-[62px] bg-[#1D2334] pl-[10px]">
                <Backbutton onPress={goBack} color="white" size={20}/>
                <Text className="text-white text-center text-base ml-[20px]">OPD</Text>
            </View>
            <Tab.Navigator  className="flex"
                screenOptions={{
                    tabBarLabelStyle: { fontSize: 16, marginTop: 15 },
                    tabBarStyle: { color: '#1D2334', height:70}
                }}
            >
                <Tab.Screen name="Doctor" component={Doctor} />
                <Tab.Screen name="Appointments" component={AppointmentNav} />
            </Tab.Navigator>
        </View>
    )
}

export default OPDNavigation
