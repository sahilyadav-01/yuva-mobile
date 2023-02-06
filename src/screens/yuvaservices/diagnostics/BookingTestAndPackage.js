import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TextInput, Alert } from 'react-native';
import SelectList from 'react-native-dropdown-select-list'
import MainHeader from '../../../components/MainHeader';
import { useDispatch, useSelector } from 'react-redux';
import {
    diagnosisTestDetailsThunk,
    bookTestThunk,
    diagnosisPackageDetailsThunk, rescheduleCancelBookingThunk,
    cityIdThunk
} from '../../../store/reducers/DiagnosticsSlice';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core'
import { DateTimePicker } from '@hashiprobr/react-native-paper-datetimepicker';
import DiagnosticHeader from '../../../components/DiagnosticHeader';
import { getEpoch, getTime } from '../../../utils/utils';
import MessageBox from '../../../components/MessageBox';
import { styles } from './styles';
import { DARK_BLUE } from '../../../styles/colors';
import { getRelations } from '../../../store/reducers/ProfileSlice';
import { ABOUT_TEST, ALERT, BOOK_NOW, DIAGNOSTIC, FALSE, INDIVIDUAL_TEST, INSTRUCTIONS, LAB, LOCATION, MYSELF, NULL, OK, PACKAGE, PINCODE, RESCHEDULE, SELECT, SOMETHING_WENT_WRONG, TIME } from './constants';
import Header from '../../../components/Header';


