import {useState, useEffect} from 'react';
import {Alert} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {useSelector, useDispatch} from 'react-redux';
import {section1QThunk} from '../../../../store/reducers/Section1Slice';
import {dispatch_option} from '../../../../store/reducers/Section1Slice';
import {
  ALERT,
  ALL_QUESTION_CHECK,
  DEFAULT_ALERT_MESSAGE,
  FIRST_QUESTION,
  FOURTH_QUESTION,
  LOGGEDIN,
  LOGIN_SCREEN,
  SECOND_QUESTION,
  SECTION_1_PLACEHOLDER_Q1,
  SECTION_1_PLACEHOLDER_Q2,
  SECTION_1_PLACEHOLDER_Q3,
  SECTION_1_PLACEHOLDER_Q4,
  SECTION_2,
  THIRD_QUESTION,
} from '../../constant';
import {getDimensions} from '../../../../utils/utils';
import {fetchSavedHRA, saveHRAData} from '../../../../store/reducers/HRASlice';

export const useSection1 = userData => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [requiredFieldQ1, setRequiredFieldQ1] = useState(true);
  const [requiredFieldQ2, setRequiredFieldQ2] = useState(true);
  const [requiredFieldQ3, setRequiredFieldQ3] = useState(true);
  const [requiredFieldQ4, setRequiredFieldQ4] = useState(true);
  const totalCheck = [
    requiredFieldQ1,
    requiredFieldQ2,
    requiredFieldQ3,
    requiredFieldQ4,
  ];
  const answers = useSelector(state => state.section1.answers);
  const questionData = useSelector(state => state.section1.rawQuestions);
  const {loggedIn} = useSelector(state => state.auth);
  const {continueHRA, saveHRALoading, sectionData, sectionId, saveHRAError} = useSelector(state => state.hra);
  const [enableData, setEnableData] = useState(false);
  const [renderData, setRenderData] = useState(false);
  const data = ['Male','Female'];

  useEffect(() => {
    dispatch(section1QThunk());
  }, []);

  useEffect(()=>{
    if(!saveHRALoading && sectionData !== null && sectionId === 1 && questionData.length > 0){
      const {Q2,Q3,Q4,Q5,Q58} = sectionData;
      dispatch( dispatch_option({key: questionData[0].questionId, value: Q2.toString()}));
      dispatch( dispatch_option({key: questionData[1].questionId, value: Q3.toString()}));
      dispatch( dispatch_option({key: questionData[2].questionId, value: Q4.toString()}));
      dispatch( dispatch_option({key: questionData[3].questionId, value: Q5.toString()}));
      dispatch( dispatch_option({key: questionData[4].questionId, value: Q58.toString()}));
      setRenderData(true);
    }
    else if(!saveHRALoading && saveHRAError) setRenderData(true)
  },[saveHRALoading, questionData])

  useEffect(() => {
    if (continueHRA && questionData.length > 0) dispatch(fetchSavedHRA({sectionId: 1}));
    else if(questionData.length > 0) setRenderData(true);
  }, [continueHRA,questionData]);

  useEffect(() => {
    if (
      !continueHRA &&
      userData &&
      questionData[0]?.questionId &&
      questionData[4]?.questionId
    ) {
      dispatch(dispatch_option({key: questionData[0].questionId, value: userData.age}));
      dispatch(dispatch_option({key: questionData[4].questionId,value: userData.genderId}));
      setRenderData(true);
    }
  }, [questionData]);

  useEffect(() => {
    const {Q2, Q3, Q4, Q5, Q58} = answers;
    if (Q2 && Q3 && Q4 && Q5 && Q58) {
      setEnableData(true);
    }
  }, [answers]);

  const inputCheck = (id, value) => {
    const regAge = /^\d+$/;
    switch (id) {
      case FIRST_QUESTION:
        const validQ1 =
          regAge.test(value) === true && value >= 12 && value <= 100;
        setRequiredFieldQ1(validQ1);
        if (validQ1) {
          dispatch(
            dispatch_option({key: questionData[0].questionId, value: value}),
          );
        } else {
          Alert.alert(ALERT, SECTION_1_PLACEHOLDER_Q1);
        }
        break;

      case SECOND_QUESTION:
        const validQ2 = value >= 120 && value <= 219;
        setRequiredFieldQ2(validQ2);
        if (validQ2) {
          dispatch(
            dispatch_option({key: questionData[1].questionId, value: value}),
          );
        } else {
          Alert.alert(ALERT, SECTION_1_PLACEHOLDER_Q2);
        }
        break;

      case THIRD_QUESTION:
        const validQ3 = value >= 20 && value <= 200;
        setRequiredFieldQ3(validQ3);
        if (validQ3) {
          dispatch(
            dispatch_option({key: questionData[2].questionId, value: value}),
          );
        } else {
          Alert.alert(ALERT, SECTION_1_PLACEHOLDER_Q3);
        }
        break;

      case FOURTH_QUESTION:
        const validQ4 = value >= 20 && value <= 47;
        setRequiredFieldQ4(validQ4);
        if (validQ4) {
          dispatch(
            dispatch_option({key: questionData[3].questionId, value: value}),
          );
        } else {
          Alert.alert(ALERT, SECTION_1_PLACEHOLDER_Q4);
        }
        break;

      default:
        Alert.alert(ALERT, DEFAULT_ALERT_MESSAGE);
    }
  };
  const setQuestion5 = value => {
    dispatch(dispatch_option({key: questionData[4].questionId, value: value}));
  };
  const {width} = getDimensions();
  const progressWidth = width;
  const next = () => {
    if (
      Object.keys(answers)
        .map(x => {
          return answers[x];
        })
        .includes('')
    ) {
      Alert.alert(ALERT, ALL_QUESTION_CHECK);
    } else if (totalCheck.includes(false)) {
      Alert.alert(ALERT, ALL_QUESTION_CHECK);
    } else {
      enableData &&
        dispatch(
          saveHRAData({
            answers: {
              Q2: parseInt(answers.Q2),
              Q3: parseInt(answers.Q3),
              Q4: parseInt(answers.Q4),
              Q5: parseInt(answers.Q5),
              Q58: parseInt(answers.Q58),
            },
            sectionId: 1,
          }),
        );
      navigation.navigate(SECTION_2);
    }
  };
  const onPressRightIcon = () => {
    if (loggedIn !== LOGGEDIN) {
      navigation.navigate(LOGIN_SCREEN);
    } else {
      //The logic for opening the drawer should be added here
    }
  };

  return {
    loggedIn,
    onPressRightIcon,
    progressWidth,
    requiredFieldQ1,
    questionData,
    inputCheck,
    requiredFieldQ2,
    requiredFieldQ3,
    requiredFieldQ4,
    answers,
    setQuestion5,
    next,
    data,
    renderData
  };
};
