
import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { styles } from './styles';
import { CANCELLED, COMPLETED, CONFIRMED, DOWNLOAD_REPORT, FINISHED, INITIATED, PENDING, RESCHEDULED } from './constants';
import CardButton from './CardButton'
import { GREEN, RED_SHADE } from '../styles/colors';
const BookingsCard = ({props }) => {

    return (
<View>
<TouchableOpacity>
        <View style={styles.BookingCard}>
            <View >
                <View style={styles.status}>
                    <Text style={styles.initiatedColor}>INITIATED</Text>
                        <View style={styles.lab}>
                            <Text style={styles.labs}>
                                Lab Assign Pending
                            </Text>
                            <Text style={styles.date}>Date</Text>

                        </View>
                        <Text style={styles.description}>
                            description
                        </Text>
                 
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


        </View>

    )
}
export default BookingsCard;