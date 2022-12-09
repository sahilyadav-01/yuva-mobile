
import React, { useEffect, useCallback } from 'react'
import { View, Text, TextInput, FlatList, ScrollView } from 'react-native'

import { useSelector, useDispatch } from 'react-redux';

import AvailableBookingCard from './AvailableBookingCard';


const Booking = ({ name }) => {

    const { bookedData } = useSelector(state => state.diagnostic)
  


    return (
        <View className="m-2">
            <View className="h-[500px] mt-[20px]">
                <ScrollView
                    bounces={false}
                    contentContainerStyle={{
                        flexGrow: 1,
                    }}
                    showsVerticalScrollIndicator={false}>
                    {bookedData && bookedData.map((item) => {
                        if (item.packageName !== null) {
                            return <AvailableBookingCard
                                name={item.packageName}
                            />
                        } else {

                            return <AvailableBookingCard name={item.testName} />

                        }
                    })
                    }
                </ScrollView>

            </View>
        </View>
    )
}

export default Booking


