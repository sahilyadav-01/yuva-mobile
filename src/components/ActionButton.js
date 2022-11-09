import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import {  } from 'react-native-gesture-handler'

const ActionButton = ({name, onPress}) => {
    return (
        <TouchableOpacity className="flex h-[50px] bg-[#E68D36] mr-[30px] ml-[30px] mt-[20px] mb-[30px] justify-center rounded" onPress={onPress}>
            <Text className="text-center text-white">{name}</Text>
        </TouchableOpacity>
    )
}

export default ActionButton
