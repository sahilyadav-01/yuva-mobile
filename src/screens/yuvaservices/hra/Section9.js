import React, { useEffect } from 'react'
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import * as Progress from 'react-native-progress';
import { Dimensions } from 'react-native';
import SectionInput from '../../../components/SectionInput'
import SectionPicker from '../../../components/SectionPicker';
import { useSelector, useDispatch } from 'react-redux';
import { section9QThunk } from '../../../store/reducers/Section9Slice';
import PickerData from '../../../utils/PickerData';
import { dispatch_option } from '../../../store/reducers/Section9Slice';
import { transforSubData } from '../../../utils/utils'
import { finalSubmission } from '../../../store/reducers/Section9Slice';
import Header from '../../../components/Header';

const Section9 = () => {

    const navigation = useNavigation()
    const dispatch = useDispatch()
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
    const extra_questions_Q9A = useSelector(state => state.section7.extra_questions_Q9A);
    const extra_questions_Q10A = useSelector(state => state.section7.extra_questions_Q10A);
    const questionData = useSelector(state => state.section9.rawQuestions)
    const {user: {jwt},loggedIn,} = useSelector(state => state.auth);
    const windowWidth = Dimensions.get('window').width;
    const progressWidth = windowWidth

    useEffect(() => {
        dispatch(section9QThunk({ jwt }))
    }, [])

    const computeResult = () => {
        if (Object.keys(answers).map((x) => { return answers[x] }).includes('')) {
            Alert.alert("Alert", 'Please Complete the form to proceed next section')
        }
        else {
            let data = transforSubData(answers1, answers2, answers3, answers4, answers5, answers6,
                answers7, answers8, answers9, version)
            let final_data = {
                answers: data,
                cancer: extra_questions_Q9A,
                illness: extra_questions_Q10A
            }
            dispatch(finalSubmission({ jwt, final_data })).then(() => { navigation.navigate("section10") })
        }
    }
    const onPressRightIcon = () => {
        if (loggedIn !== 'loggedIn') {
          navigation.navigate('LoginScreen');
        } else {
            //The logic for opening the drawer should be added here
        }
      };

    return (
        <SafeAreaView>
                 <Header
        isLoggedIn={loggedIn === 'loggedIn'}
        onPressRightIcon={onPressRightIcon}
      />
            <View className="w-full">
             <Progress.Bar color="#319B4B" unfilledColor="#F6ECB6"  progress={1} width={progressWidth } height={12}/>
            </View>
            <View className="h-full mx-[30px] my-[20px] ">
                <Text style={{fontWeight: '500'}} className="text-xl text-[#1D2334]">Section Nine - Sleep</Text>
                <View className="h-[650px]">
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

                        <View className=" mt-[30px]">
                            <TouchableOpacity
                                style={{
                                    borderRadius: 8,
                                     backgroundColor: "#E68D36" }}
                                onPress={computeResult}
                            >
                                <Text className="text-center pt-[15px] pb-[15px] text-white">Generate My Report</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Section9
