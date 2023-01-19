import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { useSelector } from 'react-redux';
import AvailableBookingCard from './AvailableBookingCard';
import image1 from '../../../../assets/Diagnostic_Test.png';
import image from '../../../../assets/Diagnostic_Package.png';
import { styles } from './styles';
import { NO_BOOKING } from './constants';
const Booking = ({ name }) => {
    const { bookedData } = useSelector(state => state.diagnostic)
    return (
        <View style={styles.margin}>
            <View >
                {bookedData.length ? (
                    <ScrollView
                        bounces={false}
                        contentContainerStyle={styles.contentContainerStyle}
                        showsVerticalScrollIndicator={false}>
                        {bookedData && bookedData.map((item, index) => {
                            if (item.packageName !== null) {
                                return <AvailableBookingCard
                                    key={index}
                                    nameBooking={item?.packageName}
                                    imageUrl={image}
                                    status={item.bookingStatus}
                                  
                                />
                            } else {

                                return <AvailableBookingCard
                                    key={index}
                                    nameBooking={item?.testName}
                                    imageUrl={image1}
                                    status={item.bookingStatus}
                                    attachmentId={item?.attachmentList[0]?.filePath}
                                />
                            }
                        })
                        }
                    </ScrollView>
                ) : <Text  style={styles.textColor}>{NO_BOOKING}</Text>}

            </View>
        </View>
    )
}

export default Booking


