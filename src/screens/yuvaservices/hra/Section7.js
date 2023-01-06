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
import { section7QThunk } from '../../../store/reducers/Section7Slice';
import PickerData from '../../../utils/PickerData';
import ForwardButton from '../../../components/ForwardButton';
import { dispatch_option, dispatch_option_extra_questions } from '../../../store/reducers/Section7Slice';
import SelectList from 'react-native-dropdown-select-list';

const Section7 = () => {
  /**
   * Hooks
   */
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [medicalCondition, setMedicalCondition] = useState(false);
  const [medicalCondition1, setMedicalCondition1] = useState(false);
  const [medicalConditionDiabetes, setMedicalConditionDiabetes] = useState(false);
  const [medicalConditionHypertension, setMedicalConditionHypertension] = useState(false);
  const [medicalConditionDoYouSufferFromAnyIllness, setMedicalConditionDoYouSufferFromAnyIllness] = useState(false);
  const [medicalConditionAnyCancer, setMedicalConditionAnyCancer] = useState(false);
  const [medicalConditionChronicIllness, setMedicalConditionChronicIllness] = useState(false);
  const [requiredFieldQ4, setRequiredFieldQ4] = useState(false);
  const [requiredFieldQ7, setRequiredFieldQ7] = useState(false);
  const [requiredFieldQ8, setRequiredFieldQ8] = useState(false);



  /**
   * State
   */
  const answers = useSelector(state => state.section7.answers);
  const answers9A = useSelector(state => state.section7.extra_questions_Q9A);
  const answers10A = useSelector(state => state.section7.extra_questions_Q10A);
  const questionData = useSelector(state => state.section7.rawQuestions);

  const { jwt } = useSelector(state => state.auth.user);

  const setQuestion1 = value => {
    {
      value == 1 ? setMedicalConditionDoYouSufferFromAnyIllness(true) : setMedicalConditionDoYouSufferFromAnyIllness(false);
    }
    dispatch(dispatch_option({ key: questionData[0].questionId, value: value }));
  };
  const setQuestion2 = value => {
    {
      value == 1 ? setMedicalConditionDiabetes(true) : setMedicalConditionDiabetes(false);
    }
    dispatch(dispatch_option({ key: questionData[1].questionId, value: value }));
  };

  const setQuestion3 = value => {
    {
      value == 1 ? setMedicalCondition(true) : setMedicalCondition(false);
    }
    dispatch(dispatch_option({ key: questionData[2].questionId, value: value }));
  };

  const inputCheck = (id, value) => {
    const reg = /^\d*\.?\d*$/;
    switch (id) {
      case 'Q4':
        const validQ4 = ((value > 0) && (reg.test(value) === true));
        setRequiredFieldQ4(!validQ4);
        if (validQ4) {
          dispatch(dispatch_option({ key: questionData[3].questionId, value: value }));
        } else {
          Alert.alert("Alert", "Worng Input");
        };
        break;

        case 'Q7':
          const validQ7 = ((value > 0) && (reg.test(value) === true));
          setRequiredFieldQ7(!validQ7);
          if (validQ7) {
            dispatch(dispatch_option({ key: questionData[6].questionId, value: value }));
          } else {
            Alert.alert("Alert", "Worng Input");
          };
          break;

      case 'Q8':
        const validQ8 = ((reg.test(value) === true) && (value > 0));
        setRequiredFieldQ8(!validQ8);
        if (validQ8) {
          dispatch(dispatch_option({ key: questionData[7].questionId, value: value }));
        } else {
          Alert.alert("Alert", "Worng input");
        };
        break;

      default:
        Alert.alert("Alert", "Worng Input");
    }

  };

  const setQuestion5 = value => {
    {
      value == 1 ? setMedicalConditionHypertension(true) : setMedicalConditionHypertension(false);
    }
    dispatch(dispatch_option({ key: questionData[4].questionId, value: value }));
  };
  const setQuestion6 = value => {
    {
      value == 1 ? setMedicalCondition1(true) : setMedicalCondition1(false);
    }
    dispatch(dispatch_option({ key: questionData[5].questionId, value: value }));
  };
  const setQuestion9 = value => {
    {
      value == 1 ? setMedicalConditionAnyCancer(true) : setMedicalConditionAnyCancer(false);
    }
    dispatch(dispatch_option({ key: questionData[8].questionId, value: value }));
  };
  const setQuestion9A = value => {
    dispatch(dispatch_option_extra_questions({ key: "setQuestion9A", value: value }));

  }
  const setQuestion10 = value => {
    {
      value == 1 ? setMedicalConditionChronicIllness(true) : setMedicalConditionChronicIllness(false);
    }
    dispatch(dispatch_option({ key: questionData[9].questionId, value: value }));
  };
  const setQuestion10A = value => {
    dispatch(dispatch_option_extra_questions({ key: "setQuestion10A", value: value }));

  }
  //Metadata
  const windowWidth = Dimensions.get('window').width;
  const progressWidth = windowWidth;
  const selectionData = [
    { key: '0', value: 'No' },
    { key: '1', value: 'Yes' },
  ];

  /**
   * React Hooks
   */

  // Load Question Data
  useEffect(() => {
    dispatch(section7QThunk({ jwt }));
  }, []);

  /**
   * Navigation
   */
  const previous = () => {
    navigation.navigate('section6');
  };
  const next = () => {


    if ((answers.Q41 === '0') && ((answers.Q50 === '0') || (answers.Q50 === '1' && answers10A))) {

      navigation.navigate("section8")

    }

    else if ((answers9A === undefined || answers9A === '') || (answers10A === undefined || answers10A === '')) {

      Alert.alert("Alert", 'Please Answer All the Questions')

    }
    else if (((answers.Q41 === '1') && (answers.Q42 === '1')) && ((answers.Q43 === '0') || ((answers.Q43 === '1') &&
      (answers.Q44))) && ((answers.Q45 === '0') || ((answers.Q45 === '1') && ((answers.Q46 === '0') || ((answers.Q46 === '1') && answers.Q47 && answers.Q48))))
      && (answers.Q49 === '0') || ((answers.Q49 === '1') && answers9A) && (answers.Q50 === '0') || (answers.Q50 === '1' && answers10A)) {
      navigation.navigate("section8")
    }

    else {

      if (Object.keys(answers).map((x) => { return answers[x] }).includes('')) {

        Alert.alert("Alert", 'Please Answer All the Questions')
      }

      else {
        navigation.navigate("section8")
      }

    }
  };

  return (
    <SafeAreaView>
      <View className="flex-row justify-between items-center bg-[#1D2334] h-[60px] px-[10px] mt-[42px]">
        <View className="flex flex-row h-full items-center">
          <Backbutton color="white" size={24} onPress={previous} />
          <Text className="text-center text-white text-xl ml-[20px]">
            Health Risk Assesment
          </Text>
        </View>
        <ForwardButton color="white" size={24} onPress={next} />
      </View>
      <View className="w-full">
        <Progress.Bar progress={0.7} width={progressWidth} />
      </View>
      <View className="h-full mx-[30px] my-[20px] ">
        <Text className="text-xl">Section Seven-Current Medical Condition</Text>

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
              <Text className="text-base mb-[8px]">
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
            {medicalConditionDoYouSufferFromAnyIllness ? (
              <View className="mt-[20px]">
                <Text className="text-base mb-[8px]">
                  {questionData[1]?.question}
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
                    answers[questionData[1]?.questionId] === undefined
                      ? answers[questionData[1]?.questionId] === ''
                      : ''
                  }
                  setSelected={setQuestion2}
                  data={PickerData[questionData[1]?.questionType]}
                  search={false}
                />
              </View>
            ) : (
              <></>
            )}
            {medicalConditionDiabetes ? (
              <View className="mt-[20px]">
                <Text className="text-base mb-[8px]">
                  {questionData[2]?.question}
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
                    answers[questionData[2]?.questionId] === undefined
                      ? answers[questionData[2]?.questionId] === ''
                      : ''
                  }
                  setSelected={setQuestion3}
                  data={PickerData[questionData[2]?.questionType]}
                  search={false}
                />
              </View>
            ) : (
              <></>
            )}
            {medicalCondition ? (
              <View className="mt-[20px]">
                <Text
                  style={{
                    color: requiredFieldQ4 ? 'red' : 'gray',
                  }}
                  className="text-base">{questionData[3]?.question}</Text>
                <TextInput
                  style={{ backgroundColor: '#ffffff', borderWidth: 1 }}
                  className="h-[40px] rounded-lg shadow-2xl pl-5 mt-[8px] text-sm"
                  keyboardType="numeric"
                  placeholderTextColor={'black'}
                  placeholder=""
                  onEndEditing={(e) => inputCheck('Q4', e.nativeEvent.text)}

                />
              </View>
            ) : (
              <></>
            )}
            {medicalConditionDoYouSufferFromAnyIllness ? (
              <View className="mt-[20px]">
                <Text className="text-base mb-[8px]">
                  {questionData[4]?.question}
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
                    answers[questionData[4]?.questionId] === undefined
                      ? answers[questionData[4]?.questionId] === ''
                      : ''
                  }
                  setSelected={setQuestion5}
                  data={PickerData[questionData[4]?.questionType]}
                  search={false}
                />
              </View>
            ) : (
              <></>
            )}
            {medicalConditionHypertension ? (
              <View className="mt-[20px]">
                <Text className="text-base mb-[8px]">
                  {questionData[5]?.question}
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
                    answers[questionData[5]?.questionId] === undefined
                      ? answers[questionData[5]?.questionId] === ''
                      : ''
                  }
                  setSelected={setQuestion6}
                  data={PickerData[questionData[5]?.questionType]}
                  search={false}
                />
              </View>
            ) : (
              <></>
            )}
            {medicalCondition1 ? (
              <View>
                <View className="mt-[20px]">
                  <Text
                    style={{
                      color: requiredFieldQ7 ? 'red' : 'gray',
                    }}
                    className="text-base">{questionData[6]?.question}</Text>
                  <TextInput
                    style={{ backgroundColor: '#ffffff', borderWidth: 1 }}
                    className="h-[40px] rounded-lg shadow-2xl pl-5 mt-[8px] text-sm"
                    keyboardType="numeric"
                    placeholderTextColor={'black'}
                    placeholder=""
                    onEndEditing={(e) => inputCheck('Q7', e.nativeEvent.text)}

                  />
                </View>
                <View className="mt-[20px]">
                  <Text
                    style={{
                      color: requiredFieldQ8 ? 'red' : 'gray',
                    }}
                    className="text-base">{questionData[7]?.question}</Text>
                  <TextInput
                    style={{ backgroundColor: '#ffffff', borderWidth: 1 }}
                    className="h-[40px] rounded-lg shadow-2xl pl-5 mt-[8px] text-sm"
                    keyboardType="numeric"
                    placeholderTextColor={'black'}
                    placeholder=""
                    onEndEditing={(e) => inputCheck('Q8', e.nativeEvent.text)}

                  />
                </View>
              </View>
            ) : (
              <></>
            )}
            {medicalConditionDoYouSufferFromAnyIllness ? (

              <View className="mt-[20px]">
                <Text className="text-base mb-[8px]">
                  {questionData[8]?.question}
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
                    answers[questionData[8]?.questionId] === undefined
                      ? answers[questionData[8]?.questionId] === ''
                      : ''
                  }
                  setSelected={setQuestion9}
                  data={PickerData[questionData[8]?.questionType]}
                  search={false}
                />
              </View>
            ) : (
              <></>
            )}

            {medicalConditionAnyCancer ? (
              <View className="mt-[20px]">
                <Text className="text-base">{"Please specify"}</Text>
                <TextInput
                  style={{ backgroundColor: '#ffffff', borderWidth: 1 }}
                  className="h-[40px] rounded-lg shadow-2xl pl-5 mt-[8px] text-sm"
                  keyboardType="text"
                  placeholderTextColor={'black'}
                  placeholder=""
                  onChangeText={setQuestion9A}
                />
              </View>
            ) : (
              <></>
            )}
            <View className="mt-[20px]">
              <Text className="text-base mb-[8px]">
                {questionData[9]?.question}
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
                  answers[questionData[9]?.questionId] === undefined
                    ? answers[questionData[9]?.questionId] === ''
                    : ''
                }
                setSelected={setQuestion10}
                data={PickerData[questionData[9]?.questionType]}
                search={false}
              />
            </View>
            {medicalConditionChronicIllness ? (
              <View className="mt-[20px]">
                <Text className="text-base">{"Please specify"}</Text>
                <TextInput
                  style={{ backgroundColor: '#ffffff', borderWidth: 1 }}
                  className="h-[40px] rounded-lg shadow-2xl pl-5 mt-[8px] text-sm"
                  keyboardType="text"
                  placeholderTextColor={'black'}
                  placeholder=""
                  onChangeText={setQuestion10A}
                />
              </View>
            ) : (
              <></>
            )}

            <View className="flex-row justify-between mt-[30px]">
              <TouchableOpacity
                style={{ backgroundColor: '#52608E', marginBottom: '10%' }}
                className="w-[100px] rounded"
                onPress={previous}>
                {/* <View className="flex h-50px bg-gray-100 justify-center"> */}
                <Text className="text-center pt-[15px] pb-[15px] text-white">
                  Previous
                </Text>
                {/* </View> */}
              </TouchableOpacity>
              <TouchableOpacity
                style={{ backgroundColor: '#52608E', marginBottom: '10%' }}
                className="w-[100px] rounded"
                onPress={next}>
                {/* <View className="flex h-50px bg-gray-100 justify-center"> */}
                <Text className="text-center pt-[15px] pb-[15px] text-white">
                  Next
                </Text>
                {/* </View> */}
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Section7;