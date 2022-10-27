import React from 'react'
import { View, Text } from 'react-native'

const HealthMetricCard = ({metrics, label, color, borderColor, metricColor}) => {
    let metric = "NA"
    if(metrics != undefined && metrics.Score  != undefined){
        metrics = metrics.Score.value
    }

    return (
        <View className="flex items-center justify-between w-[70px]">
            <View className={`flex justify-center items-center h-[60px] w-[60px] rounded-full shadow-xl border-2 ${borderColor} ${color}`}>
                <Text className={`text-center font-normal text-xs ${metricColor}`}>{metric}</Text>
            </View>
            <Text className="text-xs text-center">{label}</Text>
        </View>
    )
}

export default HealthMetricCard
