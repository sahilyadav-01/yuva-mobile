import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import Backbutton from "../../../components/Backbutton";
import { useNavigation } from "@react-navigation/core";
import * as Progress from "react-native-progress";
import { Dimensions } from "react-native";
import SectionInput from "../../../components/SectionInput";
import SectionPicker from "../../../components/SectionPicker";
import { useSelector, useDispatch } from "react-redux";
import { section5QThunk } from "../../../store/reducers/Section5Slice";
import PickerData from "../../../utils/PickerData";
import ForwardButton from "../../../components/ForwardButton";
import SelectList from "react-native-dropdown-select-list";
import { dispatch_option } from "../../../store/reducers/Section5Slice";

const Section5 = () => {
  /**
   * Hooks
   */
  const [smoke, setSmoke] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  /**
   * State
   */
  const answers = useSelector((state) => state.section5.answers);

  const questionData = useSelector((state) => state.section5.rawQuestions);

  console.log(questionData[0], "malli");

  const { jwt } = useSelector((state) => state.auth.user);

  const setQuestion1 = (value) => {
    {
      value == 1 ? setSmoke(true) : setSmoke(false);
    }
    dispatch(
      dispatch_option({ key: questionData[0].questionId, value: value })
    );
  };
  const setQuestion2 = (value) => {
    dispatch(
      dispatch_option({ key: questionData[1].questionId, value: value })
    );
  };

  const setQuestion3 = (value) => {
    dispatch(
      dispatch_option({ key: questionData[2].questionId, value: value })
    );
  };

  const setQuestion4 = (value) => {
    dispatch(
      dispatch_option({ key: questionData[3].questionId, value: value })
    );
  };

  //Metadata
  const windowWidth = Dimensions.get("window").width;
  const progressWidth = windowWidth;
  const selectionData = [
    { key: "0", value: "Yes" },
    { key: "1", value: "No" },
  ];

  /**
   * React Hooks
   */

  // Load Question Data
  useEffect(() => {
    dispatch(section5QThunk({ jwt }));
  }, []);

  /**
   * Navigation
   */
  const previous = () => {
    navigation.navigate("section4");
  };
  const next = () => {
    navigation.navigate("section6");
  };

  return (
    <SafeAreaView>
      <View className="flex-row justify-between items-center bg-[#1D2334] h-[60px] px-[10px] mt-[20px]">
        <View className="flex flex-row h-full items-center">
          <Backbutton color="white" size={24} onPress={previous} />
          <Text className="text-center text-white text-xl ml-[20px]">
            Health Risk Assesment
          </Text>
        </View>
        <ForwardButton color="white" size={24} onPress={next} />
      </View>
      <View className="w-full">
        <Progress.Bar progress={0.5} width={progressWidth} />
      </View>
      <View className="h-full mx-[30px] my-[20px] ">
        <Text className="text-xl">Section Five - Smoking Risk</Text>

        {/* <Text className="text-base mt-2">How Often you consume these foods?</Text> */}
        {/* Questionaire */}
        <View className="h-[650px]">
          <ScrollView
            bounces={false}
            contentContainerStyle={{
              flexGrow: 1,
              paddingBottom: 60,
            }}
            showsVerticalScrollIndicator={false}
          >
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
              <Text className="text-base mb-[8px]">
                {questionData[0]?.question}
              </Text>
              <SelectList
                boxStyles={{
                  backgroundColor: "white",
                  borderRadius: 8,
                  height: 50,
                  borderWidth: 1,
                  borderColor: "#1D2334",
                }}
                placeholder={
                  answers[questionData[0]?.questionId] === undefined
                    ? answers[questionData[0]?.questionId] === ""
                    : ""
                }
                setSelected={setQuestion1}
                data={PickerData[questionData[0]?.questionType]}
                search={false}
              />
            </View>
            {smoke ? (
              <View>
                <View className="mt-[20px]">
                  <Text className="text-base">{questionData[1]?.question}</Text>
                  <TextInput
                    style={{ backgroundColor: "#ffffff", borderWidth: 1 }}
                    className="h-[40px] rounded-lg shadow-2xl pl-5 mt-[8px] text-sm"
                    keyboardType="numeric"
                    placeholderTextColor={"black"}
                    placeholder=""
                    onChangeText={setQuestion2}
                  />
                </View>

                <View className="mt-[20px]">
                  <Text className="text-base">{questionData[2]?.question}</Text>
                  <TextInput
                    style={{ backgroundColor: "#ffffff", borderWidth: 1 }}
                    className="h-[40px] rounded-lg shadow-2xl pl-5 mt-[8px] text-sm"
                    keyboardType="numeric"
                    placeholderTextColor={"black"}
                    placeholder=""
                    onChangeText={setQuestion3}
                  />
                </View>
              </View>
            ) : (
              <></>
            )}

            <View className="mt-[20px]">
              <Text className="text-base mb-[8px]">
                {questionData[3]?.question}
              </Text>
              <SelectList
                boxStyles={{
                  backgroundColor: "white",
                  borderRadius: 8,
                  height: 50,
                  borderWidth: 1,
                  borderColor: "#1D2334",
                }}
                placeholder={
                  answers[questionData[3]?.questionId] === undefined
                    ? answers[questionData[3]?.questionId] === ""
                    : ""
                }
                setSelected={setQuestion4}
                data={PickerData[questionData[3]?.questionType]}
                search={false}
              />
            </View>

            <View className="flex-row justify-between mt-[30px]">
              <TouchableOpacity
                style={{ backgroundColor: "#52608E" }}
                className="w-[100px] rounded"
                onPress={previous}
              >
                {/* <View className="flex h-50px bg-gray-100 justify-center"> */}
                <Text className="text-center pt-[15px] pb-[15px] text-white">
                  Previous
                </Text>
                {/* </View> */}
              </TouchableOpacity>
              <TouchableOpacity
                style={{ backgroundColor: "#52608E" }}
                className="w-[100px] rounded"
                onPress={next}
              >
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

export default Section5;
