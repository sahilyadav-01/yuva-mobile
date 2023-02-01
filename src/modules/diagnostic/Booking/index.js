import React, { useEffect } from 'react'
import { View, Text, ScrollView ,FlatList} from 'react-native'
import {useSelector} from 'react-redux';
import BookingsCard from '../../../components/BookingsCard';
import { styles } from './styles';
import { NO_BOOKING } from './constants';

const Booking = () => {
    const item=[{}]
const renderItem=({item,index})=>{
  
    return <BookingsCard
    name={item.name}
    clinicName={item.clinicName}
    />
}
    return (
        <View style={styles.margin}>
            <View >
        
                    <ScrollView
                        bounces={false}
                        contentContainerStyle={styles.contentContainerStyle}
                        showsVerticalScrollIndicator={false}>
                       <FlatList
                                    renderItem={renderItem}
                                    data={item}
                                    keyExtractor={(item) => item.id}
                                    showsHorizontalScrollIndicator={false}
                                />
                        
                    </ScrollView>


            </View>
        </View>
    )
}

export default Booking;
