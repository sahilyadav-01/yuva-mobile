import React, { useEffect, useCallback } from 'react'
import { View, Text, TextInput, FlatList, ScrollView } from 'react-native'

import { useSelector, useDispatch } from 'react-redux';
import AvailableBookingCard from './AvailableBookingCard';
import { viewMyTestAndPackageThunk } from '../../../store/reducers/DiagnosticsSlice';



const AvailableBooking = ({ name }) => {



    /**
     *  Doctors state
     * */
    const data = useSelector(state => state.doctor.data)
    const { jwt } = useSelector(state => state.auth.user)

    /**
     * Generic Hooks
     */
    const dispatch = useDispatch()
    const { testData } = useSelector(state => state.diagnostic)
    useEffect(() => {
        dispatch(viewMyTestAndPackageThunk({ jwt }))
    }, [])

    return (
        <View className="m-2">
            <View className="h-[500px] mt-[20px]">
            <Text className="font-bold ml-3">Available lab test</Text>
                <ScrollView
                    bounces={false}
                    contentContainerStyle={{
                        flexGrow: 1,
                        paddingBottom: 60
                    }}
                    showsVerticalScrollIndicator={false}>
                        
                    {testData && testData.myTestResponseDtoList && testData.myTestResponseDtoList.map((item) => {
                        return <AvailableBookingCard
                            key={item.id}
                            name={item.name}
                        />
                    })
                    }
                </ScrollView>
                <Text className="font-bold ml-3">Available Package test</Text>
                <ScrollView
                    bounces={false}
                    contentContainerStyle={{
                        flexGrow: 1,
                        paddingBottom: 60
                    }}
                    showsVerticalScrollIndicator={false}>
                    {testData && testData.myPackageResponseDtoList && testData.myPackageResponseDtoList.map((item) => {
                        return <AvailableBookingCard
                            key={item.id}
                            name={item.name}
                        />
                    })
                    }
                </ScrollView>
            </View>
            <Text>gggg</Text>
        </View>
    )
}

export default AvailableBooking
