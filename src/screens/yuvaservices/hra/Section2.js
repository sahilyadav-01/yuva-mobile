import React, {useState, useRef, useEffect} from 'react'
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, TextInput,  FlatList } from 'react-native'
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
import {dispatch_option} from '../../../store/reducers/Section2Slice';

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
 
    const {jwt}  = useSelector(state => state.auth.user)

    //Metadata
    const windowWidth = Dimensions.get('window').width;
    const progressWidth = windowWidth
    const selectionData  = [{key:'0',value:'Yes'}, {key:'1',value:'No'}];
    		
   /**
     * React Hooks
     */

    // Load Question Data
    useEffect(()=>{
        dispatch(section2QThunk({jwt}))
    }, [])

    /**
     * Call back functions
     */
    const goBack = () =>  {
        navigation.goBack();
    }

    /**
     * Navigation
     */
    const previous = () =>{
        navigation.navigate("section1")
    }
    const next = () =>{
        navigation.navigate("section3")
    }



    return (
        <SafeAreaView>
            <View className="flex-row justify-between items-center bg-[#1D2334] h-[60px] px-[10px] mt-[20px]">
                <View className="flex flex-row h-full items-center">
                <Backbutton color="white" size={24} onPress={previous}/>
                <Text className="text-center text-white text-xl ml-[20px]">Health Risk Assesment</Text>
                </View>
                <ForwardButton color="white" size={24} onPress={next}/>
            </View>

            <View className="w-full">
                    <Progress.Bar progress={0.2} width={progressWidth} />
            </View>
            <View className="h-full mx-[30px] my-[20px] ">
                <Text className="text-xl">Section Two - Dietary</Text>

                {/* <Text className="text-base mt-2">How Often you consume these foods?</Text> */}
                {/* Questionaire */}
            <View  className="h-[60%]">
                <ScrollView
                    bounces={false}
                    contentContainerStyle={{
                        flexGrow: 1,
                        paddingBottom:60
                    }}
                    showsVerticalScrollIndicator={false}>
                                 {questionData.map((item)=>{
                                    if(item.questionType.includes("picker")){
                                        const data  = PickerData[item.questionType];
                                        return  <SectionPicker key={item.questionId} 
                                                        text={item.question} 
                                                        data={PickerData[item.questionType]}
                                                        defaultAnswer={answers[item.questionId]}
                                                        dispatcher={dispatch_option}
                                                        questionId={item.questionId}
                                                />
                                    }else if(item.questionType=="input"){
                                        return <SectionInput  
                                            key={item.questionId} 
                                            text={item.question}
                                            dispatcher={dispatch_option}
                                            questionId={item.questionId}
                                            />

                                    }
                                })}


                    <View className="flex-row justify-between mt-[30px]">
                        <TouchableOpacity 
                            style={{backgroundColor:"#52608E"}} 
                            className="w-[100px] rounded"
                            onPress={previous}
                            >
                            {/* <View className="flex h-50px bg-gray-100 justify-center"> */}
                                <Text className="text-center pt-[15px] pb-[15px] text-white">Previous</Text>
                            {/* </View> */}
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={{backgroundColor:"#52608E"}} 
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

export default Section2
