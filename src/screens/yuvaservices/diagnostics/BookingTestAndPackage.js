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
import { styles } from './style';
import { DARK_BLUE } from '../../../styles/colors';


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
    const [location, setLocation] = useState('');
    const [pincode, setPincode] = useState('');
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(new Date());
    const [selected, setSelected] = useState("");
    const [data, setData] = useState()

    useEffect(() => {
        if (!bookedDetailsById) {

            if (id && packageData === '') {
                dispatch(diagnosisTestDetailsThunk({ jwt, id }));

            } else if (packageData?.packageName && id === '') {
                dispatch(diagnosisPackageDetailsThunk({ jwt, packageName }));
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
            dispatch(cityIdThunk({ jwt }))
        }


    }, [cityId])

    const bookTest = () => {
        var data = {
            address: location,
            cityId: selected,
            // labId: 1,
            pinCode: pincode,
            timeSlot: getEpoch(date, time),
        };
        if (id && packageData === '') {
            data = {
                ...data,
                attributeId: testDetails.id,
                attributeType: 'INDIVIDUAL_TEST',
            };
            dispatch(bookTestThunk({ jwt, data })).then((resp) => {
                if (resp) {
                    if (resp?.payload?.message) {
                        Alert.alert("Alert", resp?.payload?.message, [{
                            text: "Ok",
                            onPress: () => { navigation.navigate("Diagnostic") }
                        }])
                    } else if (resp?.payload?.address) {

                        Alert.alert("Alert", resp?.payload?.address, [{
                            text: "Ok",
                        }])
                    } else if (resp?.payload?.pinCode) {

                        Alert.alert("Alert", resp?.payload?.pinCode, [{
                            text: "Ok",
                        }])
                    } else if (resp?.payload?.errorMessage) {

                        Alert.alert("Alert", resp?.payload?.errorMessage, [{
                            text: "Ok",
                        }])
                    }
                    else {
                        Alert.alert("Alert", "Something went wrong", [{
                            text: "Ok",
                        }])
                    }
                }
                else {
                    //setSaveFalg(true);
                    Alert.alert("Alert", "Something went wrong", [{
                        text: "Ok",
                    }])
                }
            }

            );
        } else if (packageName && id === '') {
            data = {
                ...data,
                attributeId: packageUuid,
                attributeType: 'PACKAGE',
            };
            dispatch(bookTestThunk({ jwt, data })).then((resp) => {
                if (resp) {
                    // setSaveFalg(true);
                    if (resp?.payload?.message) {
                        Alert.alert("Alert", resp?.payload?.message, [{
                            text: "Ok",
                            onPress: () => { navigation.navigate("Diagnostic") }
                        }])
                    } else if (resp?.payload?.address) {

                        Alert.alert("Alert", resp?.payload?.address, [{
                            text: "Ok",
                        }])
                    } else if (resp?.payload?.pinCode) {

                        Alert.alert("Alert", resp?.payload?.pinCode, [{
                            text: "Ok",
                        }])
                    } else if (resp?.payload?.errorMessage) {

                        Alert.alert("Alert", resp?.payload?.errorMessage, [{
                            text: "Ok",
                        }])
                    }
                    else {
                        Alert.alert("Alert", "Something went wrong", [{
                            text: "Ok",
                        }])
                    }
                }
                else {
                    //setSaveFalg(true);
                    Alert.alert("Alert", "Something went wrong", [{
                        text: "Ok",
                    }])
                }
            }

            );
        }
    };

    const rescheduleBooking = () => {
        dispatch(rescheduleCancelBookingThunk({ jwt, id: bookedDetailsById.id, isCancelled: "false", timeSlot: getEpoch(date, time) })).then((resp) => {
            if (resp) {

                if (resp.payload.message) {
                    Alert.alert("Alert", resp.payload.message, [{
                        text: "Ok",
                        onPress: () => { navigation.navigate("Diagnostic") }
                    }])
                } else if (resp.payload.errorMessage) {

                    Alert.alert("Alert", resp.payload.errorMessage, [{
                        text: "Ok",
                    }])
                }
            }
            else {

                Alert.alert("Alert", "Something went wrong", [{
                    text: "Ok",
                }])


            }
        })
    }
    const  mockData= [
        {key:'1', value:'Rahul'},
        {key:'2', value:'Sita'},
        {key:'3', value:'Sunitha'},
        {key:'4', value:'rohit'},
        {key:'5', value:'Anjali'},
      ]
    return (
        <View>
            <MainHeader />
            <DiagnosticHeader />
            <ScrollView
               style={styles.contentContainerStyle}>
                <View className="pl-[15px] pr-[15px]">
                    {!bookedDetailsById ? (
                        <View>
                            {testDetails && packageDetails === '' ? (
                                <View>
                                    <View>
                                        <Text className="mt-[10px] mb-[10px] font-bold text-lg text-black">
                                            {testDetails.name}
                                        </Text>
                                    </View>
                                    <View>
                                        <Text className="font-bold pt-[15px] pb-[15px] text-black">
                                            About the test
                                        </Text>
                                        <Text>{testDetails.description}</Text>

                                        <Text className="font-bold pt-[15px] pb-[15px] text-black">
                                            Instructions
                                        </Text>
                                        <Text>{testDetails.instruction}</Text>
                                    </View>
                                </View>
                            ) : (
                                <View>
                                    <View>
                                        <Text className="mt-[10px] mb-[10px] font-bold text-lg text-black">
                                            {packageDetails.packageName}
                                        </Text>
                                    </View>
                                    <View>
                                        <Text className="font-bold pt-[15px] pb-[15px] text-black">
                                            About the test
                                        </Text>
                                        <Text>{packageDetails.description}</Text>
                                        <Text className="font-bold pt-[15px] pb-[15px] text-black">
                                            Instructions
                                        </Text>
                                        <Text className="font-bold pt-[15px] pb-[15px] text-black">
                                            {packageDetails.totalTest} Lab Tests in this package
                                        </Text>
                                        {packageDetails &&
                                            packageDetails.attributeResponseDtoList.map((item, index) => {
                                                return (

                                                    <View className="bg-[#1D2334] mb-[10px] pb-[20px] flex-row">
                                                        <Text className="text-base ml-[10px] text-white py-[1px]">
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
                                        <Text className="mt-[10px] mb-[10px] font-bold text-lg text-black">
                                            {bookedDetailsById?.testName[0]}
                                        </Text>
                                    </View>
                                    <View>
                                        <Text className="font-bold pt-[15px] pb-[15px] text-black">
                                            About the test
                                        </Text>
                                        <Text>{bookedDetailsById?.testOrPackageDescription}</Text>

                                        <Text className="font-bold pt-[15px] pb-[15px] text-black">
                                            Instructions
                                        </Text>
                                        <Text>{bookedDetailsById?.instruction}</Text>
                                    </View>
                                </View>
                            ) : (
                                <View>
                                    <View>
                                        <Text className="mt-[10px] mb-[10px] font-bold text-lg text-black">
                                            {bookedDetailsById.packageName}
                                        </Text>
                                    </View>
                                    <View>
                                        <Text className="font-bold pt-[15px] pb-[15px] text-black">
                                            About the test
                                        </Text>
                                        <Text>{bookedDetailsById.description}</Text>
                                        <Text className="font-bold pt-[15px] pb-[15px] text-black">
                                            Instructions
                                        </Text>
                                        <Text className="font-bold pt-[15px] pb-[15px] text-black">
                                            {bookedDetailsById.testName.length} Lab Tests in this package
                                        </Text>
                                        {bookedDetailsById.testName &&
                                            bookedDetailsById.testName.map((item, index) => {
                                                return (

                                                    <View className="bg-[#1D2334] mb-[10px] pb-[20px] flex-row">
                                                        <Text className="text-base ml-[10px] text-white py-[1px]">
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
                            <View className="mt-[20px]">
                                <DateTimePicker
                                    value={date}
                                    onChangeDate={handleDate}
                                    style={styles.dateTime}
                                    selectionColor={DARK_BLUE}
                                    theme={styles.theme}
                                    minimumDate={new Date()}
                                />
                                <DateTimePicker
                                    type="time"
                                    value={time}
                                    onChangeDate={handleTime}
                                    style={styles.dateTime}
                                    selectionColor={DARK_BLUE}
                                    theme={styles.theme}
                                />
                                <SelectList
                                  boxStyles={styles.boxStyles1}
                                    setSelected={setSelected}
                                    data={data}
                                />
                                <TextInput
                                    multiline={true}
                                    style={styles.textInput}
                                    className="h-[50px] rounded shadow-2xl pl-2 pb-0 pt-1"
                                    placeholder="Location"
                                    onChangeText={onChangeLocation}
                                />
                                <TextInput
                                    multiline={true}
                                    style={styles.textInput}
                                    className="h-[50px] mt-[15px]  rounded shadow-2xl pl-2 pb-0 pt-1"
                                    placeholder="Pincode"
                                    onChangeText={onChangePincode}
                                />
                                <SelectList
                                    boxStyles={styles.boxStyles}
                                    defaultOption={{ key: '0', value: 'Myself' }}
                                    setSelected={setSelected}
                                    data={mockData}
                                />
                            </View>
                            <TouchableOpacity
                                onPress={bookTest}
                                style={styles.touchable}
                                className="mt-[40px] rounded">
                                <Text className="text-center font-bold pt-[15px] pb-[15px] text-white">
                                    Book Now
                                </Text>
                                {/* </View> */}
                            </TouchableOpacity>
                        </View>
                    ) : (
                        <View>
                            <View className="mt-[20px]">
                                <DateTimePicker
                                    value={date}
                                    onChangeDate={handleDate}
                                    style={styles.dateTime}
                                    selectionColor={DARK_BLUE}
                                    theme={styles.theme}
                                    minimumDate={new Date()}
                                />
                                <DateTimePicker
                                    type="time"
                                    value={time}
                                    onChangeDate={handleTime}
                                    style={styles.dateTime}
                                    selectionColor={DARK_BLUE}
                                    theme={styles.theme}
                                />
                                <TextInput
                                    multiline={true}
                                    value={bookedDetailsById.patientLocation}
                                    style={styles.textInput}
                                    className="h-[50px] rounded shadow-2xl pl-2 pb-0 pt-1"
                                    placeholder="Location"
                                    editable={false}

                                />
                                <TextInput
                                    multiline={true}
                                    value={pincodeData[pincodeData.length - 1]}
                                    style={styles.textInput}
                                    className="h-[50px] mt-[15px]  rounded shadow-2xl pl-2 pb-0 pt-1"
                                    placeholder="Pincode"
                                    editable={false}
                                />
                            </View>
                            <TouchableOpacity
                                onPress={rescheduleBooking}
                                style={styles.touchable}
                                className="mt-[40px] rounded">
                                <Text className="text-center font-bold pt-[15px] pb-[15px] text-white">
                                    Reschedule
                                </Text>
                                {/* </View> */}
                            </TouchableOpacity>
                        </View>
                    )}


                </View>
            </ScrollView>
        </View>
    );
};

export default BookingTestAndPackage;
