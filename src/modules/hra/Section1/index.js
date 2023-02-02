import React from 'react'
import { View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import * as Progress from 'react-native-progress';
import PickerData from '../../../utils/PickerData';
import SelectList from 'react-native-dropdown-select-list';
import Header from '../../../components/Header';
import { BUTTON_TEXT, FIRST_QUESTION, FOURTH_QUESTION, KEYBOARD_TYPE_VALUE, LOGGEDIN, SECOND_QUESTION, SECTION_1_HEADING, SECTION_1_PLACEHOLDER_Q1, SECTION_1_PLACEHOLDER_Q2, SECTION_1_PLACEHOLDER_Q3, SECTION_1_PLACEHOLDER_Q4, THIRD_QUESTION } from "../constant";
import { useSection1 } from './hooks/useSection1';
import { styles } from './styles';
import { GREEN, PALE_GOLDENROD } from '../../../styles/colors';

const Section1 = () => {

    const { loggedIn, onPressRightIcon, progressWidth, requiredFieldQ1, questionData, inputCheck, requiredFieldQ2, requiredFieldQ3, requiredFieldQ4, answers, setQuestion5, next } = useSection1();

    return (
        <>
            <Header
                isLoggedIn={loggedIn === LOGGEDIN}
                onPressRightIcon={onPressRightIcon}
            />
            <View style={styles.progressBarContainer}>
                <Progress.Bar color={GREEN} unfilledColor={PALE_GOLDENROD} progress={0.1} width={progressWidth} height={12} />
            </View>
            <View style={styles.topContainer}>
                <Text style={styles.topContainerTextStyle} >{SECTION_1_HEADING}</Text>

                <View style={styles.scrollViewContainer}>
                    <ScrollView
                        bounces={false}
                        contentContainerStyle={styles.scrollViewContentContainerStyle}
                        showsVerticalScrollIndicator={false}>
                        <View style={styles.questionViewContainer}>
                            <Text style={requiredFieldQ1 ? styles.text : styles.textError}>
                                {questionData[0]?.question}
                            </Text>
                            <TextInput style={styles.questionViewContainerTextInput}
                                keyboardType={KEYBOARD_TYPE_VALUE}
                                placeholder={SECTION_1_PLACEHOLDER_Q1}
                                onEndEditing={(e) => inputCheck(FIRST_QUESTION, e.nativeEvent.text)}
                            />
                        </View>
                        <View style={styles.questionViewContainer}>
                            <Text style={requiredFieldQ2 ? styles.text : styles.textError}>
                                {questionData[1]?.question}
                            </Text>
                            <TextInput style={styles.questionViewContainerTextInput}
                                keyboardType={KEYBOARD_TYPE_VALUE}
                                placeholder={SECTION_1_PLACEHOLDER_Q2}
                                onEndEditing={(e) => inputCheck(SECOND_QUESTION, e.nativeEvent.text)}
                            />
                        </View>
                        <View style={styles.questionViewContainer}>
                            <Text style={requiredFieldQ3 ? styles.text : styles.textError}>
                                {questionData[2]?.question}
                            </Text>
                            <TextInput style={styles.questionViewContainerTextInput}
                                keyboardType={KEYBOARD_TYPE_VALUE}
                                placeholder={SECTION_1_PLACEHOLDER_Q3}
                                onEndEditing={(e) => inputCheck(THIRD_QUESTION, e.nativeEvent.text)}
                            />
                        </View>
                        <View style={styles.questionViewContainer}>
                            <Text style={requiredFieldQ4 ? styles.text : styles.textError}>
                                {questionData[3]?.question}
                            </Text>
                            <TextInput style={styles.questionViewContainerTextInput}
                                keyboardType={KEYBOARD_TYPE_VALUE}
                                placeholder={SECTION_1_PLACEHOLDER_Q4}
                                onEndEditing={(e) => inputCheck(FOURTH_QUESTION, e.nativeEvent.text)}
                            />
                        </View>
                        <View style={styles.questionViewContainer}>
                            <Text style={styles.questionViewContainerText}>
                                {questionData[4]?.question}
                            </Text>
                            <SelectList

                                boxStyles={styles.boxStylesContainer}
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
                        <View style={styles.touchableOpacityViewContainer}>
                            <TouchableOpacity style={styles.touchableOpacityStyle}
                                onPress={next}
                            >
                                <Text style={styles.touchableOpacityTextStyle}>{BUTTON_TEXT}</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </>
    )
}

export default Section1
