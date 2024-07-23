import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import * as Progress from 'react-native-progress';
import PickerData from '../../../utils/PickerData';
import SelectList from 'react-native-dropdown-select-list';
import Header from '../../../components/Header';
import {useSection5} from './hooks/useSection5';
import {
  BUTTON_TEXT,
  KEYBOARD_TYPE_VALUE,
  SECOND_QUESTION,
  SECTION_5_HEADING,
  PLACEHOLDER_COLOR,
  THIRD_QUESTION,
  HEALTH_RISK_ASSESSMENT,
} from '../constant';
import {styles} from './styles';
import {ANAKIVA, DARK_GRAY, MARINER, SLATE_GRAY} from '../../../styles/colors';
import {styles as hraStyles} from '../HRAHome/styles';
import Loader from '../../../components/Loader';
import {getPlatform} from '../../../utils/utils';

const Section5 = () => {
  const {
    inputCheck,
    setQuestion4,
    setQuestion1,
    requiredFieldQ2,
    requiredFieldQ3,
    smoke,
    progressWidth,
    questionData,
    answers,
    next,
    renderData,
    onChangeText,
  } = useSection5();
  const Container = getPlatform().isIOS ? KeyboardAvoidingView : View;
  if (!renderData) {
    return <Loader extraStyles={hraStyles.loaderContainer} />;
  }
  return (
    <Container behavior="padding" style={styles.screenContainer}>
      <Header title={HEALTH_RISK_ASSESSMENT} showBackButton={true} />
      <ScrollView style={styles.scrollViewContentContainerStyle}>
        <View style={styles.progressBarContainer}>
          <Progress.Bar
            color={MARINER}
            unfilledColor={ANAKIVA}
            progress={0.5}
            width={progressWidth}
            height={12}
          />
        </View>
        <View style={styles.topContainer}>
          <Text style={styles.topContainerTextStyle}>{SECTION_5_HEADING}</Text>
          <View style={styles.questionViewContainer}>
            <Text style={styles.questionViewContainerText}>
              {questionData[0]?.question}
            </Text>
            <SelectList
              boxStyles={styles.boxStylesContainer}
              placeholder={
                answers[questionData[0]?.questionId] === undefined
                  ? ''
                  : PickerData[questionData[0]?.questionType][
                      answers[questionData[0]?.questionId]
                    ]?.value ?? ''
              }
              placeholderTextColor={DARK_GRAY}
              setSelected={setQuestion1}
              data={PickerData[questionData[0]?.questionType]}
              search={false}
              inputStyles={{color: SLATE_GRAY}}
              dropdownTextStyles={{color: DARK_GRAY}}
            />
          </View>
          {smoke && (
            <View>
              <View style={styles.questionViewContainer}>
                <Text style={requiredFieldQ2 ? styles.textError : styles.text}>
                  {questionData[1]?.question}
                </Text>
                <TextInput
                  style={styles.questionViewContainerTextInput}
                  keyboardType={KEYBOARD_TYPE_VALUE}
                  placeholderTextColor={SLATE_GRAY}
                  placeholder={'Enter your age'}
                  value={answers[questionData[1]?.questionId] ?? ''}
                  onEndEditing={e =>
                    inputCheck(SECOND_QUESTION, e.nativeEvent.text)
                  }
                  onChangeText={e => onChangeText(SECOND_QUESTION, e)}
                />
              </View>
              <View style={styles.questionViewContainer}>
                <Text style={requiredFieldQ3 ? styles.textError : styles.text}>
                  {questionData[2]?.question}
                </Text>
                <TextInput
                  style={styles.questionViewContainerTextInput}
                  keyboardType={KEYBOARD_TYPE_VALUE}
                  placeholderTextColor={SLATE_GRAY}
                  placeholder={'Enter smoke count'}
                  value={answers[questionData[2]?.questionId] ?? ''}
                  onEndEditing={e =>
                    inputCheck(THIRD_QUESTION, e.nativeEvent.text)
                  }
                  onChangeText={e => onChangeText(THIRD_QUESTION, e)}
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
              placeholder={
                answers[questionData[3]?.questionId] === undefined
                  ? ''
                  : PickerData[questionData[3]?.questionType][
                      answers[questionData[3]?.questionId]
                    ]?.value ?? ''
              }
              placeholderTextColor={DARK_GRAY}
              setSelected={setQuestion4}
              data={PickerData[questionData[3]?.questionType]}
              search={false}
              inputStyles={{color: SLATE_GRAY}}
              dropdownTextStyles={{color: DARK_GRAY}}
            />
          </View>
          <View style={styles.touchableOpacityViewContainer}>
            <TouchableOpacity
              style={styles.touchableOpacityStyle}
              onPress={next}>
              <Text style={styles.touchableOpacityTextStyle}>
                {BUTTON_TEXT}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </Container>
  );
};

export default Section5;
