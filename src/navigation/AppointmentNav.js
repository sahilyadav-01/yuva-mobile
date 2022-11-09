import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import AppointmentHome from '../screens/yuvaservices/opd/appointments/AppointmentHome';
import NewAppointment from '../screens/yuvaservices/opd/appointments/NewAppointment';
import ViewAppointment from '../screens/yuvaservices/opd/appointments/ViewAppointment';
import EditAppointment from '../screens/yuvaservices/opd/appointments/EditAppointment';



const Stack = createStackNavigator();

const AppointmentNav = () => {
    return (
    <Stack.Navigator>
        {/* <Stack.Screen name="Intro" component={Intro} options={{ headerShown: false }}/> */}
        <Stack.Screen name="AppointmentHome" component={AppointmentHome}  options={{ headerShown: false }}/>
        <Stack.Screen name="NewAppointment" component={NewAppointment} options={{ headerShown: false }}/>
        <Stack.Screen name="ViewAppointment" component={ViewAppointment} options={{ headerShown: false }}/>
        <Stack.Screen name="EditAppointment" component={EditAppointment} options={{ headerShown: false }}/>

    </Stack.Navigator>
    )
}

export default AppointmentNav
