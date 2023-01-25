import React, { useState, useRef, useEffect } from 'react'
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, TextInput, FlatList, Alert } from 'react-native'
import Backbutton from '../../../components/Backbutton'
import { useNavigation } from '@react-navigation/core'
import * as Progress from 'react-native-progress';
import { Dimensions } from 'react-native';
import SectionInput from '../../../components/SectionInput'
import SectionPicker from '../../../components/SectionPicker';
import { useSelector, useDispatch } from 'react-redux';
import { section2QThunk } from '../../../store/reducers/Section2Slice';
import PickerData from '../../../utils/PickerData';
import ForwardButton from '../../../components/ForwardButton'
import { dispatch_option } from '../../../store/reducers/Section2Slice';
import Header from '../../../components/Header';

const Section2 = () => {

    /**
     * Hooks
     */
    const navigation = useNavigation()
    const dispatch = useDispatch()


    /**
     * State
     */
    const answers = useSelector(state => state.section2.answers)

    const questionData = useSelector(state => state.section2.rawQuestions)

    const {user: {jwt},loggedIn,} = useSelector(state => state.auth);

    //Metadata
    const windowWidth = Dimensions.get('window').width;
    const progressWidth = windowWidth
    const selectionData = [{ key: '0', value: 'Yes' }, { key: '1', value: 'No' }];

    /**
      * React Hooks
      */

    // Load Question Data
    useEffect(() => {
        dispatch(section2QThunk())
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
        navigation.navigate("section1")
    }
    const next = () => {
        if (Object.keys(answers).map((x) => { return answers[x] }).includes('')) {
            Alert.alert("Alert", 'Please Answer All the Questions')
        }
        else {
            navigation.navigate("section3")
        }
    }
    const onPressRightIcon = () => {
        if (loggedIn !== 'loggedIn') {
          navigation.navigate('LoginScreen');
        } else {
          // <Text>ggggggggg</Text>
        }
      };


    return (
        <SafeAreaView>
               <Header
        isLoggedIn={loggedIn === 'loggedIn'}
        onPressRightIcon={onPressRightIcon}
      />

            {/* <View className="flex-row justify-between items-center bg-[#1D2334] h-[60px] px-[10px] mt-[42px]">
                <View className="flex flex-row h-full items-center">
                    <Backbutton color="white" size={24} onPress={previous} />
                    <Text className="text-center text-white text-xl ml-[20px]">Health Risk Assesment</Text>
                </View>
            </View> */}
            <View className="w-full">
            <Progress.Bar color="#319B4B" unfilledColor="#F6ECB6"  progress={0.2} width={progressWidth } height={12}/>
            </View>
            <View className="h-full mx-[30px] my-[20px] ">
            <Text style={{fontWeight: '500'}} className="text-xl text-[#1D2334]">Section Two - Dietary</Text>
                <Text style={{fontWeight: '500'}} className="text-base mt-2 text-[#1D2334]">How often do you consume the following?</Text>
                {/* Questionaire */}
                <View className="h-[60%]">
                    <ScrollView
                        bounces={false}
                        contentContainerStyle={{
                            flexGrow: 1,
                            paddingBottom: 300
                        }}
                        showsVerticalScrollIndicator={false}>
                        {questionData.map((item) => {
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
                        })}


                        <View className="mt-[30px]">
                            <TouchableOpacity
                                style={{ 
                                    borderRadius: 8,
                                    backgroundColor: "#E68D36" }}
                                    onPress={next}
                            >
                                <Text className="text-center pt-[15px] pb-[15px] text-white">Next</Text>
                            </TouchableOpacity>
                        </View>

                    </ScrollView>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Section2
