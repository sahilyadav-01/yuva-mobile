import { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { useSelector, useDispatch } from 'react-redux';
import { dispatch_condition_1, section5QThunk } from '../../../../store/reducers/Section5Slice';
import { dispatch_option } from '../../../../store/reducers/Section5Slice';
import { getDimensions } from '../../../../utils/utils';
import { AGE_ALERT, ALERT, ALL_QUESTION_CHECK, DEFAULT_ALERT_MESSAGE, ONE, SECOND_QUESTION, SECTION_6, THIRD_QUESTION, WORNG_AGE_ALERT, ZERO } from '../../constant';
import { fetchSavedHRA, saveHRAData } from '../../../../store/reducers/HRASlice';

export const useSection5 = () => {
    const [requiredFieldQ2, setRequiredFieldQ2] = useState(false);
    const [requiredFieldQ3, setRequiredFieldQ3] = useState(false);
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const {smoke} = useSelector(state => state.section5);
    const answers = useSelector(state => state.section5.answers);
    const section1Answers = useSelector(state => state.section1.answers);
    const questionData = useSelector(state => state.section5.rawQuestions);
    const {continueHRA, saveHRALoading, sectionData, sectionId, saveHRAError} = useSelector(state => state.hra);
    const { width } = getDimensions();
    const progressWidth = width;
    const [renderData, setRenderData] = useState(false);
    const [q2Placeholder, setQ2Placeholder] = useState('');
    const [q3Placeholder, setQ3Placeholder] = useState('');
    useEffect(() => {
        dispatch(section5QThunk());
    }, []);
    
    useEffect(() => {
        if (continueHRA && questionData.length > 0) dispatch(fetchSavedHRA({sectionId: 5}));
        else if(questionData.length > 0) setRenderData(true);
      }, [continueHRA,questionData]);

      useEffect(()=>{
        if(!saveHRALoading && sectionData !== null && sectionId === 5 && questionData.length>0 && continueHRA){
          dispatch( dispatch_option({key: questionData[0].questionId, value: sectionData.Q35.toString()}));
          if(typeof sectionData?.Q36 === 'number' && typeof sectionData?.Q37 === 'number'){
          dispatch( dispatch_option({key: questionData[1].questionId, value: sectionData.Q36.toString()}));
          dispatch( dispatch_option({key: questionData[2].questionId, value: sectionData.Q37.toString()}));
          dispatch(dispatch_condition_1(true));
          }
          dispatch( dispatch_option({key: questionData[3].questionId, value: sectionData.Q38.toString()}));
          setRenderData(true);
        }
        else if(!saveHRALoading && saveHRAError) setRenderData(true)
      },[saveHRALoading,questionData,sectionData])

    const setQuestion1 = value => {
        {
            value == 1 ? dispatch(dispatch_condition_1(true)) : dispatch(dispatch_condition_1(false));
        }
        dispatch(dispatch_option({ key: questionData[0].questionId, value: value }));
    };
    const inputCheck = (id, value) => {
        const reg = /^\d+$/;
        switch (id) {
            case SECOND_QUESTION:
                const validQ2 = ((reg.test(value) === true) && (value <= section1Answers.Q2));
                const ageLimit = (value >= 12)
                setRequiredFieldQ2(!validQ2);
                if (!validQ2) {
                    Alert.alert(ALERT, WORNG_AGE_ALERT);
                } 
                else if(!ageLimit) {
                    Alert.alert(ALERT,AGE_ALERT)
                }
                break;

            case THIRD_QUESTION:
                const validQ3 = ((reg.test(value) === true) && (value > 0));
                setRequiredFieldQ3(!validQ3);
                if (!validQ3) {
                    Alert.alert(ALERT, DEFAULT_ALERT_MESSAGE);
                } 
                break;
            default:
                Alert.alert(ALERT, DEFAULT_ALERT_MESSAGE);
        }

    };
    const onChangeText = (id, value) => {
        const reg = /^\d+$/;
        switch (id) {
            case SECOND_QUESTION:
                dispatch(dispatch_option({ key: questionData[1].questionId, value: value }));
                break;

            case THIRD_QUESTION:
                dispatch(dispatch_option({ key: questionData[2].questionId, value: value }));
                break;
        }

    };
    const setQuestion4 = value => {
        dispatch(dispatch_option({ key: questionData[3].questionId, value: value }));
    };


    const next = () => {
        if ((answers.Q35 == ZERO) && (answers.Q38 == ZERO || answers.Q38 == ONE)) {
            dispatch(
                saveHRAData({
                  answers: {
                    Q35: parseInt(answers.Q35),
                    Q38: parseInt(answers.Q38),
                  },
                  sectionId: 5,
                }),
              );
            navigation.navigate(SECTION_6);
        }
        else if ((answers.Q35 == ONE) && ((answers.Q36) && (requiredFieldQ2 == false)) && ((answers.Q37) && (requiredFieldQ3 == false)) && (answers.Q38 == ZERO || answers.Q38 == ONE)) {
            dispatch(
                saveHRAData({
                  answers: {
                    Q35: parseInt(answers.Q35),
                    Q36: parseInt(answers.Q36),
                    Q37: parseInt(answers.Q37),
                    Q38: parseInt(answers.Q38),
                  },
                  sectionId: 5,
                }),
              );
            navigation.navigate(SECTION_6);
        }
        else {
            Alert.alert(ALERT, ALL_QUESTION_CHECK);
        }
    };

    const onBlur = (q) => {
        if(q === 'Q2') setQ2Placeholder('');
        if(q === 'Q3') setQ3Placeholder('');
    }

    return {
        inputCheck,
        progressWidth,
        questionData,
        requiredFieldQ2,
        requiredFieldQ3,
        setQuestion1,
        setQuestion4,
        answers,
        smoke,
        next,
        renderData,
        onBlur,
        q2Placeholder,
        q3Placeholder,
        onChangeText
    };
};