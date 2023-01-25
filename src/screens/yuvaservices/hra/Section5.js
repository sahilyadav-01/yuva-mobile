import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput,
  FlatList,
  Alert
} from 'react-native';
import Backbutton from '../../../components/Backbutton';
import { useNavigation } from '@react-navigation/core';
import * as Progress from 'react-native-progress';
import { Dimensions } from 'react-native';
import SectionInput from '../../../components/SectionInput';
import SectionPicker from '../../../components/SectionPicker';
import { useSelector, useDispatch } from 'react-redux';
import { section5QThunk } from '../../../store/reducers/Section5Slice';
import PickerData from '../../../utils/PickerData';
import ForwardButton from '../../../components/ForwardButton';
import SelectList from 'react-native-dropdown-select-list';
import { dispatch_option } from '../../../store/reducers/Section5Slice';
import Header from '../../../components/Header';

const Section5 = () => {
  /**
   * Hooks
   */
  const [smoke, setSmoke] = useState(false);
  const [requiredFieldQ2, setRequiredFieldQ2] = useState(false);
  const [requiredFieldQ3, setRequiredFieldQ3] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  /**
   * State
   */
  const answers = useSelector(state => state.section5.answers);

  const section1Answers = useSelector(state => state.section1.answers);
  const questionData = useSelector(state => state.section5.rawQuestions);

  const {user: {jwt},loggedIn,} = useSelector(state => state.auth);

  const setQuestion1 = value => {
    {
      value == 1 ? setSmoke(true) : setSmoke(false);
    }
    dispatch(dispatch_option({ key: questionData[0].questionId, value: value }));
  };


  const inputCheck = (id, value) => {
    const reg = /^\d+$/;
    switch (id) {
      case 'Q2':
        const validQ2 = ((reg.test(value) === true) && (value >= 12) && (value <= section1Answers.Q2));
        setRequiredFieldQ2(!validQ2);
        if (validQ2) {
          dispatch(dispatch_option({ key: questionData[1].questionId, value: value }));
        } else {
          Alert.alert("Alert Worng Input", "The age at which you started smoking cannot be before you turned 12 years old or after your current age.");

        };
        break;

      case 'Q3':
        const validQ3 = ((reg.test(value) === true) && (value > 0));
        setRequiredFieldQ3(!validQ3);
        if (validQ3) {
          dispatch(dispatch_option({ key: questionData[2].questionId, value: value }));
        } else {
          Alert.alert("Alert", "Worng input");
        };
        break;

      default:
        Alert.alert("Alert", "Worng Input");
    }

  };
  const setQuestion4 = value => {
    dispatch(dispatch_option({ key: questionData[3].questionId, value: value }));
  };

  //Metadata
  const windowWidth = Dimensions.get('window').width;
  const progressWidth = windowWidth;
  const selectionData = [
    { key: '0', value: 'Yes' },
    { key: '1', value: 'No' },
  ];

  /**
   * React Hooks
   */

  // Load Question Data
  useEffect(() => {
    dispatch(section5QThunk());
  }, []);

  /**
   * Navigation
   */
  const previous = () => {
    navigation.navigate('section4');
  };

  const next = () => {
    if ((answers.Q35 == '0') && (answers.Q38 == '0' || answers.Q38 == '1')) {
      navigation.navigate("section6");
    }
    else if ((answers.Q35 == '1') && ((answers.Q36) && (requiredFieldQ2 == false)) && ((answers.Q37) && (requiredFieldQ3 == false)) && (answers.Q38 == '0' || answers.Q38 == '1')) {
      navigation.navigate("section6");
    }
    else {
      Alert.alert("Alert", 'Please Answer All the Questions');
    }
  };
  const onPressRightIcon = () => {
    if (loggedIn !== 'loggedIn') {
      navigation.navigate('LoginScreen');
    } else {
      // <Text>ggggggggg</Text>
    }
  };

  return (
    <SafeAreaView>
            <Header
        isLoggedIn={loggedIn === 'loggedIn'}
        onPressRightIcon={onPressRightIcon}
      />
      {/* <View className="flex-row justify-between items-center bg-[#1D2334] h-[60px] px-[10px] mt-[42px]">
        <View className="flex flex-row h-full items-center">
          <Backbutton color="white" size={24} onPress={previous} />
          <Text className="text-center text-white text-xl ml-[20px]">
            Health Risk Assesment
          </Text>
        </View>
      </View> */}
      <View className="w-full">
        <Progress.Bar color="#319B4B" unfilledColor="#F6ECB6" progress={0.5} width={progressWidth} height={12} />
      </View>
      <View className="h-full mx-[30px] my-[20px] ">
        <Text style={{ fontWeight: '500', }} className="text-xl text-[#1D2334]">Section Five - Smoking Risk</Text>
        <View className="h-[650px]">
          <ScrollView
            bounces={false}
            contentContainerStyle={{
              flexGrow: 1,
              paddingBottom: 300,
            }}
            showsVerticalScrollIndicator={false}>
            {/* {questionData.map((item)=>{
                                    if(item.questionType.includes("picker")){
                                        const data  = PickerData[item.questionType];
                                        return  <SectionPicker key={item.questionId} 
                                                        text={item.question} 
                                                        data={PickerData[item.questionType]}
                                                        defaultAnswer={answers[item.questionId]}
                                                        dispatcher={dispatch_option}
                                                        questionId={item.questionId}
                                                />
                                    }else if(item.questionType=="input"){
                                        return <SectionInput  
                                            key={item.questionId} 
                                            text={item.question}
                                            dispatcher={dispatch_option}
                                            questionId={item.questionId}
                                            />

                                    }
                                })} */}

            {/* <SectionPicker key={questionData[0].questionId} 
                                                        text={questionData[0].question} 
                                                        data={PickerData[questionData[0].questionType]}
                                                        defaultAnswer={answers[questionData[0].questionId]}
                                                        dispatcher={dispatch_option}
                                                        questionId={questionData[0].questionId}
                                                /> */}

            <View className="mt-[20px]">
              <Text className="text-base mb-[8px] text-[#1D2334]">
                {questionData[0]?.question}
              </Text>
              <SelectList
                boxStyles={{
                  backgroundColor: 'white',
                  borderRadius: 8,
                  height: 50,
                  borderWidth: 1,
                  borderColor: '#1D2334',
                }}
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
            {smoke ? (
              <View>
                <View className="mt-[20px]">
                  <Text style={{
                    color: requiredFieldQ2 ? 'red' : '#1D2334',
                  }}
                    className="text-base">{questionData[1]?.question}</Text>
                  <TextInput
                    style={{ backgroundColor: '#ffffff', borderWidth: 1 }}
                    className="h-[40px] rounded-lg shadow-2xl pl-5 mt-[8px] text-sm"
                    keyboardType="numeric"
                    placeholderTextColor={'black'}
                    placeholder=""
                    onEndEditing={(e) => inputCheck('Q2', e.nativeEvent.text)}
                  />
                </View>

                <View className="mt-[20px]">
                  <Text style={{
                    color: requiredFieldQ3 ? 'red' : '#1D2334',
                  }}
                    className="text-base">{questionData[2]?.question}</Text>
                  <TextInput
                    style={{ backgroundColor: '#ffffff', borderWidth: 1 }}
                    className="h-[40px] rounded-lg shadow-2xl pl-5 mt-[8px] text-sm"
                    keyboardType="numeric"
                    placeholderTextColor={'black'}
                    placeholder=""
                    onEndEditing={(e) => inputCheck('Q3', e.nativeEvent.text)}
                  />
                </View>
              </View>
            ) : (
              <></>
            )}

            <View className="mt-[20px]">
              <Text className="text-base mb-[8px] text-[#1D2334]">
                {questionData[3]?.question}
              </Text>
              <SelectList
                boxStyles={{
                  backgroundColor: 'white',
                  borderRadius: 8,
                  height: 50,
                  borderWidth: 1,
                  borderColor: '#1D2334',
                }}
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
            <View className="mt-[30px]">
              <TouchableOpacity
                style={{
                  borderRadius: 8,
                  backgroundColor: "#E68D36"
                }}
                onPress={next}
              >
                <Text className="text-center pt-[15px] pb-[15px] text-white ">Next</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Section5;
