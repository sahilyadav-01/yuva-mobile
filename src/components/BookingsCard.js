
import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { styles } from './styles';
import { CANCELLED, DATE, DESCRIPTION, INITIATED, PENDING, RESCHEDULED } from './constants';
import CardButton from './CardButton'
import { GREEN, RED_SHADE } from '../styles/colors';
import { dignosticStatus,getPlanDate,splitCustomId } from '../utils/utils';
import {PNG} from '../../assets/index'


const BookingsCard = ({ item }) => {

    if (!item) {
        return null;
    }

    return (
        <View>
            {item?.status === "INITIATED" || item?.status === "RESCHEDULED" || item?.status === "CONFIRMED" ?
        
                (<View>

                    <TouchableOpacity>
                        <View style={styles.BookingCard}>
                            <View >
                                <View style={styles.status}>
                                    <View style={styles.customId}>
                                        <Text style={styles.initiatedColor}>{dignosticStatus(item?.status)}</Text>
                                        
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
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View>
                    
                    </View>
                </View>

                ) : (<View>
                    {item.status === "COMPLETED" || item.status === "FINISHED" ?
                        (
                            <View>
                                <TouchableOpacity>
                                    <View style={styles.BookingCard}>
                                        <View >
                                            <View style={styles.status}>
                                                <View style={styles.customId}>
                                                    <Text style={styles.initiatedColor}>{dignosticStatus(item?.status)}</Text>
                                                </View>
                                                <View style={styles.lab}>
                                                    <Text style={styles.labs}>
                                                        {item?.labName === null && <Text>-</Text> || item?.labName}
                                                    </Text>
                                                    <Text style={styles.date}>{getPlanDate(item?.collectionTime)}</Text>

                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity></View>) : (<View>
                                    {item.status === "CANCELLED" &&
                                        <TouchableOpacity>
                                            <View style={styles.BookingCard}>
                                                <View >
                                                    <View style={styles.status}>
                                                        <View style={styles.customId}>
                                                            <Text style={styles.cancelledColor}>{dignosticStatus(item?.status)}</Text>
                                                        </View>
                                                        <View style={styles.lab}>
                                                            <Text style={styles.labs}>
                                                                {item?.labName === null && <Text>-</Text> || item?.labName}
                                                            </Text>
                                                            <Text style={styles.date}>{getPlanDate(item?.collectionTime)}</Text>

                                                        </View>
                                                    </View>
                                                </View>
                                            </View>
                                        </TouchableOpacity>}
                                </View>)}
                </View>)}

        </View>

    )
}
export default BookingsCard;