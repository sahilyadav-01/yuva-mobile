import React, { useState } from 'react'
import { View, Text, TextInput } from 'react-native'
import { useDispatch } from 'react-redux'

const SectionInput = ({text, defValue,  questionId, dispatcher}) => {
    const dispatch = useDispatch()
    const [input, setInput] = useState()
    const setSelected  = (value)  => {
        dispatch(dispatcher({"key":questionId, "value":value}))
   }
    return (
        <View className="mt-[20px]">
            <Text className="text-base">{text}</Text>
            <TextInput
                defaultValue={defValue}
                style={{backgroundColor:"#ffffff", borderWidth:1}} 
                className="h-[40px] rounded-lg shadow-2xl pl-5 mt-[8px] text-sm"
                keyboardType='numeric'
                placeholderTextColor={'black'} 
                placeholder=''
                onChangeText={setSelected}
                maxLength={3}
            />
        </View>
    )
}

export default SectionInput
