import {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {useSelector, useDispatch} from 'react-redux';
import {section3QThunk} from '../../../../store/reducers/Section3Slice';
import {getDimensions} from '../../../../utils/utils';
import {ALERT, ALL_QUESTION_CHECK, SECTION_4} from '../../constant';
import {fetchSavedHRA, saveHRAData} from '../../../../store/reducers/HRASlice';
import {dispatch_option} from '../../../../store/reducers/Section3Slice';

export const useSection3 = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const answers = useSelector(state => state.section3.answers);
  const questionData = useSelector(state => state.section3.rawQuestions);
  const {continueHRA, saveHRALoading, sectionData, sectionId, saveHRAError} =
    useSelector(state => state.hra);
  const {width} = getDimensions();
  const progressWidth = width;
  const [renderData, setRenderData] = useState(false);

  useEffect(() => {
    dispatch(section3QThunk());
  }, []);

  useEffect(() => {
    if (continueHRA && questionData.length > 0) {
      dispatch(fetchSavedHRA({sectionId: 3}));
    } else if (questionData.length > 0) {
      setRenderData(true);
    }
  }, [continueHRA, questionData]);

  useEffect(() => {
    if (
      !saveHRALoading &&
      sectionData !== null &&
      sectionId === 3 &&
      questionData.length > 0 &&
      continueHRA
    ) {
      const {
        Q15_PHQ,
        Q16_PHQ,
        Q17_PHQ,
        Q18_PHQ,
        Q19_PHQ,
        Q20_PHQ,
        Q21_PHQ,
        Q22_PHQ,
        Q23_PHQ,
        Q24_GAD,
        Q25_GAD,
        Q26_GAD,
        Q27_GAD,
        Q28_GAD,
        Q29_GAD,
        Q30_GAD,
      } = sectionData;
      dispatch(
        dispatch_option({
          key: questionData[0].questionId,
          value: Q15_PHQ.toString(),
        }),
      );
      dispatch(
        dispatch_option({
          key: questionData[1].questionId,
          value: Q16_PHQ.toString(),
        }),
      );
      dispatch(
        dispatch_option({
          key: questionData[2].questionId,
          value: Q17_PHQ.toString(),
        }),
      );
      dispatch(
        dispatch_option({
          key: questionData[3].questionId,
          value: Q18_PHQ.toString(),
        }),
      );
      dispatch(
        dispatch_option({
          key: questionData[4].questionId,
          value: Q19_PHQ.toString(),
        }),
      );
      dispatch(
        dispatch_option({
          key: questionData[5].questionId,
          value: Q20_PHQ.toString(),
        }),
      );
      dispatch(
        dispatch_option({
          key: questionData[6].questionId,
          value: Q21_PHQ.toString(),
        }),
      );
      dispatch(
        dispatch_option({
          key: questionData[7].questionId,
          value: Q22_PHQ.toString(),
        }),
      );
      dispatch(
        dispatch_option({
          key: questionData[8].questionId,
          value: Q23_PHQ.toString(),
        }),
      );
      dispatch(
        dispatch_option({
          key: questionData[9].questionId,
          value: Q24_GAD.toString(),
        }),
      );
      dispatch(
        dispatch_option({
          key: questionData[10].questionId,
          value: Q25_GAD.toString(),
        }),
      );
      dispatch(
        dispatch_option({
          key: questionData[11].questionId,
          value: Q26_GAD.toString(),
        }),
      );
      dispatch(
        dispatch_option({
          key: questionData[12].questionId,
          value: Q27_GAD.toString(),
        }),
      );
      dispatch(
        dispatch_option({
          key: questionData[13].questionId,
          value: Q28_GAD.toString(),
        }),
      );
      dispatch(
        dispatch_option({
          key: questionData[14].questionId,
          value: Q29_GAD.toString(),
        }),
      );
      dispatch(
        dispatch_option({
          key: questionData[15].questionId,
          value: Q30_GAD.toString(),
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
            Q15_PHQ: parseInt(answers.Q15_PHQ),
            Q16_PHQ: parseInt(answers.Q16_PHQ),
            Q17_PHQ: parseInt(answers.Q17_PHQ),
            Q18_PHQ: parseInt(answers.Q18_PHQ),
            Q19_PHQ: parseInt(answers.Q19_PHQ),
            Q20_PHQ: parseInt(answers.Q20_PHQ),
            Q21_PHQ: parseInt(answers.Q21_PHQ),
            Q22_PHQ: parseInt(answers.Q22_PHQ),
            Q23_PHQ: parseInt(answers.Q23_PHQ),
            Q24_GAD: parseInt(answers.Q24_GAD),
            Q25_GAD: parseInt(answers.Q25_GAD),
            Q26_GAD: parseInt(answers.Q26_GAD),
            Q27_GAD: parseInt(answers.Q27_GAD),
            Q28_GAD: parseInt(answers.Q28_GAD),
            Q29_GAD: parseInt(answers.Q29_GAD),
            Q30_GAD: parseInt(answers.Q30_GAD),
          },
          sectionId: 3,
        }),
      );
      navigation.navigate(SECTION_4);
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
