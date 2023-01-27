import { useState, useEffect } from 'react';
import { Alert, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { useSelector, useDispatch } from 'react-redux';
import { section7QThunk, dispatch_option, dispatch_option_extra_questions } from '../../../../store/reducers/Section7Slice';
import { ALERT, ALL_QUESTION_CHECK, DEFAULT_ALERT_MESSAGE, KEY_VALUE10A, KEY_VALUE9A, LOGGEDIN, LOGIN_SCREEN, ONE, SECTION_8, WINDOW, ZERO } from '../../constant';

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
    const answers = useSelector(state => state.section7.answers);
    const answers9A = useSelector(state => state.section7.extra_questions_Q9A);
    const answers10A = useSelector(state => state.section7.extra_questions_Q10A);
    const questionData = useSelector(state => state.section7.rawQuestions);
    const { user: { jwt }, loggedIn, } = useSelector(state => state.auth);
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

    const windowWidth = Dimensions.get(WINDOW).width;
    const progressWidth = windowWidth;

    useEffect(() => {
        dispatch(section7QThunk({ jwt }));
    }, []);

    const next = () => {

        if ((answers.Q41 === ZERO) && ((answers.Q50 === ZERO) || (answers.Q50 === ONE && answers10A))) {
            navigation.navigate(SECTION_8)
        }
        else if ((answers.Q41 === ONE) && (((answers.Q42 === ZERO) || (answers.Q42 === ONE && (((answers.Q43 === ZERO) || (answers.Q43 === ONE && ((answers.Q44) && (requiredFieldQ4 == false)))))))) && ((answers.Q45 === ZERO) || (answers.Q45 === ONE && (((answers.Q46 === ZERO) || (answers.Q46 === ONE && (((answers.Q47) && (requiredFieldQ7 == false)) && ((answers.Q48) && (requiredFieldQ8 == false)))))))) && ((answers.Q49 === ZERO) || (answers.Q49 === ONE && answers9A)) && ((answers.Q50 === ZERO) || (answers.Q50 === ONE && answers10A))) {
            navigation.navigate(SECTION_8)
        }
        else {
            Alert.alert(ALERT, ALL_QUESTION_CHECK);
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
    };
};