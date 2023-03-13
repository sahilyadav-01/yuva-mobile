import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import * as Progress from 'react-native-progress';
import PickerData from '../../../utils/PickerData';
import SelectList from 'react-native-dropdown-select-list';
import Header from '../../../components/Header';
import { useSection5 } from './hooks/useSection5';
import { BUTTON_TEXT, KEYBOARD_TYPE_VALUE, SECOND_QUESTION, SECTION_5_HEADING, PLACEHOLDER_COLOR, THIRD_QUESTION, HEALTH_RISK_ASSESSMENT } from '../constant';
import { styles } from './styles';
import { GREEN, PALE_GOLDENROD } from '../../../styles/colors';
import { styles as hraStyles } from '../HRAHome/styles';
import Loader from '../../../components/Loader';

const Section5 = () => {

  const { inputCheck, setQuestion4, setQuestion1, requiredFieldQ2, requiredFieldQ3, smoke, progressWidth, questionData, answers, next, renderData, q2Placeholder, q3Placeholder, onBlur } = useSection5();

  if(!renderData) return <Loader extraStyles={hraStyles.loaderContainer}/>;
  return (
    <>
      <Header title={HEALTH_RISK_ASSESSMENT} showBackButton={true}/>
      <View style={styles.progressBarContainer}>
        <Progress.Bar color={GREEN} unfilledColor={PALE_GOLDENROD} progress={0.5} width={progressWidth} height={12} />
      </View>
      <View style={styles.topContainer}>
        <Text style={styles.topContainerTextStyle}>{SECTION_5_HEADING}</Text>
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
                placeholder={answers[questionData[0]?.questionId] === undefined ? '' : PickerData[questionData[0]?.questionType][answers[questionData[0]?.questionId]]?.value ?? ''}
                setSelected={setQuestion1}
                data={PickerData[questionData[0]?.questionType]}
                search={false}
              />
            </View>
            {smoke && (
              <View>
                <View style={styles.questionViewContainer}>
                  <Text style={requiredFieldQ2 ? styles.textError : styles.text}>{questionData[1]?.question}</Text>
                  <TextInput style={styles.questionViewContainerTextInput}
                    keyboardType={KEYBOARD_TYPE_VALUE}
                    placeholderTextColor={PLACEHOLDER_COLOR}
                    placeholder={answers[questionData[1]?.questionId] ?? q2Placeholder ?? ''}
                    onEndEditing={(e) => inputCheck(SECOND_QUESTION, e.nativeEvent.text)}
                    onBlur={()=>onBlur('Q2')}
                  />
                </View>
                <View style={styles.questionViewContainer}>
                  <Text style={requiredFieldQ3 ? styles.textError : styles.text}>{questionData[2]?.question}</Text>
                  <TextInput style={styles.questionViewContainerTextInput}
                    keyboardType={KEYBOARD_TYPE_VALUE}
                    placeholderTextColor={PLACEHOLDER_COLOR}
                    placeholder={answers[questionData[2]?.questionId] ?? q3Placeholder ?? ''}
                    onEndEditing={(e) => inputCheck(THIRD_QUESTION, e.nativeEvent.text)}
                    onBlur={()=>onBlur('Q3')}
                  />
                </View>
              </View>
            )}
            <View style={styles.questionViewContainer}>
              <Text style={styles.questionViewContainerText}>
                {questionData[3]?.question}
              </Text>
              <SelectList
                boxStyles={styles.boxStylesContainer}
                placeholder={answers[questionData[3]?.questionId] === undefined ? '' : PickerData[questionData[3]?.questionType][answers[questionData[3]?.questionId]]?.value ?? ''}
                setSelected={setQuestion4}
                data={PickerData[questionData[3]?.questionType]}
                search={false}
              />
            </View>
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

export default Section5;
