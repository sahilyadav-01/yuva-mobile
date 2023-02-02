// import React, { useEffect } from 'react'
// import { View, Text, ScrollView ,FlatList} from 'react-native'
// import {useSelector} from 'react-redux';
// import BookingsCard from '../../../components/BookingsCard';
// import { styles } from './styles';
// import { NO_BOOKING } from './constants';

// const Booking = () => {
// const renderItem=({item,index})=>{
  
//     return <BookingsCard
//     name={item.name}
//     clinicName={item.clinicName}
//     />
// }
//     return (
//         <View style={styles.margin}>
//             <View >
        
//                     <ScrollView
//                         bounces={false}
//                         contentContainerStyle={styles.contentContainerStyle}
//                         showsVerticalScrollIndicator={false}>
//                        <FlatList
//                                     renderItem={renderItem}
//                                     data={item}
//                                     keyExtractor={(item) => item.id}
//                                     showsHorizontalScrollIndicator={false}
//                                 />
                        
//                     </ScrollView>


//             </View>
//         </View>
//     )
// }

// export default Booking;
import React from 'react'
import { View, Text, ScrollView, FlatList } from 'react-native'
import { useSelector } from 'react-redux';
import BookingsCard from '../../../components/BookingsCard';
import { PNG } from '../../../../../assets';
import { styles } from './styles';
import { NO_BOOKING } from './constants';
import { useBooking } from './hooks/useBooking';
const Booking = ({ name }) => {
   
const {bookedData}=useBooking();
    const renderItem = ({ item, index }) => {
        return <BookingsCard
            key={index}
            nameBooking={nameBooking}
            status={item.bookingStatus}
            />

    }

    return (
        <View>
            <View >
                {bookedData.length ? (
                    <ScrollView
                        bounces={false}
                        contentContainerStyle={styles.contentContainerStyle}
                        showsVerticalScrollIndicator={false}>
                        {bookedData &&
                            <FlatList
                                renderItem={renderItem}
                                data={bookedData}
                                keyExtractor={(item) => item.id}
                                showsHorizontalScrollIndicator={false}
                            />
                        }
                    </ScrollView>
                ) : <Text style={styles.textColor}>{NO_BOOKING}</Text>}

            </View>
        </View>
    )
}

export default Booking
