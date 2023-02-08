import React from 'react'
import { View, Text, ScrollView, TouchableOpacity, FlatList } from 'react-native'
import * as Progress from 'react-native-progress';
import SectionInput from '../../../components/SectionInput'
import SectionPicker from '../../../components/SectionPicker';
import PickerData from '../../../utils/PickerData';
import Header from '../../../components/Header';
import { BUTTON_TEXT, LOGGEDIN, QUESTION_TYPE_INPUT, QUESTION_TYPE_PICKER, SECTION_2_HEADING, SECTION_2_SUB_HEADING } from "../constant";
import { useSection2 } from './hooks/useSection2';
import { styles } from './styles';
import { GREEN, PALE_GOLDENROD } from '../../../styles/colors';

const Section2 = () => {

    const { loggedIn, onPressRightIcon, progressWidth, dispatch_option, questionData, answers, next } = useSection2();

    return (
        <>
            <Header isRightIcon={true} />
            <View style={styles.progressBarContainer}>
                <Progress.Bar color={GREEN} unfilledColor={PALE_GOLDENROD} progress={0.2} width={progressWidth} height={12} />
            </View>
            <View style={styles.topContainer}>
                <Text style={styles.topContainerTextStyle1}>{SECTION_2_HEADING}</Text>
                <Text style={styles.topContainerTextStyle2}>{SECTION_2_SUB_HEADING}</Text>

                <View style={styles.scrollViewContainer}>
                    <ScrollView
                        bounces={false}
                        contentContainerStyle={styles.scrollViewContentContainerStyle}
                        showsVerticalScrollIndicator={false}>
                        <FlatList
                            data={questionData}
                            keyExtractor={item => item.questionId}
                            renderItem={({ item }) => {
                                switch (true) {
                                    case item.questionType.includes(QUESTION_TYPE_PICKER):
                                        return (
                                            <SectionPicker
                                                key={item.questionId}
                                                text={item.question}
                                                data={PickerData[item.questionType]}
                                                defaultAnswer={answers[item.questionId]}
                                                dispatcher={dispatch_option}
                                                questionId={item.questionId}
                                            />
                                        );
                                    case item.questionType.includes(QUESTION_TYPE_INPUT):
                                        return (
                                            <SectionInput
                                                key={item.questionId}
                                                defValue={answers[item.questionId]}
                                                text={item.question}
                                                dispatcher={dispatch_option}
                                                questionId={item.questionId}
                                            />
                                        );
                                    default:
                                        return null;
                                }
                            }}
                        />
                        <View style={styles.touchableOpacityViewContainer}>
                            <TouchableOpacity style={styles.touchableOpacityStyle} onPress={next}>
                                <Text style={styles.touchableOpacityTextStyle}>{BUTTON_TEXT}</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </>
    )
}

export default Section2
