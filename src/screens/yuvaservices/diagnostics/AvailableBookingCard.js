
import React from 'react'
import { View, Text, Image } from 'react-native'
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const AvailableBookingCard = ({
  name, id, packageName, imageUrl, packageUuid, nameBooking
}) => {

  const navigation = useNavigation();
  const clicked = () => {
    navigation.navigate('BookingTestAndPackage', {
      id: id ? id : '',
      packageData: packageName ? { packageName, packageUuid } : '',
    });
  }

  return (
    <View>
      <TouchableOpacity disabled={!name} onPress={clicked}>
        <View style={{ backgroundColor: "#FFFFFF" }} className='h-[130px] mt-[35px] mr-[15px] ml-[15px] rounded-lg shadow-md'>
          {/* Top */}
          <View className="flex-row mt-[25px] mr-[24px]  ml-[20px]">
            <View className="ml-[16px] flexpayload1">
              {/* Line1 */}
              <View className="flex-row justify-between">
                <Image
                  source={imageUrl}
                  className="h-[32px] w-[28px]"
                />
                <Text className="text-medium text-base text-[#1D2334]">{name}</Text>
                <Text className="text-medium text-base text-[#1D2334]">{nameBooking}</Text>
              </View>

            </View>
          </View>

        </View>
      </TouchableOpacity>
    </View>
  )
}

export default AvailableBookingCard;



