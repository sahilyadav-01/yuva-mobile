import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import SelectList from 'react-native-dropdown-select-list';
import Header from '../../../components/Header'
import { BOOKINGCONFIRM, BOOKING_FOR, MYSELF, MY_TESTS, NULL, RESCHEDULEAPPOINTMENT, SCHEDULE_APPOINMENT, SELECT_DATE, SELECT_MEMBER } from './constants';
import { useBookingConfirm } from './hooks/useBookingConfirm';
import { DARK_GRAY } from '../../../styles/colors';
import AddressList from '../../../components/Address';
import CustomDatePicker from '../../../components/CustomDatePicker';



const BookingConfirm = () => {
    const { packageDetails,
        dataRelation,
        userAddress,
        bookTestScreen,
        bookedDetails,
        rescheduleBooking,
        addressListing,
        handleDateTime,
        setSelectedMember
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
                            <CustomDatePicker onDateTimeSelect={handleDateTime} OPD={false}/>
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
                                    search={false}
                                    defaultOption={{ key: NULL, value: MYSELF }}
                                    setSelected={setSelectedMember}
                                    inputStyles={styles.valueStyle}
                                    data={dataRelation}
                                    dropdownStyles={styles.dropStyles}
                                    dropdownTextStyles={{color:DARK_GRAY}}
                                />
                            </View>
                            ) : (<View style={styles.border} pointerEvents="none">
                                <Text style={styles.SelectMember}>{SELECT_MEMBER}</Text>
                                <SelectList
                                    boxStyles={[styles.boxStyles,styles.backGroundStyle]}
                                    defaultOption={{key:'0',value:bookedDetails?.data?.relation === null ? MYSELF :`${bookedDetails?.data?.memberName}  -  ${bookedDetails?.data?.relation} (${bookedDetails?.data?.memberAge})`}}
                                    setSelected={setSelectedMember}
                                    data={dataRelation}
                                    dropdownStyles={styles.dropStyles}
                                    inputStyles={styles.valueStyle}
                                    dropdownTextStyles={{color:DARK_GRAY}}
                                    search={false}
                                />
                            </View>)}
                        <AddressList isNavScreen={BOOKINGCONFIRM}/>
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