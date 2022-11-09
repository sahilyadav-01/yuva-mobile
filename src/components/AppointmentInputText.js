import React, {useState} from 'react'
import { View, Text, TextInput } from 'react-native'

const AppointmentInputText = ({text, defValue}) => {
    const [input, setInput] = useState()

    return (
        <View className="mt-[20px]">
            <TextInput
                defaultValue={defValue}
                style={{backgroundColor:"#ffffff", borderWidth:1}} 
                className="h-[50px] rounded-lg shadow-2xl pl-5 mt-[8px] text-sm mx-[15px]"
                placeholderTextColor={'black'} 
                placeholder={defValue}
                onChangeText={setInput}
                multiline={true}
            />
        </View>
    )
}

export default AppointmentInputText
