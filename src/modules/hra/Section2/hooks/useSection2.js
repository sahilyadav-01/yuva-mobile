import {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {useSelector, useDispatch} from 'react-redux';
import {
  section2QThunk,
  dispatch_option,
} from '../../../../store/reducers/Section2Slice';
import {getDimensions} from '../../../../utils/utils';
import {ALERT, ALL_QUESTION_CHECK, SECTION_3} from '../../constant';
import {fetchSavedHRA, saveHRAData} from '../../../../store/reducers/HRASlice';

export const useSection2 = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const answers = useSelector(state => state.section2.answers);
  const questionData = useSelector(state => state.section2.rawQuestions);
  const {continueHRA, saveHRALoading, sectionData, sectionId, saveHRAError} =
    useSelector(state => state.hra);
  const {width} = getDimensions();
  const progressWidth = width;

  const [renderData, setRenderData] = useState(false);

  useEffect(() => {
    dispatch(section2QThunk());
  }, []);

  useEffect(() => {
    if (continueHRA && questionData.length > 0) {
      dispatch(fetchSavedHRA({sectionId: 2}));
    } else if (questionData.length > 0) {
      setRenderData(true);
    }
  }, [continueHRA, questionData]);

  useEffect(() => {
    if (
      !saveHRALoading &&
      sectionData !== null &&
      sectionId === 2 &&
      questionData.length > 0 &&
      continueHRA
    ) {
      const {Q6, Q7, Q8, Q9, Q10, Q11, Q12, Q13, Q14} = sectionData;
      dispatch(
        dispatch_option({
          key: questionData[0].questionId,
          value: Q6.toString(),
        }),
      );
      dispatch(
        dispatch_option({
          key: questionData[1].questionId,
          value: Q7.toString(),
        }),
      );
      dispatch(
        dispatch_option({
          key: questionData[2].questionId,
          value: Q8.toString(),
        }),
      );
      dispatch(
        dispatch_option({
          key: questionData[3].questionId,
          value: Q9.toString(),
        }),
      );
      dispatch(
        dispatch_option({
          key: questionData[4].questionId,
          value: Q10.toString(),
        }),
      );
      dispatch(
        dispatch_option({
          key: questionData[5].questionId,
          value: Q11.toString(),
        }),
      );
      dispatch(
        dispatch_option({
          key: questionData[6].questionId,
          value: Q12.toString(),
        }),
      );
      dispatch(
        dispatch_option({
          key: questionData[7].questionId,
          value: Q13.toString(),
        }),
      );
      dispatch(
        dispatch_option({
          key: questionData[8].questionId,
          value: Q14.toString(),
        }),
      );
      setRenderData(true);
    } else if (!saveHRALoading && saveHRAError) {
      setRenderData(true);
    }
  }, [saveHRALoading, questionData]);

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
            Q6: parseInt(answers.Q6),
            Q7: parseInt(answers.Q7),
            Q8: parseInt(answers.Q8),
            Q9: parseInt(answers.Q9),
            Q10: parseInt(answers.Q10),
            Q11: parseInt(answers.Q11),
            Q12: parseInt(answers.Q12),
            Q13: parseInt(answers.Q13),
            Q14: parseInt(answers.Q14),
          },
          sectionId: 2,
        }),
      );
      navigation.navigate(SECTION_3);
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
