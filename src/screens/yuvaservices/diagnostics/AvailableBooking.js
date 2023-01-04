import React, { useEffect, useCallback } from 'react'
import { View, Text, TextInput, FlatList, ScrollView, SafeAreaView } from 'react-native'

import { useSelector, useDispatch } from 'react-redux';
import AvailableBookingCard from './AvailableBookingCard';
import { viewMyTestAndPackageThunk } from '../../../store/reducers/DiagnosticsSlice';
import { TouchableOpacity } from 'react-native-gesture-handler';
import image1 from '../../../../assets/Diagnostic_Test.png';
import image from '../../../../assets/Diagnostic_Package.png';
import {styles} from '../../styles';



const AvailableBooking = ({ name }) => {



    /**
     *  Doctors state
     * */
    // const data = useSelector(state => state.doctor.data)
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
        <SafeAreaView >
        <ScrollView
            contentContainerStyle={{
                 flexGrow: 1,
                paddingBottom: 60
            }}
            
            >
             <View className="m-2"> 
                {testData ? (
                    <View className=" mt-[40px]">
                        {testData.myTestResponseDtoList ? (
                            <Text className="font-bold ml-3">Available lab test</Text>) : <Text className="font-bold ml-3">No test available</Text>}
                        <View>
                            {/* <ScrollView
                    bounces={false}
                    contentContainerStyle={{
                        flexGrow: 1,
                        paddingBottom: 150
                    }}
                    showsVerticalScrollIndicator={false}> */}

                            {testData && testData?.myTestResponseDtoList && testData?.myTestResponseDtoList.map((item) => {
                                return <AvailableBookingCard
                                    key={item?.id}
                                    name={item?.name}
                                    test="testName"
                                    id={item.id}
                                    imageUrl={image1}
                                />
                            })
                            }
                            {/* </ScrollView> */}

                        </View>
                        {testData.myPackageResponseDtoList ? (
                            <Text className="font-bold ml-3 mt-10">Available Package test</Text>) : <Text className="font-bold ml-3 mt-10">No Available Package </Text>}
                        {/* <ScrollView
                    bounces={false}
                    contentContainerStyle={{
                        flexGrow: 1,
                        paddingBottom: 30
                    }}
                    showsVerticalScrollIndicator={false}> */}
                        {testData && testData?.myPackageResponseDtoList && testData?.myPackageResponseDtoList.map((item) => {
                            return <AvailableBookingCard
                                key={item?.id}
                                name={item?.name}
                                packageName={item?.name}
                                packageUuid={item.id}
                                imageUrl={image}
                            />
                        })
                        }
                        {/* </ScrollView> */}
                    </View>) : <Text className="font-bold ml-3 mt-10">No test or Package Available</Text>}
             </View> 
        </ScrollView>
        </SafeAreaView>
    )
}

export default AvailableBooking
