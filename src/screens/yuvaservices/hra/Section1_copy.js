import React, {useState, useRef, useEffect} from 'react'
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import Backbutton from '../../../components/Backbutton'
import { useNavigation } from '@react-navigation/core'
import * as Progress from 'react-native-progress';
import { Dimensions } from 'react-native';
import SectionInput from '../../../components/SectionInput'
import SectionPicker from '../../../components/SectionPicker';
import { useSelector, useDispatch } from 'react-redux';
import { section1QThunk } from '../../../store/reducers/Section1Slice_back';
import PickerData from '../../../utils/PickerData';
import ForwardButton from '../../../components/ForwardButton'


const Section1 = () => {
  
    /**
     * Hooks
     */
    const navigation = useNavigation()
    const dispatch = useDispatch()


    /**
     * State
     */
    const {
        Q2, //  Age
        Q3, // Height
        Q4, // Weight
        Q5,  // waist circum ference
        Q8 // Gender
    } = useSelector(state => state.section1.answers)
 
    const {jwt}  = useSelector(state => state.auth.user)

    //Metadata
    const windowWidth = Dimensions.get('window').width;
    const progressWidth = windowWidth
    const genderData  = [{key:'1',value:'Male'}, {key:'2',value:'Female'}];



    /**
     * React Hooks
     */

    // Load Question Data
    useEffect(()=>{
        dispatch(section1QThunk({jwt}))
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
    const next = () =>{
        navigation.navigate("section2")
    }
    const previous = () =>{
        navigation.navigate("HomeScreen")
    }


    return (
        <SafeAreaView>
            <View className="flex-row justify-between bg-gray-300 h-[50px]">
                <Backbutton onPress={goBack}/>
                <ForwardButton onPress={next}/>
            </View>
            <View className="bg-gray-300 h-[75px]">
                <Text className="text-2xl text-center">Health Risk Assesment</Text>
            </View>
            <View className="w-full">
                    <Progress.Bar progress={0.1} width={progressWidth} />
            </View>
            <View className="h-full mx-[30px] mt-[20px] ">
                <Text className="text-xl">Section One General</Text>

                {/* Questionaire */}
            <View style={{ height: "60%" }}>
                <ScrollView
                    bounces={false}
                    contentContainerStyle={{
                        flexGrow: 1,
                        paddingBottom:60
                    }}
                    showsVerticalScrollIndicator={false}>

                        <SectionInput  defValue={Q2} text="Enter your age"/>
                        <SectionPicker text={Q8 == '' ? 'Gender':Q8} data={genderData}/>
                        <SectionInput  defValue={Q3} text="Enter your height in (cm)"/>
                        <SectionInput  defValue={Q4} text="Weight(Kg)"/>
                        <SectionInput  defValue={Q5} text="Waist Circumference (inches)"/>

                    <View className="flex-row justify-end mt-[30px]">
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

export default Section1
