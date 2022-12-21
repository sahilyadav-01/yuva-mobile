import React, {useState, useRef, useEffect} from 'react'
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, TextInput,  FlatList } from 'react-native'
import Backbutton from '../../../components/Backbutton'
import { useNavigation } from '@react-navigation/core'
import * as Progress from 'react-native-progress';
import { Dimensions } from 'react-native';
import SectionInput from '../../../components/SectionInput'
import SectionPicker from '../../../components/SectionPicker';
import { useSelector, useDispatch } from 'react-redux';
import { section9QThunk } from '../../../store/reducers/Section9Slice';
import PickerData from '../../../utils/PickerData';
import ForwardButton from '../../../components/ForwardButton'
import {dispatch_option} from '../../../store/reducers/Section9Slice';
import {transforSubData} from '../../../utils/utils'
import {finalSubmission} from '../../../store/reducers/Section9Slice';

const Section9 = () => {

    /**
     * Hooks
     */
    const navigation = useNavigation()
    const dispatch = useDispatch()


    /**
     * State
     */
    const answers = useSelector(state => state.section9.answers)

    const answers1 = useSelector(state => state.section1.answers)
    const answers2 = useSelector(state => state.section2.answers)
    const answers3 = useSelector(state => state.section3.answers)
    const answers4 = useSelector(state => state.section4.answers)
    const answers5 = useSelector(state => state.section5.answers)
    const answers6 = useSelector(state => state.section6.answers)
    const answers7 = useSelector(state => state.section7.answers)
    const answers8 = useSelector(state => state.section8.answers)
    const answers9 = useSelector(state => state.section9.answers)
    const version = useSelector(state => state.auth.user.version)


    const questionData = useSelector(state => state.section9.rawQuestions)
 
    const {jwt}  = useSelector(state => state.auth.user)

    const result = useSelector(state=> state.result)

    //Metadata
    const windowWidth = Dimensions.get('window').width;
    const progressWidth = windowWidth
    const selectionData  = [{key:'0',value:'<7 hr'}, {key:'1',value:'7-9'},{key:'2',value:'>9hr'}];
    		
   /**
     * React Hooks
     */

    // Load Question Data
    useEffect(()=>{
        dispatch(section9QThunk({jwt}))
    }, [])

    /**
     * Navigation
     */
    const previous = () =>{
        navigation.navigate("section8")
    }

    const computeResult = () =>{
        let data = transforSubData(answers1,answers2,answers3,answers4,answers5,answers6,
            answers7,answers8,answers9, version)
            dispatch(finalSubmission({jwt, data})).then(() => {navigation.navigate("HRAHome")})
    }

    return (
        <SafeAreaView>
            <View className="flex-row justify-between items-center bg-[#1D2334] h-[60px] px-[10px] mt-[42px]">
                <View className="flex flex-row h-full items-center">
                <Backbutton color="white" size={24} onPress={previous}/>
                <Text className="text-center text-white text-xl ml-[20px]">Health Risk Assesment</Text>
                </View>
                {/* <ForwardButton color="white" size={24} onPress={next}/> */}
            </View>
            <View className="w-full">
                    <Progress.Bar progress={1} width={progressWidth} />
            </View>
            <View className="h-full mx-[30px] my-[20px] ">
                <Text className="text-xl">Section Nine - Sleep</Text>

                {/* <Text className="text-base mt-2">How Often you consume these foods?</Text> */}
                {/* Questionaire */}
            <View className="h-[650px]">
                <ScrollView
                    bounces={false}
                    contentContainerStyle={{
                        flexGrow: 1,
                        paddingBottom:300
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

                    <View className="flex-row w-full justify-center mt-[30px]">
                        <TouchableOpacity 
                            style={{backgroundColor:"#52608E"}} 
                            className="w-[300px] rounded"
                            onPress={computeResult}
                            >
                            {/* <View className="flex h-50px bg-gray-100 justify-center"> */}
                                <Text className="text-center pt-[15px] pb-[15px] text-white">Compute</Text>
                            {/* </View> */}
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Section9
