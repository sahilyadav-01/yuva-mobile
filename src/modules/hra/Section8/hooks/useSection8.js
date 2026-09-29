import {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {useSelector, useDispatch} from 'react-redux';
import {getDimensions} from '../../../../utils/utils';
import {
  section8QThunk,
  dispatch_option,
} from '../../../../store/reducers/Section8Slice';
import {ALERT, ALL_QUESTION_CHECK, SECTION_9} from '../../constant';
import {fetchSavedHRA, saveHRAData} from '../../../../store/reducers/HRASlice';

export const useSection8 = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const answers = useSelector(state => state.section8.answers);
  const questionData = useSelector(state => state.section8.rawQuestions);
  const {continueHRA, saveHRALoading, sectionData, sectionId, saveHRAError} =
    useSelector(state => state.hra);
  const {width} = getDimensions();
  const progressWidth = width;
  const [renderData, setRenderData] = useState(false);

  useEffect(() => {
    dispatch(section8QThunk());
  }, []);

  useEffect(() => {
    if (continueHRA && questionData.length > 0) {
      dispatch(fetchSavedHRA({sectionId: 8}));
    } else if (questionData.length > 0) {
      setRenderData(true);
    }
  }, [continueHRA, questionData]);

  useEffect(() => {
    if (
      !saveHRALoading &&
      sectionData !== null &&
      sectionId === 8 &&
      questionData.length > 0 &&
      continueHRA
    ) {
      typeof sectionData.Q51 === 'number' &&
        dispatch(
          dispatch_option({
            key: questionData[0].questionId,
            value: sectionData.Q51.toString(),
          }),
        );
      typeof sectionData.Q52 === 'number' &&
        dispatch(
          dispatch_option({
            key: questionData[1].questionId,
            value: sectionData.Q52.toString(),
          }),
        );
      typeof sectionData.Q53 === 'number' &&
        dispatch(
          dispatch_option({
            key: questionData[2].questionId,
            value: sectionData.Q53.toString(),
          }),
        );
      typeof sectionData.Q54 === 'number' &&
        dispatch(
          dispatch_option({
            key: questionData[3].questionId,
            value: sectionData.Q54.toString(),
          }),
        );
      typeof sectionData.Q55 === 'number' &&
        dispatch(
          dispatch_option({
            key: questionData[4].questionId,
            value: sectionData.Q55.toString(),
          }),
        );
      typeof sectionData.Q56 === 'number' &&
        dispatch(
          dispatch_option({
            key: questionData[5].questionId,
            value: sectionData.Q56.toString(),
          }),
        );
      setRenderData(true);
    } else if (!saveHRALoading && saveHRAError) {
      setRenderData(true);
    }
  }, [saveHRALoading, questionData, sectionData]);

  const next = () => {
    if (
      Object.keys(answers)
        .map(x => {
          return answers[x];
        })
        .includes('')
    ) {
      Alert.alert(ALERT, ALL_QUESTION_CHECK);
    } else {
      dispatch(
        saveHRAData({
          answers: {
            Q51: parseInt(answers.Q51),
            Q52: parseInt(answers.Q52),
            Q53: parseInt(answers.Q53),
            Q54: parseInt(answers.Q54),
            Q55: parseInt(answers.Q55),
            Q56: parseInt(answers.Q56),
          },
          sectionId: 8,
        }),
      );
      navigation.navigate(SECTION_9);
    }
  };

  return {
    progressWidth,
    dispatch_option,
    questionData,
    next,
    answers,
    renderData,
  };
};
