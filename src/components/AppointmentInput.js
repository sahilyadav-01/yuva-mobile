import React, {useState} from 'react'
import { View, Text, TextInput } from 'react-native'
import { DARK_GRAY } from '../styles/colors'

const AppointmentInput = ({defValue, text}) => {

    const [input, setInput] = useState()

    return (
        <View className="mt-[20px]">
            <TextInput
                defaultValue={defValue}
                style={{backgroundColor:"#ffffff", borderWidth:1}} 
                className="h-[45px] rounded-lg shadow-2xl pl-5 mt-[8px] text-sm mx-[15px]"
                placeholder={defValue}
                placeholderTextColor={DARK_GRAY}
                onChangeText={setInput}
                editable={false}
            />
        </View>
    )
}

export default AppointmentInput
