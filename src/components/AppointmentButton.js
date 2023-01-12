import React, { useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const AppointmentButton = ({color, name, action, disable}) => {
    
    return (
        <TouchableOpacity 
            onPress={action}
            disabled={disable === undefined ? false:disable}
            className="flex items-center justify-center h-[48px] mx-[5px] mt-[20px] shadow-xl rounded"
            style={{backgroundColor:color}}
        >
            <Text>{name}</Text>
        </TouchableOpacity>
    )
}

export default AppointmentButton
