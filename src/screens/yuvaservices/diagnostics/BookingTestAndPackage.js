

import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, TextInput } from 'react-native';
import MainHeader from '../../../components/MainHeader';
import { useDispatch, useSelector } from 'react-redux';
import {
    diagnosisTestDetailsThunk,
    bookTestThunk,
    diagnosisPackageDetailsThunk,
} from '../../../store/reducers/DiagnosticsSlice';
import { TouchableOpacity } from 'react-native';
import { DateTimePicker } from '@hashiprobr/react-native-paper-datetimepicker';
import DiagnosticHeader from '../../../components/DiagnosticHeader';
import { getEpoch, getTime } from '../../../utils/utils';
import MessageBox from '../../../components/MessageBox';

const BookingTestAndPackage = ({ route }) => {
    // const { id, packageName } = route.params;
    const { id, packageData } = route.params;
    const { packageName, packageUuid } = packageData;
    const dispatch = useDispatch();
    const { jwt } = useSelector(state => state.auth.user);
    const { testDetails, packageDetails} = useSelector(
        state => state.diagnostic,
    );

    const [location, setLocation] = useState('');
    const [pincode, setPincode] = useState('');
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(new Date());
    const [saveFlag, setSaveFalg] = useState(false);
    const [saveMessage, setSaveMessage] = useState(false);
    useEffect(() => {
        if (id && packageData === '') {
            dispatch(diagnosisTestDetailsThunk({ jwt, id }));

        } else if (packageData.packageName && id === '') {
            dispatch(diagnosisPackageDetailsThunk({ jwt, packageName }));

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
    const bookTest = () => {
        var data = {
          address: location,
          cityId: 1,
          labId: 1,
          pinCode: pincode,
          timeSlot: getEpoch(date, time),
        };
        if (id && packageData === '') {
          data = {
            ...data,
            attributeId: testDetails.id,
            attributeType: 'INDIVIDUAL_TEST',
          };
          dispatch(bookTestThunk({jwt, data})).then((resp) => {
                    if (resp) {
                        setSaveFalg(true);
                        setSaveMessage(resp.payload.message);
                    }
                    else {
                        setSaveFalg(true);
                        setSaveMessage("Something went wrong");
                    }
                }
        
                );
        } else if (packageName && id === '') {
          data = {
            ...data,
            attributeId: packageUuid,
            attributeType: 'PACKAGE',
          };
          dispatch(bookTestThunk({jwt, data})).then((resp) => {
                    if (resp) {
                        setSaveFalg(true);
                        setSaveMessage(resp.payload.message);
                    }
                    else {
                        setSaveFalg(true);
                        setSaveMessage("Something went wrong");
                    }
                }
        
                );
        }
      };

    const closeSaveMessageBox = () => {
        setSaveFalg(false);

    };
    return (
        <View>
            <MainHeader />
            <DiagnosticHeader />
            <ScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                    paddingBottom: 200,
                }}>
                <View className="pl-[15px] pr-[15px]">
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
                    <View className="mt-[20px]">
                        <DateTimePicker
                            value={date}
                            onChangeDate={handleDate}
                            style={{
                                backgroundColor: '#FFFFFF',
                                borderWidth: 1,
                                borderRadius: 8,
                                height: 50,
                            }}
                            selectionColor="#1D2334"
                            theme={{ colors: { text: 'black' } }}
                        />
                        <DateTimePicker
                            type="time"
                            value={time}
                            onChangeDate={handleTime}
                            style={{
                                backgroundColor: '#FFFFFF',
                                borderWidth: 1,
                                borderRadius: 8,
                                height: 50,
                            }}
                            selectionColor="#1D2334"
                            theme={{ colors: { text: 'black' } }}
                        />
                        <TextInput
                            multiline={true}
                            style={{
                                backgroundColor: '#FFFFFF',
                                borderWidth: 1,
                                borderRadius: 8,
                            }}
                            className="h-[50px] rounded shadow-2xl pl-2 pb-0 pt-1"
                            placeholder="Location"
                            onChangeText={onChangeLocation}
                        />
                        <TextInput
                            multiline={true}
                            style={{
                                backgroundColor: '#FFFFFF',
                                borderWidth: 1,
                                borderRadius: 8,
                            }}
                            className="h-[50px] mt-[15px]  rounded shadow-2xl pl-2 pb-0 pt-1"
                            placeholder="Pincode"
                            onChangeText={onChangePincode}
                        />
                    </View>
                    <TouchableOpacity
                        onPress={bookTest}
                        style={{ backgroundColor: '#E68D36' }}
                        className="mt-[40px] rounded">
                        {/* <View className="flex h-50px bg-gray-100 justify-center"> */}
                        <Text className="text-center font-bold pt-[15px] pb-[15px] text-white">
                            Book Now
                        </Text>
                        {/* </View> */}
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <MessageBox
                // head="Message"
                showDialog={saveFlag}
                hideDialog={closeSaveMessageBox}
                message={saveMessage}

            />
        </View>
    );
};

export default BookingTestAndPackage;
