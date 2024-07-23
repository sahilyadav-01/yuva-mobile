import {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {useSelector, useDispatch} from 'react-redux';
import {getDimensions} from '../../../../utils/utils';
import {
  dispatch_option,
  section6QThunk,
} from '../../../../store/reducers/Section6Slice';
import {ALERT, ALL_QUESTION_CHECK, SECTION_7} from '../../constant';
import {fetchSavedHRA, saveHRAData} from '../../../../store/reducers/HRASlice';

export const useSection6 = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const answers = useSelector(state => state.section6.answers);
  const questionData = useSelector(state => state.section6.rawQuestions);
  const {continueHRA, saveHRALoading, sectionData, sectionId, saveHRAError} =
    useSelector(state => state.hra);
  const {width} = getDimensions();
  const progressWidth = width;
  const [renderData, setRenderData] = useState(false);

  useEffect(() => {
    dispatch(section6QThunk());
  }, []);

  useEffect(() => {
    if (continueHRA && questionData.length > 0) {
      dispatch(fetchSavedHRA({sectionId: 6}));
    } else if (questionData.length > 0) {
      setRenderData(true);
    }
  }, [continueHRA, questionData]);

  useEffect(() => {
    if (
      !saveHRALoading &&
      sectionData !== null &&
      sectionId === 6 &&
      questionData.length > 0 &&
      continueHRA
    ) {
      dispatch(
        dispatch_option({
          key: questionData[0].questionId,
          value: sectionData.Q39.toString(),
        }),
      );
      dispatch(
        dispatch_option({
          key: questionData[1].questionId,
          value: sectionData.Q40.toString(),
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
            Q39: parseInt(answers.Q39),
            Q40: parseInt(answers.Q40),
          },
          sectionId: 6,
        }),
      );
      navigation.navigate(SECTION_7);
    }
  };

  return {
    progressWidth,
    questionData,
    answers,
    next,
    renderData,
  };
};
