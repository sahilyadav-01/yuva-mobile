
import React, { useEffect } from 'react'
import { View, Text, Image } from 'react-native'

const AvailableBookingCard = ({
  name
}) => {


  return (

    <View style={{ backgroundColor: "#FFFFFF" }} className='h-[130px] mt-[35px] mr-[15px] ml-[15px] rounded-lg shadow-md'>
      {/* Top */}
      <View className="flex-row mt-[25px] mr-[24px]  ml-[20px]">
        <View className="ml-[16px] flexpayload1">
          {/* Line1 */}
          <View className="flex-row justify-between">
            <Text className="text-medium text-base text-[#1D2334]">{name}</Text>

          </View>

        </View>
      </View>

    </View>
  )
}

export default AvailableBookingCard;



