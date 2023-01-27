import React from 'react'
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import * as Progress from 'react-native-progress';
import SectionInput from '../../../components/SectionInput'
import SectionPicker from '../../../components/SectionPicker';
import PickerData from '../../../utils/PickerData';
import Header from '../../../components/Header';
import { useSection9 } from './hooks/useSection9';
import { styles } from './styles';
import { LOGGEDIN, QUESTION_TYPE_INPUT, QUESTION_TYPE_PICKER, SECTION_9_HEADING, SUBMIT_BUTTON_TEXT } from '../constant';

const Section9 = () => {

    const { loggedIn, onPressRightIcon, progressWidth, dispatch_option, questionData, answers, computeResult } = useSection9();

    return (
        <SafeAreaView>
            <Header
                isLoggedIn={loggedIn === LOGGEDIN}
                onPressRightIcon={onPressRightIcon}
            />
            <View style={styles.progressBarContainer}>
                <Progress.Bar color="#319B4B" unfilledColor="#F6ECB6" progress={1} width={progressWidth} height={12} />
            </View>
            <View style={styles.topContainer}>
                <Text style={styles.topContainerTextStyle}>{SECTION_9_HEADING}</Text>
                <View style={styles.scrollViewContainer}>
                    <ScrollView
                        bounces={false}
                        contentContainerStyle={styles.scrollViewContentContainerStyle}
                        showsVerticalScrollIndicator={false}>
                        {questionData.map((item) => {
                            if (item.questionType.includes(QUESTION_TYPE_PICKER)) {
                                const data = PickerData[item.questionType];
                                return <SectionPicker key={item.questionId}
                                    text={item.question}
                                    data={PickerData[item.questionType]}
                                    defaultAnswer={answers[item.questionId]}
                                    dispatcher={dispatch_option}
                                    questionId={item.questionId}
                                />
                            } else if (item.questionType == QUESTION_TYPE_INPUT) {
                                return <SectionInput
                                    key={item.questionId}
                                    defValue={answers[item.questionId]}
                                    text={item.question}
                                    dispatcher={dispatch_option}
                                    questionId={item.questionId}
                                />
                            }
                        })}
                        <View style={styles.touchableOpacityViewContainer}>
                            <TouchableOpacity style={styles.touchableOpacityStyle} onPress={computeResult}>
                                <Text style={styles.touchableOpacityTextStyle}>{SUBMIT_BUTTON_TEXT}</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Section9
