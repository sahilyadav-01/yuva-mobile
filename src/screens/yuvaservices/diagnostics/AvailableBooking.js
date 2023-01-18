import React, { useEffect } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import AvailableBookingCard from './AvailableBookingCard';
import { viewMyTestAndPackageThunk } from '../../../store/reducers/DiagnosticsSlice';
import image1 from '../../../../assets/Diagnostic_Test.png';
import image from '../../../../assets/Diagnostic_Package.png';
import { styles } from './styles';
import { AVAILABLE, AVAILABLE_PACKAGE, NO_PACKAGE, NO_TEST, NO_TEST_PACKAGE } from './constants';

const AvailableBooking = ({ name }) => {

    const { jwt } = useSelector(state => state.auth.user)

    const dispatch = useDispatch()
    const { testData } = useSelector(state => state.diagnostic)
    useEffect(() => {
        dispatch(viewMyTestAndPackageThunk({ jwt }))
    }, [])

    return (
 <View style={styles.margin}>
            <ScrollView
             contentContainerStyle={styles.contentContainerStyle}  >
                <View style={styles.card}>
                    {testData ? (
                        <View style={styles.textPackage}>
                            {testData.myTestResponseDtoList ? (
                                <Text style={styles.textColor}>{AVAILABLE}</Text>) : <Text style={styles.textColor}>{NO_TEST}</Text>}
                            <View>
                                {testData && testData?.myTestResponseDtoList && testData?.myTestResponseDtoList.map((item) => {
                                    return <AvailableBookingCard
                                        key={item?.id}
                                        name={item?.name}
                                        id={item.id}
                                        imageUrl={image1}
                                    />
                                })
                                }
                            </View>
                            {testData.myPackageResponseDtoList ? (
                                <Text  style={styles.textColor2}>{AVAILABLE_PACKAGE}</Text>) : <Text  style={styles.textColor2}>{NO_PACKAGE}</Text>}
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
                        </View>) : <Text  style={styles.textColor2}>{NO_TEST_PACKAGE}</Text>}
                </View>
            </ScrollView>
            </View>
    )
}

export default AvailableBooking;
