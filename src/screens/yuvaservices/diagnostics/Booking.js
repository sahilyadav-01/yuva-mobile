
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
                        paddingBottom:300
                    }}
                    showsVerticalScrollIndicator={false}>
                    {bookedData && bookedData.map((item,index) => {
                        if (item.packageName !== null) {
                            return <AvailableBookingCard
                            key={index}
                                name={item?.packageName}
                            />
                        } else {

                            return <AvailableBookingCard 
                            key={index}
                            name={item?.testName} />

                        }
                    })
                    }
                </ScrollView>

            </View>
        </View>
    )
}

export default Booking


