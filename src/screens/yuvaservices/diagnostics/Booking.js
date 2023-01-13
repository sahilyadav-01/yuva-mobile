import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { useSelector } from 'react-redux';
import AvailableBookingCard from './AvailableBookingCard';
import image1 from '../../../../assets/Diagnostic_Test.png';
import image from '../../../../assets/Diagnostic_Package.png';
const Booking = ({ name }) => {
    const { bookedData } = useSelector(state => state.diagnostic)

    return (
        <View className="m-2"  >
            <View className=" mt-[20px]">
                {bookedData.length ? (
                    <ScrollView
                        bounces={false}
                        contentContainerStyle={{
                            flexGrow: 1,
                            paddingBottom: 300
                        }}
                        showsVerticalScrollIndicator={false}>
                        {bookedData && bookedData.map((item, index) => {
                            if (item.packageName !== null) {
                                return <AvailableBookingCard
                                    key={index}
                                    nameBooking={item?.packageName}
                                    imageUrl={image}
                                />
                            } else {

                                return <AvailableBookingCard
                                    key={index}
                                    nameBooking={item?.testName}
                                    imageUrl={image1}
                                />
                            }
                        })
                        }
                    </ScrollView>
                ) : <Text className="font-bold ml-3">No Booking Found</Text>}

            </View>
        </View>
    )
}

export default Booking


