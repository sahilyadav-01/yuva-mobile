import React from 'react'
import { View, Text } from 'react-native'
import CarouselItem from './CarouselItem'

const CarouselContainer = () => {
    const data = [{id:1, text:"text1"},{id:1, text:"text2"}]
    return (
        <View className="flex items-center justify-center h-[170px] mt-2 mx-4 my-4">
            <CarouselItem/>
            <View className="flex-row mt-[20px]">
                <View className="h-2 w-2 bg-gray-400 rounded-full ml-2"></View>
                <View className="h-2 w-2 bg-gray-400 rounded-full ml-2"></View>
                <View className="h-2 w-2 bg-gray-400 rounded-full ml-2"></View>
            </View>
        </View>
    )
}

export default CarouselContainer

