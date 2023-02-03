
import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { styles } from './styles';
import { CANCELLED,  DATE, DESCRIPTION, INITIATED, PENDING, RESCHEDULED } from './constants';
import CardButton from './CardButton'
import { GREEN, RED_SHADE } from '../styles/colors';
const BookingsCard = ({props }) => {

    return (
<View>
<TouchableOpacity>
        <View style={styles.BookingCard}>
            <View >
                <View style={styles.status}>
                    <Text style={styles.initiatedColor}>{INITIATED}</Text>
                        <View style={styles.lab}>
                            <Text style={styles.labs}>
                              {PENDING}
                            </Text>
                            <Text style={styles.date}>{DATE}</Text>

                        </View>
                        <Text style={styles.description}>
                            {DESCRIPTION}
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