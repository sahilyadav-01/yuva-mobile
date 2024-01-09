import React from 'react'
import { View, Text, ScrollView, FlatList } from 'react-native'
import BookingsCard from '../../../components/BookingsCard';
import { styles } from './styles';
import { NO_BOOKING } from './constants';
import { useBooking } from './hooks/useBooking';

const Booking = () => {
const {bookedData}=useBooking();
    const renderItem = ({ item, index }) => {
        return <BookingsCard
            key={index}
            item={item}
            />

    }
    return (
        <View>
            <View >
                {bookedData?.data?.length ? (
                    <ScrollView
                        bounces={false}
                        contentContainerStyle={styles.contentContainerStyle}
                        showsVerticalScrollIndicator={false}>
                        {bookedData &&
                            <FlatList
                                renderItem={renderItem}
                                data={bookedData?.data}
                                keyExtractor={(item, index) => `${index}`}
                                showsHorizontalScrollIndicator={false}
                                nestedScrollEnabled={true}

                            />
                        }
                    </ScrollView>
                ) : <View style={styles.emptyContainer}><Text style={styles.textColor}>{NO_BOOKING}</Text></View>}
            </View>
        </View>
    )
}

export default Booking
