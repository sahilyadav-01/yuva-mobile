import React from 'react';
import {View, Text, ScrollView, TouchableOpacity, FlatList} from 'react-native';
import * as Progress from 'react-native-progress';
import SectionInput from '../../../components/SectionInput';
import SectionPicker from '../../../components/SectionPicker';
import PickerData from '../../../utils/PickerData';
import Header from '../../../components/Header';
import {
  BUTTON_TEXT,
  HEALTH_RISK_ASSESSMENT,
  QUESTION_TYPE_INPUT,
  QUESTION_TYPE_PICKER,
  SECTION_8_HEADING,
} from '../constant';
import {useSection8} from './hooks/useSection8';
import {styles} from './styles';
import {ANAKIVA, MARINER} from '../../../styles/colors';
import {styles as hraStyles} from '../HRAHome/styles';
import Loader from '../../../components/Loader';

const Section8 = () => {
  const {
    progressWidth,
    dispatch_option,
    questionData,
    answers,
    next,
    renderData,
  } = useSection8();

  if (!renderData) {
    return <Loader extraStyles={hraStyles.loaderContainer} />;
  }
  return (
    <View style={styles.container}>
      <Header title={HEALTH_RISK_ASSESSMENT} showBackButton={true} />
      <View style={styles.progressBarContainer}>
        <Progress.Bar
          color={MARINER}
          unfilledColor={ANAKIVA}
          progress={0.8}
          width={progressWidth}
          height={12}
        />
      </View>
      <View style={styles.topContainer}>
        <Text style={styles.topContainerTextStyle}>{SECTION_8_HEADING}</Text>
        <View style={styles.scrollViewContainer}>
          <ScrollView
            bounces={false}
            style={styles.scrollViewContentContainerStyle}
            showsVerticalScrollIndicator={false}>
            <FlatList
              data={questionData}
              keyExtractor={(item, index) => `${index}`}
              nestedScrollEnabled={true}
              renderItem={({item, index}) => {
                switch (true) {
                  case item.questionType.includes(QUESTION_TYPE_PICKER):
                    return (
                      <SectionPicker
                        key={index}
                        text={item.question}
                        data={PickerData[item.questionType]}
                        defaultAnswer={
                          answers[item.questionId] === undefined
                            ? ''
                            : PickerData[item.questionType][
                                answers[item.questionId]
                              ]?.value ?? ''
                        }
                        dispatcher={dispatch_option}
                        questionId={item.questionId}
                      />
                    );
                  case item.questionType.includes(QUESTION_TYPE_INPUT):
                    return (
                      <SectionInput
                        key={index}
                        defValue={
                          answers[item.questionId] === undefined
                            ? ''
                            : PickerData[item.questionType][
                                answers[item.questionId]
                              ]?.value ?? ''
                        }
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
              <TouchableOpacity
                style={styles.touchableOpacityStyle}
                onPress={next}>
                <Text style={styles.touchableOpacityTextStyle}>
                  {BUTTON_TEXT}
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default Section8;
