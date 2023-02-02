import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import * as Progress from 'react-native-progress';
import PickerData from '../../../utils/PickerData';
import SelectList from 'react-native-dropdown-select-list';
import Header from '../../../components/Header';
import { useSection7 } from './hooks/useSection7';
import { styles } from './styles';
import { BUTTON_TEXT, EIGHTH_QUESTION, FOURTH_QUESTION, KEYBOARD_TYPE_VALUE, KEYBOARD_TYPE_VALUE_TEXT, LOGGEDIN, PLACEHOLDER_COLOR, SECTION_7_HEADING, SECTION_7_QUESTION, SEVENTH_QUESTION } from '../constant';
import { GREEN, PALE_GOLDENROD } from '../../../styles/colors';

const Section7 = () => {

  const { loggedIn, onPressRightIcon, requiredFieldQ4, setQuestion1, setQuestion2, setQuestion3, setQuestion5, setQuestion6, requiredFieldQ7, requiredFieldQ8, setQuestion9, setQuestion10, setQuestion9A, setQuestion10A, medicalConditionDoYouSufferFromAnyIllness, medicalConditionDiabetes, medicalCondition, medicalConditionHypertension, medicalCondition1, medicalConditionAnyCancer, medicalConditionChronicIllness, inputCheck, progressWidth, questionData, answers, next } = useSection7();

  return (
    <>
      <Header
        isLoggedIn={loggedIn === LOGGEDIN}
        onPressRightIcon={onPressRightIcon}
      />
      <View style={styles.progressBarContainer}>
        <Progress.Bar color={GREEN} unfilledColor={PALE_GOLDENROD} progress={0.7} width={progressWidth} height={12} />
      </View>
      <View style={styles.topContainer}>
        <Text style={styles.topContainerTextStyle}>{SECTION_7_HEADING}</Text>
        <View style={styles.scrollViewContainer}>
          <ScrollView
            bounces={false}
            contentContainerStyle={styles.scrollViewContentContainerStyle}
            showsVerticalScrollIndicator={false}>
            <View style={styles.questionViewContainer}>
              <Text style={styles.questionViewContainerText}>
                {questionData[0]?.question}
              </Text>
              <SelectList
                boxStyles={styles.boxStylesContainer}
                placeholder={
                  answers[questionData[0]?.questionId] === undefined
                    ? answers[questionData[0]?.questionId] === ''
                    : ''
                }
                setSelected={setQuestion1}
                data={PickerData[questionData[0]?.questionType]}
                search={false}
              />
            </View>
            {medicalConditionDoYouSufferFromAnyIllness && (
              <View style={styles.questionViewContainer}>
                <Text style={styles.questionViewContainerText}>
                  {questionData[1]?.question}
                </Text>
                <SelectList
                  boxStyles={styles.boxStylesContainer}
                  placeholder={
                    answers[questionData[1]?.questionId] === undefined
                      ? answers[questionData[1]?.questionId] === ''
                      : ''
                  }
                  setSelected={setQuestion2}
                  data={PickerData[questionData[1]?.questionType]}
                  search={false}
                />
              </View>
            )}
            {medicalConditionDiabetes && (
              <View style={styles.questionViewContainer}>
                <Text style={styles.questionViewContainerText}>
                  {questionData[2]?.question}
                </Text>
                <SelectList
                  boxStyles={styles.boxStylesContainer}
                  placeholder={
                    answers[questionData[2]?.questionId] === undefined
                      ? answers[questionData[2]?.questionId] === ''
                      : ''
                  }
                  setSelected={setQuestion3}
                  data={PickerData[questionData[2]?.questionType]}
                  search={false}
                />
              </View>
            )}
            {medicalCondition && (
              <View style={styles.questionViewContainer}>
                <Text style={requiredFieldQ4 ? styles.textError : styles.text}>{questionData[3]?.question}</Text>
                <TextInput style={styles.questionViewContainerTextInput}
                  keyboardType={KEYBOARD_TYPE_VALUE}
                  placeholderTextColor={PLACEHOLDER_COLOR}
                  placeholder=""
                  onEndEditing={(e) => inputCheck(FOURTH_QUESTION, e.nativeEvent.text)}
                />
              </View>
            )}
            {medicalConditionDoYouSufferFromAnyIllness && (
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
            )}
            {medicalConditionHypertension && (
              <View style={styles.questionViewContainer}>
                <Text style={styles.questionViewContainerText}>
                  {questionData[5]?.question}
                </Text>
                <SelectList
                  boxStyles={styles.boxStylesContainer}
                  placeholder={
                    answers[questionData[5]?.questionId] === undefined
                      ? answers[questionData[5]?.questionId] === ''
                      : ''
                  }
                  setSelected={setQuestion6}
                  data={PickerData[questionData[5]?.questionType]}
                  search={false}
                />
              </View>
            )}
            {medicalCondition1 && (
              <View>
                <View style={styles.questionViewContainer}>
                  <Text style={requiredFieldQ7 ? styles.textError : styles.text} >{questionData[6]?.question}</Text>
                  <TextInput style={styles.questionViewContainerTextInput}
                    keyboardType={KEYBOARD_TYPE_VALUE}
                    placeholderTextColor={PLACEHOLDER_COLOR}
                    placeholder=""
                    onEndEditing={(e) => inputCheck(SEVENTH_QUESTION, e.nativeEvent.text)}
                  />
                </View>
                <View style={styles.questionViewContainer}>
                  <Text style={requiredFieldQ8 ? styles.textError : styles.text}>{questionData[7]?.question}</Text>
                  <TextInput style={styles.questionViewContainerTextInput}
                    keyboardType={KEYBOARD_TYPE_VALUE}
                    placeholderTextColor={PLACEHOLDER_COLOR}
                    placeholder=""
                    onEndEditing={(e) => inputCheck(EIGHTH_QUESTION, e.nativeEvent.text)}

                  />
                </View>
              </View>
            )}
            {medicalConditionDoYouSufferFromAnyIllness && (
              <View style={styles.questionViewContainer}>
                <Text style={styles.questionViewContainerText}>
                  {questionData[8]?.question}
                </Text>
                <SelectList
                  boxStyles={styles.boxStylesContainer}
                  placeholder={
                    answers[questionData[8]?.questionId] === undefined
                      ? answers[questionData[8]?.questionId] === ''
                      : ''
                  }
                  setSelected={setQuestion9}
                  data={PickerData[questionData[8]?.questionType]}
                  search={false}
                />
              </View>
            )}
            {medicalConditionAnyCancer && (
              <View style={styles.questionViewContainer}>
                <Text style={styles.questionViewContainerText}>{SECTION_7_QUESTION}</Text>
                <TextInput style={styles.questionViewContainerTextInput}
                  keyboardType={KEYBOARD_TYPE_VALUE_TEXT}
                  placeholderTextColor={PLACEHOLDER_COLOR}
                  placeholder=""
                  onChangeText={setQuestion9A}
                />
              </View>
            )}
            <View style={styles.questionViewContainer}>
              <Text style={styles.questionViewContainerText}>
                {questionData[9]?.question}
              </Text>
              <SelectList
                boxStyles={styles.boxStylesContainer}
                placeholder={
                  answers[questionData[9]?.questionId] === undefined
                    ? answers[questionData[9]?.questionId] === ''
                    : ''
                }
                setSelected={setQuestion10}
                data={PickerData[questionData[9]?.questionType]}
                search={false}
              />
            </View>
            {medicalConditionChronicIllness && (
              <View style={styles.questionViewContainer}>
                <Text style={styles.questionViewContainerText}>{SECTION_7_QUESTION}</Text>
                <TextInput style={styles.questionViewContainerTextInput}
                  keyboardType={KEYBOARD_TYPE_VALUE_TEXT}
                  placeholderTextColor={PLACEHOLDER_COLOR}
                  placeholder=""
                  onChangeText={setQuestion10A}
                />
              </View>
            )}
            <View style={styles.touchableOpacityViewContainer}>
              <TouchableOpacity style={styles.touchableOpacityStyle} onPress={next}>
                <Text style={styles.touchableOpacityTextStyle}>{BUTTON_TEXT}</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    </>
  );
};

export default Section7;