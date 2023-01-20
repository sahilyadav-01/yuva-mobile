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
import { section4QThunk } from '../../../store/reducers/Section4Slice';
import PickerData from '../../../utils/PickerData';
import ForwardButton from '../../../components/ForwardButton';
import { dispatch_option } from '../../../store/reducers/Section4Slice';
import SelectList from 'react-native-dropdown-select-list';
import Header from '../../../components/Header';

const Section4 = () => {
  /**
   * Hooks
   */
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [alochol, setAlochol] = useState(false);

  /**
   * State
   */
  const answers = useSelector(state => state.section4.answers);

  const questionData = useSelector(state => state.section4.rawQuestions);

    const {user: {jwt},loggedIn,} = useSelector(state => state.auth);

  const setQuestion1 = value => {
    {
      value == 1 ? setAlochol(true) : setAlochol(false);
    }
    dispatch(dispatch_option({ key: questionData[0].questionId, value: value }));
  };
  const setQuestion2 = value => {
    dispatch(dispatch_option({ key: questionData[1].questionId, value: value }));
  };

  const setQuestion3 = value => {
    dispatch(dispatch_option({ key: questionData[2].questionId, value: value }));
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
    dispatch(section4QThunk({ jwt }));
  }, []);

  /**
   * Navigation
   */
  const previous = () => {
    navigation.navigate('section3');
  };
  const next = () => {

    if (answers.Q31 == '0') {

      navigation.navigate("section5")

    }
    else {

      if (Object.keys(answers).map((x) => { return answers[x] }).includes('')) {
        Alert.alert("Alert", 'Please Answer All the Questions')
      }
      else {
        navigation.navigate("section5")
      }
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
        <Progress.Bar color="#319B4B" unfilledColor="#F6ECB6" progress={0.4} width={progressWidth} height={12} />
      </View>
      <View className="h-full mx-[30px] my-[20px] ">
        <Text style={{ fontWeight: '500', }} className="text-xl text-[#1D2334]">Section Four - Alcoholic Risk</Text>

        {/* <Text className="text-base mt-2">How Often you consume these foods?</Text> */}
        {/* Questionaire */}
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

            <View className="mt-[20px]">
              <Text style={{ color: '#282A2E' }} className="text-base mb-[8px]">
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
            {alochol ? (
              <View>
                <View className="mt-[20px]">
                  <Text style={{ color: '#282A2E' }} className="text-base">{questionData[1]?.question}</Text>
                  <SelectList
                    boxStyles={{
                      backgroundColor: 'white',
                      borderRadius: 8,
                      height: 50,
                      borderWidth: 1,
                      borderColor: '#1D2334',
                    }}
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

                <View className="mt-[20px]">
                  <Text style={{ color: '#282A2E' }} className="text-base">{questionData[2]?.question}</Text>
                  {/* <TextInput
                    style={{backgroundColor: '#ffffff', borderWidth: 1}}
                    className="h-[40px] rounded-lg shadow-2xl pl-5 mt-[8px] text-sm"
                    keyboardType="numeric"
                    placeholderTextColor={'black'}
                    placeholder=""
                    onChangeText={setQuestion3}
                  /> */}

                  <SelectList
                    boxStyles={{
                      backgroundColor: 'white',
                      borderRadius: 8,
                      height: 50,
                      borderWidth: 1,
                      borderColor: '#1D2334',
                    }}
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
                <View className="mt-[20px]">
                  <Text style={{ color: '#282A2E' }} className="text-base mb-[8px]">
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
              </View>
            ) : (
              <></>
            )}

            <View className="mt-[30px]">
              <TouchableOpacity
                style={{
                  borderRadius: 8,
                  backgroundColor: "#E68D36"}}
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

export default Section4;
