import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import * as Progress from 'react-native-progress';
import PickerData from '../../../utils/PickerData';
import SelectList from 'react-native-dropdown-select-list';
import Header from '../../../components/Header';
import { useSection4 } from './hooks/useSection4';
import { styles } from './styles';
import { BUTTON_TEXT, LOGGEDIN, SECTION_4_HEADING } from '../constant';
import { GREEN, PALE_GOLDENROD } from '../../../styles/colors';

const Section4 = () => {

  const { loggedIn, onPressRightIcon, progressWidth, alcohol, questionData, answers, setQuestion1, setQuestion2, setQuestion3, setQuestion4, next } = useSection4();

  return (
    <>
      <Header isRightIcon={true} />
      <View style={styles.progressBarContainer}>
        <Progress.Bar color={GREEN} unfilledColor={PALE_GOLDENROD} progress={0.4} width={progressWidth} height={12} />
      </View>
      <View style={styles.topContainer}>
        <Text style={styles.topContainerTextStyle1}>{SECTION_4_HEADING}</Text>
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
            {alcohol && (
              <View>
                <View style={styles.questionViewContainer}>
                  <Text style={styles.questionViewContainerText}>{questionData[1]?.question}</Text>
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

                <View style={styles.questionViewContainer}>
                  <Text style={styles.questionViewContainerText}>{questionData[2]?.question}</Text>
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
                <View style={styles.questionViewContainer}>
                  <Text style={styles.questionViewContainerText}>
                    {questionData[3]?.question}
                  </Text>
                  <SelectList
                    boxStyles={styles.boxStylesContainer}
                    placeholder={
                      answers[questionData[3]?.questionId] === undefined
                        ? answers[questionData[3]?.questionId] === ''
                        : ''
                    }
                    setSelected={setQuestion4}
                    data={PickerData[questionData[3]?.questionType]}
                    search={false}
                  />
                </View>
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

export default Section4;
