import React from 'react';
import { View, Text, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import AppointmentButton from '../../../components/AppointmentButton';
import MessageBox from '../../../components/MessageBox';
import { styles } from './styles';
import Header from '../../../components/Header';
import { ARE_YOU_SURE, CALENDER, CANCEL, DETAILS, MESSAGE, MY_TESTS, PACKAGE, RESCHEDULE, SELECTED_ADRESS, TEST, } from './constants';
import { RED_SHADE,WHITE,GREEN } from '../../../styles/colors';
import { useRescheduleAndCancel } from './hooks/useRescheduleAndCancel';
import { getDate, getTime, dignosticStatus } from '../../../utils/utils';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { DIAGNOSTIC_HEALTH_PACKAGE } from '../constants';


const RescheduleAndCancel = () => {
    const cancelMessage = ARE_YOU_SURE;
    const textStyle = (status) => {
        switch (status) {
            case 'CANCELLED': return styles.cancelledColor;
            case 'INITIATED': return styles.initiatedColor;
            default: return styles.confirmedColor
        }
    }
    const backGroundStyle = (status) => {
        switch (status) {
            case 'CANCELLED': return styles.cancelledBgColor;
            case 'INITIATED': return styles.initiatedBgColor;
            default: return styles.confirmedBgColor
        }
    }
    const {
        cancelBookingButton,
        cancelBooking,
        cancelFlag,
        reschedule,
        rescheduleBooking,
        onDetailsScreen
    } = useRescheduleAndCancel();
    const renderTest = ({ item, index }) => {
        return (
            <View style={styles.TestList}>
                <Text style={styles.testItems}>{item}</Text>

            </View>
        )
    }
    const renderPackage = ({ item, index }) => {
        return (
            <View style={styles.details}>
                <Text style={styles.packageName}>{item.name}</Text>
                <TouchableOpacity onPress={onDetailsScreen}>
                    <Text style={styles.packageDetails}>{DETAILS}</Text>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <View >
            <Header showBackButton={true} title={MY_TESTS} />
            <ScrollView contentContainerStyle={styles.contentContainerStyle}>
                <View style={backGroundStyle(reschedule?.bookingStatus)}>
                    <Text style={textStyle(reschedule?.bookingStatus)}>{dignosticStatus(reschedule?.bookingStatus).slice(0,25)}..</Text>
                    <View style={styles.timeSlot}>
                        <View style={styles.direction}>
                            <Icon name={CALENDER} size={24} color={WHITE} />
                            <View>
                                <Text style={styles.numberSytle}>{getDate(reschedule?.timeSlot)}</Text>
                                <Text style={styles.numberSytle}>{getTime(reschedule?.timeSlot)}</Text>
                            </View>
                        </View>
                    </View>

                </View>
                <View >
                    <Text style={styles.selectDate}>
                        {SELECTED_ADRESS}
                    </Text>
                </View>
                <View style={styles.border}>
                    <Text style={styles.adressName}>{reschedule?.patientName}</Text>
                    <Text style={styles.address}>{reschedule?.patientLocation}</Text>
                    <Text style={styles.adressPhn}>{reschedule?.patientPhoneNumber}</Text>
                </View>
                <View style={styles.TestHeader}>
                    <Text style={styles.Test}>{TEST}</Text>
                </View>
                <View >
                    {reschedule?.testName?.length &&
                        <FlatList
                            renderItem={renderTest}
                            data={reschedule.testName}
                            keyExtractor={(item) => item.id}
                            showsHorizontalScrollIndicator={false}
                        />}
                </View>
                <View style={styles.PackageHeader}>
                    <Text style={styles.package}>{PACKAGE}</Text>
                </View>
                <View>
                    {reschedule?.packageNameDescriptionDtoList?.length &&
                        <FlatList
                            renderItem={renderPackage}
                            data={reschedule.packageNameDescriptionDtoList}
                            keyExtractor={(item) => item.id}
                            showsHorizontalScrollIndicator={false}
                        />}
                </View>
                {!(reschedule?.bookingStatus==='COMPLETED'|| reschedule?.bookingStatus==='FINISHED') &&
                <View style={styles.buttonView}>
                    <AppointmentButton
                     extraStyles={styles.button}
                     textStyles={styles.buttonTextStyle}
                        name={RESCHEDULE}
                        color={GREEN}
                        action={rescheduleBooking}
                        reschedule={true}
                    />
                    <AppointmentButton
                    extraStyles={styles.button}
                    textStyles={styles.buttonTextStyle}
                        name={CANCEL}
                        color={RED_SHADE}
                        action={cancelBookingButton}
                    />
                </View>}
                <View>
                    <MessageBox
                        head={MESSAGE}
                        showDialog={cancelFlag}
                        hideDialog={cancelBooking}
                        message={cancelMessage}
                    />
                </View>
            </ScrollView>
        </View>
    );
};

export default RescheduleAndCancel;