import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import SelectList from 'react-native-dropdown-select-list';
import Header from '../../../components/Header'
import { BOOKINGCONFIRM, BOOKING_FOR, DATE, MYSELF, MY_TESTS, NULL, PHN, RESCHEDULEAPPOINTMENT, SCHEDULE_APPOINMENT, SELECT_DATE, SELECT_MEMBER, SUDHIR, TIME } from './constants';
import { useBookingConfirm } from './hooks/useBookingConfirm';
import { DateTimePicker } from '@hashiprobr/react-native-paper-datetimepicker';
import { DARK_BLUE, DARK_GRAY } from '../../../styles/colors';
import AddressList from '../../../components/Address';



const BookingConfirm = () => {

    const { packageDetails,
        handleDate,
        handleTime,
        date,
        time, setSelected,
        dataRelation,
        userAddress,
        bookTestScreen,
        bookedDetails,
        rescheduleBooking,
        addressListing
    } = useBookingConfirm();

    if (userAddress) {

        return (

            <View>
                <Header showBackButton={true} title={MY_TESTS} />
                <ScrollView
                    contentContainerStyle={styles.contentContainerStyle}>
                    <View style={styles.booksID}>

                        <View>
                            <Text style={styles.booked}>
                                {packageDetails?.packageName}
                            </Text>
                        </View>
                        <View>
                            <Text style={styles.selectDate}>
                                {SELECT_DATE}
                            </Text>
                            <View style={styles.border}>
                                <View style={styles.dateAndTime}>
                                    <Text style={styles.Date}>{DATE}</Text>
                                    <DateTimePicker
                                        type={DATE}
                                        value={date}
                                        onChangeDate={handleDate}
                                        style={styles.dateTimePicker}
                                        selectionColor={DARK_BLUE}
                                        theme={styles.theme}
                                        minimumDate={new Date()}
                                    />
                                </View>

                                <View style={styles.dateAndTime}>
                                    <Text style={styles.Time}>{TIME}</Text>
                                    <DateTimePicker
                                        type="time"
                                        value={time}
                                        onChangeDate={handleTime}
                                        style={styles.dateTimePicker}
                                        selectionColor={DARK_BLUE}
                                        theme={styles.theme}
                                    />
                                </View>
                            </View>
                        </View>
                        <View>
                            <Text style={styles.selectDate}>
                                {BOOKING_FOR}
                            </Text>
                        </View>
                        {!bookedDetails ?
                            (<View style={styles.border}>
                                <Text style={styles.SelectMember}>{SELECT_MEMBER}</Text>
                                <SelectList
                                    boxStyles={styles.boxStyles}
                                    defaultOption={{ key: NULL, value: MYSELF }}
                                    setSelected={setSelected}
                                    data={dataRelation}
                                    dropdownStyles={styles.dropStyles}
                                    inputStyles={styles.valueStyle}
                                    dropdownTextStyles={{color:DARK_GRAY}}
                                />
                            </View>
                            ) : (<View style={styles.border} pointerEvents="none">
                                <Text style={styles.SelectMember}>{SELECT_MEMBER}</Text>
                                <SelectList
                                    boxStyles={[styles.boxStyles,styles.backGroundStyle]}
                                    defaultOption={{ key: NULL, value: MYSELF }}
                                    setSelected={setSelected}
                                    data={dataRelation}
                                    dropdownStyles={styles.dropStyles}
                                    inputStyles={styles.valueStyle}
                                    dropdownTextStyles={{color:DARK_GRAY}}
                                />
                            </View>)}
                        <AddressList isNavScreen={{BOOKINGCONFIRM,booked:bookedDetails}}/>
                    </View>
                    <View>
                        {!bookedDetails && addressListing?.length>0 ? (
                            <TouchableOpacity
                                onPress={bookTestScreen}
                                style={styles.touchableButton}>
                                <Text style={styles.textBook}>
                                    {SCHEDULE_APPOINMENT}
                                </Text>
                            </TouchableOpacity>
                        ) : (

                            <TouchableOpacity
                                onPress={rescheduleBooking}
                                style={styles.touchableButton}>
                                <Text style={styles.textBook}>
                                    {RESCHEDULEAPPOINTMENT}
                                </Text>
                            </TouchableOpacity>

                        )}
                    </View>
                    <View>
                    </View>
                </ScrollView >
            </View >
        );
    }
};

export default BookingConfirm;