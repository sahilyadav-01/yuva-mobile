import React, { useEffect } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import AvailableBookingCard from './AvailableBookingCard';
import { viewMyTestAndPackageThunk } from '../../../store/reducers/DiagnosticsSlice';
import image1 from '../../../../assets/Diagnostic_Test.png';
import image from '../../../../assets/Diagnostic_Package.png';
import { styles } from './style';



const AvailableBooking = ({ name }) => {



    /**
     *  Doctors state
     * */
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
   
            <ScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                    paddingBottom: 300
                }}

            >
                <View style={styles.card}>
                    {testData ? (
                        <View className=" mt-[33px]">
                            {testData.myTestResponseDtoList ? (
                                <Text className="font-bold ml-3" style={styles.textColor}>Available lab test</Text>) : <Text style={styles.textColor} className="font-bold ml-3">No test available</Text>}
                            <View>
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
                            </View>
                            {testData.myPackageResponseDtoList ? (
                                <Text className="font-bold ml-3 mt-10" style={styles.textColor}>Available Package test</Text>) : <Text className="font-bold ml-3 mt-10" style={styles.textColor}>No Available Package </Text>}
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
                        </View>) : <Text className="font-bold ml-3 mt-10" style={styles.textColor}>No test or Package Available</Text>}
                </View>
            </ScrollView>
    )
}

export default AvailableBooking
