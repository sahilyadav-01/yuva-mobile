import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import BookingTestAndPackage from '../screens/yuvaservices/diagnostics/BookingTestAndPackage';
import Diagnostics from '../screens/yuvaservices/diagnostics/Diagnostics';
const Stack = createStackNavigator();

const DiagnosticNav = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Diagnostics"
                component={Diagnostics}
                options={{ headerShown: false }}
            />

            {/* <Stack.Screen
                name="DiagnosticsNavigation"
                component={DiagnosticsNavigation}
                options={{ headerShown: false }}
            /> */}

            <Stack.Screen name="BookingTestAndPackage" component={BookingTestAndPackage} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default DiagnosticNav