const BookingTestAndPackage = ({ route }) => {
    const { id, packageData, bookedDetailsById } = route.params;
    if (!bookedDetailsById) {
        var { packageName, packageUuid } = packageData;
    } else {
        var pincodeData = bookedDetailsById.patientLocation.split(',')
    }
    const dispatch = useDispatch();
    const navigation = useNavigation()
    const { jwt } = useSelector(state => state.auth.user);
    const { testDetails, packageDetails, cityId } = useSelector(state => state.diagnostic);
    const {relationId}=useSelector(state=>state.profile);
    const [location, setLocation] = useState('');
    const [pincode, setPincode] = useState('');
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(new Date());
    const [selected, setSelected] = useState("");
    const [selected1, setSelected1] = useState("");
    const [data, setData] = useState()
    const [dataRelation,setDataRelation]=useState();

    useEffect(() => {
        if (!bookedDetailsById) {

            if (id && packageData === '') {
                dispatch(diagnosisTestDetailsThunk({ id }));

            } else if (packageData?.packageName && id === '') {
                dispatch(diagnosisPackageDetailsThunk({ packageName }));
            }
        }
    }, []);
    const handleDate = date => {
        setDate(date);
    };

    const handleTime = time => {
        setTime(time);
    };

    const onChangeLocation = text => {
        setLocation(text);
    };

    const onChangePincode = text => {
        setPincode(text);
    };


    useEffect(() => {


        if (cityId.length > 0) {
            let newArray = cityId.map((item) => {
                return { key: item.id, value: item.name }

            }
            )
            setData(newArray)
        } else {
            dispatch(cityIdThunk())
        }


    }, [cityId])

    const bookTest = () => {
        var data = {
            address: location,
            cityId: selected,
            relationId:selected1,
            pinCode: pincode,
            timeSlot: getEpoch(date, time),
        };
        if (id && packageData === '') {
            data = {
                ...data,
                attributeId: testDetails.id,
                attributeType: INDIVIDUAL_TEST,
            };
            dispatch(bookTestThunk({ data })).then((resp) => {
                if (resp) {
                    if (resp?.payload?.message) {
                        Alert.alert(ALERT, resp?.payload?.message, [{
                            text: OK,
                            onPress: () => { navigation.navigate(DIAGNOSTIC) }
                        }])
                    } else if (resp?.payload?.address) {

                        Alert.alert(ALERT, resp?.payload?.address, [{
                            text: OK,
                        }])
                    } else if (resp?.payload?.pinCode) {

                        Alert.alert(ALERT, resp?.payload?.pinCode, [{
                            text:OK,
                        }])
                    } else if (resp?.payload?.errorMessage) {

                        Alert.alert(ALERT, resp?.payload?.errorMessage, [{
                            text: OK,
                        }])
                    }
                    else {
                        Alert.alert(ALERT, SOMETHING_WENT_WRONG, [{
                            text:OK,
                        }])
                    }
                }
                else {
                    //setSaveFalg(true);
                    Alert.alert(ALERT, SOMETHING_WENT_WRONG, [{
                        text:OK,
                    }])
                }
            }

            );
        } else if (packageName && id === '') {
            data = {
                ...data,
                attributeId: packageUuid,
                attributeType: PACKAGE,
            };
            dispatch(bookTestThunk({ data })).then((resp) => {
                if (resp) {
                    // setSaveFalg(true);
                    if (resp?.payload?.message) {
                        Alert.alert(ALERT, resp?.payload?.message, [{
                            text:OK,
                            onPress: () => { navigation.navigate(DIAGNOSTIC) }
                        }])
                    } else if (resp?.payload?.address) {

                        Alert.alert(ALERT, resp?.payload?.address, [{
                            text:OK,
                        }])
                    } else if (resp?.payload?.pinCode) {

                        Alert.alert(ALERT, resp?.payload?.pinCode, [{
                            text:OK,
                        }])
                    } else if (resp?.payload?.errorMessage) {

                        Alert.alert(ALERT, resp?.payload?.errorMessage, [{
                            text:OK,
                        }])
                    }
                    else {
                        Alert.alert(ALERT,SOMETHING_WENT_WRONG, [{
                            text: OK,
                        }])
                    }
                }
                else {
                    //setSaveFalg(true);
                    Alert.alert(ALERT,SOMETHING_WENT_WRONG, [{
                        text: OK,
                    }])
                }
            }

            );
        }
    };

    const rescheduleBooking = () => {
        dispatch(rescheduleCancelBookingThunk({ id: bookedDetailsById.id, isCancelled:FALSE, timeSlot: getEpoch(date, time) })).then((resp) => {
            if (resp) {

                if (resp.payload.message) {
                    Alert.alert(ALERT, resp.payload.message, [{
                        text: OK,
                        onPress: () => { navigation.navigate(DIAGNOSTIC) }
                    }])
                } else if (resp.payload.errorMessage) {

                    Alert.alert(ALERT, resp.payload.errorMessage, [{
                        text: OK,
                    }])
                }
            }
            else {

                Alert.alert(ALERT, SOMETHING_WENT_WRONG, [{
                    text: OK,
                }])


            }
        })
    }
    useEffect(() => {
        if (relationId?.length > 0) {
            let newArray = relationId.map((item) => {
                return { key: item.id, value: item.name+"-"+item.relation+"("+item.age+")"}
            }
            )
            setDataRelation(newArray)
        } else {
            dispatch(getRelations({ jwt }))
        }   
    }, [relationId])
    
    return (
        <View style={styles.margin}>
            <Header isRightIcon={true} />
            <ScrollView
               style={styles.contentContainerStyle}>
                <View style={styles.booksID}>
                    {!bookedDetailsById ? (
                        <View>
                            {testDetails && packageDetails === '' ? (
                                <View>
                                    <View>
                                        <Text style={styles.booked}>
                                            {testDetails.name}
                                        </Text>
                                    </View>
                                    <View>
                                        <Text style={styles.bookingDetails}>
                                         {ABOUT_TEST}
                                        </Text>
                                        <Text style={styles.color}>{testDetails.description}</Text>

                                        <Text style={styles.bookingDetails}>
                                           {INSTRUCTIONS}
                                        </Text>
                                        <Text style={styles.color}>{testDetails.instruction}</Text>
                                    </View>
                                </View>
                            ) : (
                                <View>
                                    <View>
                                        <Text style={styles.booked}>
                                            {packageDetails.packageName}
                                        </Text>
                                    </View>
                                    <View>
                                        <Text style={styles.bookingDetails}>
                                         {ABOUT_TEST}
                                        </Text>
                                        <Text style={styles.color}>{packageDetails.description}</Text>
                                        <Text style={styles.bookingDetails}>
                                          {INSTRUCTIONS}
                                        </Text>
                                        <Text style={styles.bookingDetails}>
                                            {packageDetails.totalTest} {LAB}
                                        </Text>
                                        {packageDetails &&
                                            packageDetails.attributeResponseDtoList.map((item, index) => {
                                                return (

                                                    <View style={styles.itemView}>
                                                        <Text style={styles.itemText}>
                                                            {item.attributeName}
                                                        </Text>
                                                    </View>
                                                );
                                            })}
                                    </View>
                                </View>
                            )}
                        </View>
                    ) : (
                        <View>
                            {bookedDetailsById && !bookedDetailsById.packageName ? (
                                <View>
                                    <View>
                                        <Text style={styles.booked}>
                                            {bookedDetailsById?.testName[0]}
                                        </Text>
                                    </View>
                                    <View>
                                        <Text style={styles.bookingDetails}>
                                         {ABOUT_TEST}
                                        </Text>
                                        <Text style={styles.color}>{bookedDetailsById?.testOrPackageDescription}</Text>

                                        <Text style={styles.bookingDetails}>
                                           {INSTRUCTIONS}
                                        </Text>
                                        <Text style={styles.color}>{bookedDetailsById?.instruction}</Text>
                                    </View>
                                </View>
                            ) : (
                                <View>
                                    <View>
                                        <Text style={styles.booked}>
                                            {bookedDetailsById.packageName}
                                        </Text>
                                    </View>
                                    <View>
                                        <Text style={styles.bookingDetails}>
                                          {ABOUT_TEST}
                                        </Text>
                                        <Text style={styles.color}>{bookedDetailsById.description}</Text>
                                        <Text style={styles.bookingDetails}>
                                          {INSTRUCTIONS}
                                        </Text>
                                        <Text style={styles.bookingDetails}>
                                            {bookedDetailsById.testName.length}{LAB}
                                        </Text>
                                        {bookedDetailsById.testName &&
                                            bookedDetailsById.testName.map((item, index) => {
                                                return (

                                                    <View style={styles.itemView}>
                                                        <Text style={styles.itemText}>
                                                            {item}
                                                        </Text>
                                                    </View>
                                                );
                                            })}
                                    </View>
                                </View>
                            )}
                        </View>
                    )}
                    {!bookedDetailsById ? (
                        <View>
                            <View style={styles.dateView}>
                                <DateTimePicker
                                    value={date}
                                    onChangeDate={handleDate}
                                    style={styles.dateTimePicker}
                                    selectionColor={DARK_BLUE}
                                    theme={styles.theme}
                                    minimumDate={new Date()}
                                />
                                <DateTimePicker
                                    type={TIME}
                                    value={time}
                                    onChangeDate={handleTime}
                                     style={styles.dateTimePicker}
                                    selectionColor={DARK_BLUE}
                                    theme={styles.theme}
                                />
                                <SelectList
                                style={styles.textInputStyle}
                                  boxStyles={styles.boxStyles}
                                    setSelected={setSelected}
                                    data={data}
                                    placeholder={SELECT}
                                />
                                <TextInput
                                    multiline={true}
                                    style={styles.textInputStyle}                                
                                    placeholder={LOCATION}
                                    onChangeText={onChangeLocation}
                                />
                                <TextInput
                                    multiline={true}
                                    style={styles.textInputStyle}
                                    
                                    placeholder={PINCODE}
                                    onChangeText={onChangePincode}
                                />
                                <SelectList
                                    boxStyles={styles.boxStyles}
                                    defaultOption={{ key:NULL, value:MYSELF }}
                                    setSelected={setSelected1}
                                    data={dataRelation}
                                />
                            </View>
                            <TouchableOpacity
                                onPress={bookTest}
                                style={styles.touchable}>
                                <Text style={styles.textBook}>
                                    {BOOK_NOW}
                                </Text>
                                {/* </View> */}
                            </TouchableOpacity>
                        </View>
                    ) : (
                        <View>
                            <View style={styles.view}>
                                <DateTimePicker
                                    value={date}
                                    onChangeDate={handleDate}
                                    style={styles.dateTimePicker}
                                    selectionColor={DARK_BLUE}
                                    theme={styles.theme}
                                    minimumDate={new Date()}
                                />
                                <DateTimePicker
                                    type={TIME}
                                    value={time}
                                    onChangeDate={handleTime}
                                    style={styles.dateTimePicker}
                                    selectionColor={DARK_BLUE}
                                    theme={styles.theme}
                                />
                                <TextInput
                                    multiline={true}
                                    value={bookedDetailsById.patientLocation}
                                    style={styles.textInputStyle}
                                    placeholder={LOCATION}
                                    editable={false}

                                />
                                <TextInput
                                    multiline={true}
                                    value={pincodeData[pincodeData.length - 1]}
                                    style={styles.textInputStyle}
                                    placeholder={PINCODE}
                                    editable={false}
                                />
                            </View>
                            <TouchableOpacity
                                onPress={rescheduleBooking}
                                style={styles.touchable}>
                                <Text style={styles.textBook}>
                                    {RESCHEDULE}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    )}


                </View>
            </ScrollView>
        </View>
    );
};

export default BookingTestAndPackage;
