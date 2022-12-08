
import React, { useEffect, useCallback } from 'react'
import { View, Text, TextInput, FlatList, ScrollView } from 'react-native'

import { useSelector, useDispatch } from 'react-redux';
import { bookingTestAndPackageThunk } from '../../../store/reducers/DiagnosticsSlice';
import AvailableBookingCard from './AvailableBookingCard';


const Booking = ({ name }) => {



    const { jwt } = useSelector(state => state.auth.user)

    let isActive = "false";
    const dispatch = useDispatch()
    const { bookedData } = useSelector(state => state.diagnostic)
    useEffect(() => {
        dispatch(bookingTestAndPackageThunk({ jwt, isActive }))
    }, [])

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


