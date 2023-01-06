import React, { useState, useRef, useEffect } from 'react'
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, TextInput, FlatList, Alert } from 'react-native'
import Backbutton from '../../../components/Backbutton'
import { useNavigation } from '@react-navigation/core'
import * as Progress from 'react-native-progress';
import { Dimensions } from 'react-native';
import SectionInput from '../../../components/SectionInput'
import SectionPicker from '../../../components/SectionPicker';
import { useSelector, useDispatch } from 'react-redux';
import { section1QThunk } from '../../../store/reducers/Section1Slice';
import PickerData from '../../../utils/PickerData';
import ForwardButton from '../../../components/ForwardButton'
import { dispatch_option } from '../../../store/reducers/Section1Slice';
import SelectList from 'react-native-dropdown-select-list';

const Section1 = () => {

    /**
     * Hooks
     */
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const [requiredFieldQ1, setRequiredFieldQ1] = useState(false);
    const [requiredFieldQ2, setRequiredFieldQ2] = useState(false);
    const [requiredFieldQ3, setRequiredFieldQ3] = useState(false);
    const [requiredFieldQ4, setRequiredFieldQ4] = useState(false);



    /**
     * State
     */
    const answers = useSelector(state => state.section1.answers)

    const questionData = useSelector(state => state.section1.rawQuestions)

    const { jwt } = useSelector(state => state.auth.user);

    const inputCheck = (id, value) => {
        const regAge = /^\d+$/;
        switch (id) {
            case 'Q1':
                const validQ1 = (regAge.test(value) === true) && ((value >= 12) && (value <= 100));
                setRequiredFieldQ1(!validQ1);
                if (validQ1) {
                    dispatch(dispatch_option({ key: questionData[0].questionId, value: value }));
                } else {
                    Alert.alert("Alert", "Age should be in range of 12 to 100 years");
                };
                break;

            case 'Q2':
                const validQ2 = ((value >= 120) && (value <= 219));
                setRequiredFieldQ2(!validQ2);
                if (validQ2) {
                    dispatch(dispatch_option({ key: questionData[1].questionId, value: value }));
                } else {
                    Alert.alert("Alert", "Height should be range of 120 to 219 cm");
                };
                break;

            case 'Q3':
                const validQ3 = ((value >= 20) && (value <= 200));
                setRequiredFieldQ3(!validQ3);
                if (validQ3) {
                    dispatch(dispatch_option({ key: questionData[2].questionId, value: value }));
                } else {
                    Alert.alert("Alert", "Weight should be range of 20 to 200 kg");
                };
                break;

            case 'Q4':
                const validQ4 = ((value >= 20) && (value <= 47));
                setRequiredFieldQ4(!validQ4);
                if (validQ4) {
                    dispatch(dispatch_option({ key: questionData[3].questionId, value: value }));
                } else {
                    Alert.alert("Alert", "Waist size should be range of 20 to 47 inches");
                };
                break;

                default:
                    Alert.alert("Alert", "Worng Input");
        }

    };


    const setQuestion5 = value => {


        dispatch(dispatch_option({ key: questionData[4].questionId, value: value }));
    };
    //Metadata
    const windowWidth = Dimensions.get('window').width;
    const progressWidth = windowWidth
    const selectionData = [{ key: '0', value: 'Yes' }, { key: '1', value: 'No' }];

    /**
      * React Hooks
      */

    // Load Question Data
    useEffect(() => {
        dispatch(section1QThunk({ jwt }))
    }, [])

    /**
     * Call back functions
     */
    const goBack = () => {
        navigation.goBack();
    }

    /**
     * Navigation
     */
    const previous = () => {
        navigation.navigate("HRAHome")
    }
    const next = () => {

        if (Object.keys(answers).map((x) => { return answers[x] }).includes('')) {
            Alert.alert("Alert", 'Please Answer All the Questions')
        }
        else {
            navigation.navigate("section2")
        }
    }

    return (
        <SafeAreaView>

            <View className="flex-row justify-between items-center bg-[#1D2334] h-[60px] px-[10px] mt-[42px]">
                <View className="flex flex-row h-full items-center">
                    <Backbutton color="white" size={24} onPress={previous} />
                    <Text className="text-center text-white text-xl ml-[20px]">Health Risk Assesment</Text>
                </View>
                <ForwardButton color="white" size={24} onPress={next} />
            </View>
            {/* <View className="bg-gray-300 h-[75px]">
                <Text className="text-2xl text-center">Health Risk Assesment</Text>
            </View> */}

            <View className="w-full">
                <Progress.Bar progress={0.1} width={progressWidth} />
            </View>
            <View className="h-full mx-[30px] my-[20px] ">
                <Text className="text-xl">Section One - General</Text>

                {/* <Text className="text-base mt-2">How Often you consume these foods?</Text> */}
                {/* Questionaire */}
                <View className="h-[650px]">
                    <ScrollView
                        bounces={false}
                        contentContainerStyle={{
                            flexGrow: 1,
                            paddingBottom: 300
                        }}
                        showsVerticalScrollIndicator={false}>
                        {/* {questionData.map((item) => {
                            if (item.questionType.includes("picker")) {
                                const data = PickerData[item.questionType];
                                return <SectionPicker key={item.questionId}
                                    text={item.question}
                                    data={PickerData[item.questionType]}
                                    defaultAnswer={answers[item.questionId]}
                                    dispatcher={dispatch_option}
                                    questionId={item.questionId}
                                />
                            } else if (item.questionType == "input") {
                                return <SectionInput
                                    key={item.questionId}
                                    defValue={answers[item.questionId]}
                                    text={item.question}
                                    dispatcher={dispatch_option}
                                    questionId={item.questionId}                        
                                />

                            }
                        })} */}
                        <View className="mt-[20px]">
                            <Text
                                style={{
                                    color: requiredFieldQ1 ? 'red' : 'gray',
                                }}
                                className="text-base mb-[8px]">
                                {questionData[0]?.question}
                            </Text>
                            <TextInput
                                style={{ backgroundColor: '#ffffff', borderWidth: 1 }}
                                className="h-[40px] rounded-lg shadow-2xl pl-5 mt-[8px] text-sm"
                                keyboardType="numeric"
                                // placeholderTextColor={'black'}
                                placeholder="Age should be in range of 12 to 100 years"
                                onEndEditing={(e) => inputCheck('Q1', e.nativeEvent.text)}
                            />
                        </View>
                        <View className="mt-[20px]">
                            <Text
                                style={{
                                    color: requiredFieldQ2 ? 'red' : 'gray',
                                }}
                                className="text-base mb-[8px]">
                                {questionData[1]?.question}
                            </Text>
                            <TextInput
                                style={{ backgroundColor: '#ffffff', borderWidth: 1 }}
                                className="h-[40px] rounded-lg shadow-2xl pl-5 mt-[8px] text-sm"
                                keyboardType="numeric"
                                // placeholderTextColor={'black'}
                                placeholder="Height should be range of 120 to 219 cm"
                                onEndEditing={(e) => inputCheck('Q2', e.nativeEvent.text)}


                            />
                        </View>
                        <View className="mt-[20px]">
                            <Text
                                style={{
                                    color: requiredFieldQ3 ? 'red' : 'gray',
                                }}
                                className="text-base mb-[8px]">
                                {questionData[2]?.question}
                            </Text>
                            <TextInput
                                style={{ backgroundColor: '#ffffff', borderWidth: 1 }}
                                className="h-[40px] rounded-lg shadow-2xl pl-5 mt-[8px] text-sm"
                                keyboardType="numeric"
                                // placeholderTextColor={'black'}
                                placeholder="Weight should be range of 20 to 200 kg"
                                onEndEditing={(e) => inputCheck('Q3', e.nativeEvent.text)}


                            />
                        </View>
                        <View className="mt-[20px]">
                            <Text
                                style={{
                                    color: requiredFieldQ4 ? 'red' : 'gray',
                                }}
                                className="text-base mb-[8px]">
                                {questionData[3]?.question}
                            </Text>
                            <TextInput
                                style={{ backgroundColor: '#ffffff', borderWidth: 1 }}
                                className="h-[40px] rounded-lg shadow-2xl pl-5 mt-[8px] text-sm"
                                keyboardType="numeric"
                                // placeholderTextColor={'black'}
                                placeholder="Waist size should be range of 20 to 47 inches"
                                onEndEditing={(e) => inputCheck('Q4', e.nativeEvent.text)}


                            />
                        </View>
                        <View className="mt-[20px]">
                            <Text className="text-base mb-[8px]">
                                {questionData[4]?.question}
                            </Text>
                            <SelectList
                                boxStyles={{
                                    backgroundColor: 'white',
                                    borderRadius: 8,
                                    height: 50,
                                    borderWidth: 1,
                                    borderColor: '#1D2334',
                                }}
                                placeholder={
                                    answers[questionData[4]?.questionId] === undefined
                                        ? answers[questionData[4]?.questionId] === ''
                                        : ''
                                }
                                setSelected={setQuestion5}
                                data={PickerData[questionData[4]?.questionType]}
                                search={false}
                            />
                        </View>
                        <View className="flex-row justify-between mt-[30px]">
                            <TouchableOpacity
                                style={{ backgroundColor: "#52608E" }}
                                className="w-[100px] rounded"
                                onPress={previous}
                            >
                                {/* <View className="flex h-50px bg-gray-100 justify-center"> */}
                                <Text className="text-center pt-[15px] pb-[15px] text-white">Previous</Text>
                                {/* </View> */}
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{ backgroundColor: "#52608E" }}
                                className="w-[100px] rounded"
                                onPress={next}
                            >
                                {/* <View className="flex h-50px bg-gray-100 justify-center"> */}
                                <Text className="text-center pt-[15px] pb-[15px] text-white">Next</Text>
                                {/* </View> */}
                            </TouchableOpacity>
                        </View>

                    </ScrollView>
                </View>
            </View>

        </SafeAreaView>
    )
}

export default Section1
