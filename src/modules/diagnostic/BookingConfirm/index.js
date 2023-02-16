import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { styles } from './styles';
import { Checkbox } from 'react-native-paper';
import SelectList from 'react-native-dropdown-select-list'
import Header from '../../../components/Header'
import { ADDRESS, ADD_MEMBER, ADD_NEW, BOOKING_FOR, BOOK_NOW, DATE, MYSELF, NULL, PHN, SCHEDULE_APPOINMENT, SELECT_ADRESS, SELECT_DATE, SELECT_MEMBER, SUDHIR, TIME } from './constants';
import { useBookingConfirm } from './hooks/useBookingConfirm';
import { DateTimePicker } from '@hashiprobr/react-native-paper-datetimepicker';
import { DARK_BLUE } from '../../../styles/colors';
import { SVG } from '../../../../assets';



const BookingConfirm = () => {

    const { packageDetails,
        handleDate,
        handleTime,
        date,
        time, setSelected,
        checked,
        setChecked,
        dataRelation,
        userAddress,
        bookTestScreen } = useBookingConfirm();
    const renderAddress = ({ item, index }) => {
        if (item) {
            return (

                <View style={styles.border}>

                    <View style={styles.checkboxAddress}>
                        <Checkbox
                            status={checked === index ? 'checked' : 'unchecked'}
                            onPress={() => {
                                checked !== index ? setChecked(index) : setChecked(null);
                            }}

                        />
                    </View>
                    <Text style={styles.adressName}>{item?.address}</Text>
                    <Text style={styles.adressName}>{item?.cityName}-{item?.pinCode}</Text>
                    <Text style={styles.adressCheck}>{item?.contactNumber}</Text>
                </View>
            )
        }
    }
    if (userAddress) {


        return (

            <View>
                <Header />
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
                        <View style={styles.border}>
                            <TouchableOpacity>
                                <View >
                                    <Text style={styles.AddMember}>
                                        <SVG.AddNewAdress />
                                        {ADD_MEMBER}</Text>
                                </View>
                            </TouchableOpacity>
                            <Text style={styles.SelectMember}>{SELECT_MEMBER}</Text>
                            <SelectList
                                boxStyles={styles.boxStyles}
                                defaultOption={{ key: NULL, value: MYSELF }}
                                setSelected={setSelected}
                                data={dataRelation}
                            />
                        </View>

                        <View style={styles.address}>
                            <Text style={styles.selectDate}>
                                {SELECT_ADRESS}
                            </Text>
                            <TouchableOpacity >
                                <View style={styles.Add}>
                                    <Text style={styles.addNew}>
                                        <SVG.AddNewAdress />
                                        {ADD_NEW}

                                    </Text>

                                </View>
                            </TouchableOpacity>
                        </View>
                        <View>
                            {userAddress.length &&
                                <FlatList
                                    renderItem={renderAddress}
                                    data={userAddress}
                                    keyExtractor={(item) => item.id}
                                    showsHorizontalScrollIndicator={false}
                                />}
                        </View>
                    </View>
                    <TouchableOpacity
                        onPress={bookTestScreen}
                        style={styles.touchableButton}>
                        <Text style={styles.textBook}>
                            {SCHEDULE_APPOINMENT}
                        </Text>
                    </TouchableOpacity>
                    <View>
                    </View>
                </ScrollView >
            </View >
        );
    }
};

export default BookingConfirm;