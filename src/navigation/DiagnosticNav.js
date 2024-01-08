
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import DiagnosticsNavigation from './DiagnosticTab';

const Stack = createStackNavigator();

const DiagnosticNav1 = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="DiagnosticsNavigation"
                component={DiagnosticsNavigation}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}

export default DiagnosticNav1