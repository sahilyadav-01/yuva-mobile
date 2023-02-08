import { useState, useEffect } from 'react'
import { Alert } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { useSelector, useDispatch } from 'react-redux';
import { section1QThunk } from '../../../../store/reducers/Section1Slice';
import { dispatch_option } from '../../../../store/reducers/Section1Slice';
import { ALERT, ALL_QUESTION_CHECK, DEFAULT_ALERT_MESSAGE, FIRST_QUESTION, FOURTH_QUESTION, LOGGEDIN, LOGIN_SCREEN, SECOND_QUESTION, SECTION_1_PLACEHOLDER_Q1, SECTION_1_PLACEHOLDER_Q2, SECTION_1_PLACEHOLDER_Q3, SECTION_1_PLACEHOLDER_Q4, SECTION_2, THIRD_QUESTION } from '../../constant';
import { getDimensions } from '../../../../utils/utils';


export const useSection1 = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [requiredFieldQ1, setRequiredFieldQ1] = useState(true);
    const [requiredFieldQ2, setRequiredFieldQ2] = useState(true);
    const [requiredFieldQ3, setRequiredFieldQ3] = useState(true);
    const [requiredFieldQ4, setRequiredFieldQ4] = useState(true);
    const totalCheck = [requiredFieldQ1, requiredFieldQ2, requiredFieldQ3, requiredFieldQ4];
    useEffect(() => {
        dispatch(section1QThunk());
    }, [])
    const answers = useSelector(state => state.section1.answers)
    const questionData = useSelector(state => state.section1.rawQuestions)
    const { loggedIn, } = useSelector(state => state.auth);
    const inputCheck = (id, value) => {
        const regAge = /^\d+$/;
        switch (id) {
            case FIRST_QUESTION:
                const validQ1 = (regAge.test(value) === true) && ((value >= 12) && (value <= 100));
                setRequiredFieldQ1(validQ1);
                if (validQ1) {
                    dispatch(dispatch_option({ key: questionData[0].questionId, value: value }));
                } else {
                    Alert.alert(ALERT, SECTION_1_PLACEHOLDER_Q1);
                };
                break;

            case SECOND_QUESTION:
                const validQ2 = ((value >= 120) && (value <= 219));
                setRequiredFieldQ2(validQ2);
                if (validQ2) {
                    dispatch(dispatch_option({ key: questionData[1].questionId, value: value }));
                } else {
                    Alert.alert(ALERT, SECTION_1_PLACEHOLDER_Q2);
                };
                break;

            case THIRD_QUESTION:
                const validQ3 = ((value >= 20) && (value <= 200));
                setRequiredFieldQ3(validQ3);
                if (validQ3) {
                    dispatch(dispatch_option({ key: questionData[2].questionId, value: value }));
                } else {
                    Alert.alert(ALERT, SECTION_1_PLACEHOLDER_Q3);
                };
                break;

            case FOURTH_QUESTION:
                const validQ4 = ((value >= 20) && (value <= 47));
                setRequiredFieldQ4(validQ4);
                if (validQ4) {
                    dispatch(dispatch_option({ key: questionData[3].questionId, value: value }));
                } else {
                    Alert.alert(ALERT, SECTION_1_PLACEHOLDER_Q4);
                };
                break;

            default:
                Alert.alert(ALERT, DEFAULT_ALERT_MESSAGE);
        }
    };
    const setQuestion5 = value => {
        dispatch(dispatch_option({ key: questionData[4].questionId, value: value }));
    };
    const {width} = getDimensions();
    const progressWidth = width;
    const next = () => {

        if (Object.keys(answers).map((x) => { return answers[x] }).includes('')) {
            Alert.alert(ALERT, ALL_QUESTION_CHECK)
        }
        else if (totalCheck.includes(false)) {
            Alert.alert(ALERT, ALL_QUESTION_CHECK);
        }
        else {
            navigation.navigate(SECTION_2);
        }
    }
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
    };
};