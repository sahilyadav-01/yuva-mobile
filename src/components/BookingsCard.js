
import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { styles } from './styles';
import { CANCELLED, RESCHEDULEANDCANCEL, RESCHEDULED } from './constants';
import CardButton from './CardButton'
import { GREEN, RED_SHADE } from '../styles/colors';
import { dignosticStatus, getPlanDate, splitCustomId, textStyle } from '../utils/utils';
import { useDispatch, useSelector } from "react-redux";
import { bookedDetailsByIdThunk } from '../store/reducers/DiagnosticsSlice';
import { useNavigation } from '@react-navigation/native';

const BookingsCard = ({ item }) => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const textStyle = (status) => {
        switch (status) {
            case 'CANCELLED': return styles.cancelledColor;
            case 'INITIATED': return styles.initiatedColor;
            default: return styles.confirmedColor
        }
    }
    const onViewBooking = () => {
        dispatch(bookedDetailsByIdThunk({ id: item?.id }));
        navigation.navigate(RESCHEDULEANDCANCEL,);

    }
    if (!item) {
        return null;
    }
    return (
        <View>
            <View>

                <TouchableOpacity onPress={onViewBooking}>
                    <View style={styles.BookingCard}>
                        <View >
                            <View style={styles.status}>
                                <View style={styles.customId}>
                                    <Text style={textStyle(item?.status)}>{dignosticStatus(item?.status)}</Text>
                                    <Text style={styles.custom}>{splitCustomId(item.customId)}</Text>
                                </View>
                                <View style={styles.lab}>
                                    <Text style={styles.labs}>
                                        {item?.labName === null && <Text>-</Text> || item?.labName}
                                    </Text>
                                    <Text style={styles.date}>{getPlanDate(item?.collectionTime)}</Text>

                                </View>
                            </View>
                        </View>
                        {(item?.status === "CONFIRMED" || item?.status === "INITIATED" || item?.status === "RESCHEDULED") &&
                            <View style={styles.reschedule}>
                                <CardButton
                                    text={RESCHEDULED}
                                    iconName="clock-outline"
                                    iconColor={GREEN}
                                />
                                <CardButton
                                    text={CANCELLED}
                                    iconName="close"
                                    iconColor={RED_SHADE}
                                />
                            </View>}
                    </View>
                </TouchableOpacity>
                <View>

                </View>
            </View>

        </View>

    )
}
export default BookingsCard;