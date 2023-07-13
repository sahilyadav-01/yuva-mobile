
import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { styles } from './styles';
import { CALENDER, CANCELLED, RESCHEDULEANDCANCEL, RESCHEDULED } from './constants';
import CardButton from './CardButton'
import { CYAN_BLUE, GREEN, RED_SHADE } from '../styles/colors';
import { dignosticStatus, getDate, getPlanDate, getTime, splitCustomId, textStyle } from '../utils/utils';
import { useDispatch, useSelector } from "react-redux";
import { bookedDetailsByIdThunk } from '../store/reducers/DiagnosticsSlice';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


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
        navigation.navigate(RESCHEDULEANDCANCEL);

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
                                    <View style={styles.direction}>
                                       <Icon name={'calendar-blank-outline'} size={24} color={CYAN_BLUE} />
                                        <View>
                                            <Text style={styles.dateStyle}>{getDate(item?.collectionTime)}</Text>
                                            <Text style={styles.timeStyle}>{getTime(item?.collectionTime)}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                        {(item?.status === "CONFIRMED" || item?.status === "INITIATED" || item?.status === "RESCHEDULED") &&
                            <View style={styles.reschedule}>
                                <CardButton
                                    text={RESCHEDULED}
                                    iconName="clock-outline"
                                    iconColor={GREEN}
                                    disablePress={true}
                                />
                                {!item?.cannotCancel &&
                                    <CardButton
                                        text={CANCELLED}
                                        iconName="close"
                                        iconColor={RED_SHADE}
                                        disablePress={true}
                                    />
                                }
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