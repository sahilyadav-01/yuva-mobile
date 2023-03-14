import { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { useSelector, useDispatch } from 'react-redux';
import { getDimensions } from '../../../../utils/utils';
import { section7QThunk, dispatch_option, dispatch_option_extra_questions } from '../../../../store/reducers/Section7Slice';
import { ALERT, ALL_QUESTION_CHECK, DEFAULT_ALERT_MESSAGE, KEY_VALUE10A, KEY_VALUE9A, ONE, SECTION_8, ZERO } from '../../constant';
import { fetchSavedHRA, saveHRAData } from '../../../../store/reducers/HRASlice';

export const useSection7 = () => {
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
    const [renderData, setRenderData] = useState(false);
    const answers = useSelector(state => state.section7.answers);
    const answers9A = useSelector(state => state.section7.extra_questions_Q9A);
    const answers10A = useSelector(state => state.section7.extra_questions_Q10A);
    const questionData = useSelector(state => state.section7.rawQuestions);
    const {continueHRA, saveHRALoading, sectionData, sectionId, saveHRAError} = useSelector(state => state.hra);
    const { width } = getDimensions();
    const progressWidth = width;

    useEffect(() => {
        dispatch(section7QThunk());
    }, []);

    useEffect(() => {
        if (continueHRA && questionData.length > 0) dispatch(fetchSavedHRA({sectionId: 7}));
        else if(questionData.length > 0) setRenderData(true);
      }, [continueHRA,questionData]);

      useEffect(()=>{
        if(!saveHRALoading && sectionData !== null && sectionId === 7 && questionData.length>0 && continueHRA){
          dispatch( dispatch_option({key: questionData[0].questionId, value: sectionData.Q41.toString()}));
          typeof sectionData.Q42 === 'number' && dispatch( dispatch_option({key: questionData[1].questionId, value: sectionData.Q42.toString()}));
          typeof sectionData.Q43 === 'number' && dispatch( dispatch_option({key: questionData[2].questionId, value: sectionData.Q43.toString()}));
          sectionData.Q44  && dispatch( dispatch_option({key: questionData[3].questionId, value: sectionData.Q44.toString()}));
          typeof sectionData.Q45 === 'number' && dispatch( dispatch_option({key: questionData[4].questionId, value: sectionData.Q45.toString()}));
          typeof sectionData.Q46 === 'number' && dispatch( dispatch_option({key: questionData[5].questionId, value: sectionData.Q46.toString()}));
          sectionData.Q47 && dispatch( dispatch_option({key: questionData[6].questionId, value: sectionData.Q47.toString()}));
          sectionData.Q48 && dispatch( dispatch_option({key: questionData[7].questionId, value: sectionData.Q48.toString()}));
          typeof sectionData.Q49 === 'number' && dispatch( dispatch_option({key: questionData[8].questionId, value: sectionData.Q49.toString()}));
          typeof sectionData.Q50 === 'number' && dispatch( dispatch_option({key: questionData[9].questionId, value: sectionData.Q50.toString()}));
          setRenderData(true);
          }
        else if(!saveHRALoading && saveHRAError && questionData.length > 0) setRenderData(true)
      },[saveHRALoading,questionData,sectionData])

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
                    Alert.alert(ALERT, DEFAULT_ALERT_MESSAGE);
                };
                break;

            case 'Q7':
                const validQ7 = ((value > 0) && (reg.test(value) === true));
                setRequiredFieldQ7(!validQ7);
                if (validQ7) {
                    dispatch(dispatch_option({ key: questionData[6].questionId, value: value }));
                } else {
                    Alert.alert(ALERT, DEFAULT_ALERT_MESSAGE);
                };
                break;

            case 'Q8':
                const validQ8 = ((reg.test(value) === true) && (value > 0));
                setRequiredFieldQ8(!validQ8);
                if (validQ8) {
                    dispatch(dispatch_option({ key: questionData[7].questionId, value: value }));
                } else {
                    Alert.alert(ALERT, DEFAULT_ALERT_MESSAGE);
                };
                break;

            default:
                Alert.alert(ALERT, DEFAULT_ALERT_MESSAGE);
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
        dispatch(dispatch_option_extra_questions({ key: KEY_VALUE9A, value: value }));

    }
    const setQuestion10 = value => {
        {
            value == 1 ? setMedicalConditionChronicIllness(true) : setMedicalConditionChronicIllness(false);
        }
        dispatch(dispatch_option({ key: questionData[9].questionId, value: value }));
    };
    const setQuestion10A = value => {
        dispatch(dispatch_option_extra_questions({ key: KEY_VALUE10A, value: value }));

    }

    const next = () => {

        if ((answers.Q41 === ZERO) && ((answers.Q50 === ZERO) || (answers.Q50 === ONE && answers10A))) {
            dispatch(
                saveHRAData({
                  answers: {
                    Q41: parseInt(answers.Q41),
                    Q50: parseInt(answers.Q50),
                  },
                  sectionId: 7,
                }),
              );
            navigation.navigate(SECTION_8)
        }
        else if ((answers.Q41 === ONE) && (((answers.Q42 === ZERO) || (answers.Q42 === ONE && (((answers.Q43 === ZERO) || (answers.Q43 === ONE && ((answers.Q44) && (requiredFieldQ4 == false)))))))) && ((answers.Q45 === ZERO) || (answers.Q45 === ONE && (((answers.Q46 === ZERO) || (answers.Q46 === ONE && (((answers.Q47) && (requiredFieldQ7 == false)) && ((answers.Q48) && (requiredFieldQ8 == false)))))))) && ((answers.Q49 === ZERO) || (answers.Q49 === ONE && answers9A)) && ((answers.Q50 === ZERO) || (answers.Q50 === ONE && answers10A))) {
            let obj = {Q41: parseInt(answers.Q41)};
            obj = parseInt(answers.Q42)?{...obj,Q42: parseInt(answers.Q42)}:obj
            obj = parseInt(answers.Q43)?{...obj,Q43: parseInt(answers.Q43)}:obj
            obj = parseInt(answers.Q44)?{...obj,Q44: parseInt(answers.Q44)}:obj
            obj = parseInt(answers.Q45)?{...obj,Q45: parseInt(answers.Q45)}:obj
            obj = parseInt(answers.Q46)?{...obj,Q46: parseInt(answers.Q46)}:obj
            obj = parseInt(answers.Q47)?{...obj,Q47: parseInt(answers.Q47)}:obj
            obj = parseInt(answers.Q48)?{...obj,Q48: parseInt(answers.Q48)}:obj
            obj = parseInt(answers.Q49)?{...obj,Q49: parseInt(answers.Q49)}:obj
            obj = parseInt(answers.Q50)?{...obj,Q50: parseInt(answers.Q50)}:obj
            dispatch(
                saveHRAData({
                  answers: obj,
                  sectionId: 7,
                }),
              );
            navigation.navigate(SECTION_8)
        }
        else {
            Alert.alert(ALERT, ALL_QUESTION_CHECK);
        }
    };

    return {
        progressWidth,
        questionData,
        answers,
        medicalConditionDoYouSufferFromAnyIllness,
        medicalConditionDiabetes,
        medicalCondition,
        medicalConditionHypertension,
        medicalCondition1,
        medicalConditionAnyCancer,
        medicalConditionChronicIllness,
        setQuestion1,
        setQuestion2,
        setQuestion3,
        requiredFieldQ4,
        setQuestion5,
        setQuestion6,
        requiredFieldQ7,
        requiredFieldQ8,
        setQuestion9,
        setQuestion10,
        setQuestion9A,
        setQuestion10A,
        inputCheck,
        next,
        renderData
    };
};