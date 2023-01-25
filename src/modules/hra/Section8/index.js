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
import { section8QThunk } from '../../../store/reducers/Section8Slice';
import PickerData from '../../../utils/PickerData';
import ForwardButton from '../../../components/ForwardButton';
import { dispatch_option } from '../../../store/reducers/Section8Slice';
import Header from '../../../components/Header';

const Section8 = () => {

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const answers = useSelector(state => state.section8.answers);
  const questionData = useSelector(state => state.section8.rawQuestions);
  const { user: { jwt }, loggedIn, } = useSelector(state => state.auth);
  const windowWidth = Dimensions.get('window').width;
  const progressWidth = windowWidth;

  useEffect(() => {
    dispatch(section8QThunk({ jwt }));
  }, []);

  const next = () => {
    if (Object.keys(answers).map((x) => { return answers[x] }).includes('')) {
      Alert.alert("Alert", 'Please Complete the form to proceed next section')
    }
    else {
      navigation.navigate("section9")
    }
  };
  const onPressRightIcon = () => {
    if (loggedIn !== 'loggedIn') {
      navigation.navigate('LoginScreen');
    } else {
      //The logic for opening the drawer should be added here
    }
  };

  return (
    <SafeAreaView>
      <Header
        isLoggedIn={loggedIn === 'loggedIn'}
        onPressRightIcon={onPressRightIcon}
      />
      <View className="w-full">
        <Progress.Bar color="#319B4B" unfilledColor="#F6ECB6" progress={0.8} width={progressWidth} height={12} />
      </View>
      <View className="h-full mx-[30px] my-[20px] ">
        <Text style={{ fontWeight: '500' }} className="text-xl text-[#1D2334]">Section Eight - Hereditary and Genetics</Text>
        <View className="h-[650px]">
          <ScrollView
            bounces={false}
            contentContainerStyle={{
              flexGrow: 1,
              paddingBottom: 300,
            }}
            showsVerticalScrollIndicator={false}>
            {questionData.map(item => {
              if (item.questionType.includes('picker')) {
                const data = PickerData[item.questionType];
                return (
                  <SectionPicker
                    key={item.questionId}
                    text={item.question}
                    data={PickerData[item.questionType]}
                    defaultAnswer={answers[item.questionId]}
                    dispatcher={dispatch_option}
                    questionId={item.questionId}
                  />
                );
              } else if (item.questionType == 'input') {
                return (
                  <SectionInput
                    key={item.questionId}
                    defValue={answers[item.questionId]}
                    text={item.question}
                    dispatcher={dispatch_option}
                    questionId={item.questionId}
                  />
                );
              }
            })}
            <View className="mt-[30px]">
              <TouchableOpacity
                style={{
                  borderRadius: 8,
                  backgroundColor: "#E68D36"
                }}
                onPress={next}
              >
                <Text className="text-center pt-[15px] pb-[15px] text-white">Next</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Section8;
