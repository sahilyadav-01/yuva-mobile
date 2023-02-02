import { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { useSelector, useDispatch } from 'react-redux';
import { section5QThunk } from '../../../../store/reducers/Section5Slice';
import { dispatch_option } from '../../../../store/reducers/Section5Slice';
import { getDimensions } from '../utils/utils';
import { AGE_ALERT, ALERT, ALL_QUESTION_CHECK, DEFAULT_ALERT_MESSAGE, LOGGEDIN, LOGIN_SCREEN, ONE, SECOND_QUESTION, SECTION_6, THIRD_QUESTION, WINDOW, ZERO } from '../../constant';

export const useSection5 = () => {
    const [smoke, setSmoke] = useState(false);
    const [requiredFieldQ2, setRequiredFieldQ2] = useState(false);
    const [requiredFieldQ3, setRequiredFieldQ3] = useState(false);
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const answers = useSelector(state => state.section5.answers);
    const section1Answers = useSelector(state => state.section1.answers);
    const questionData = useSelector(state => state.section5.rawQuestions);
    const { user: { jwt }, loggedIn, } = useSelector(state => state.auth);
    const setQuestion1 = value => {
        {
            value == 1 ? setSmoke(true) : setSmoke(false);
        }
        dispatch(dispatch_option({ key: questionData[0].questionId, value: value }));
    };
    const inputCheck = (id, value) => {
        const reg = /^\d+$/;
        switch (id) {
            case SECOND_QUESTION:
                const validQ2 = ((reg.test(value) === true) && (value >= 12) && (value <= section1Answers.Q2));
                setRequiredFieldQ2(!validQ2);
                if (validQ2) {
                    dispatch(dispatch_option({ key: questionData[1].questionId, value: value }));
                } else {
                    Alert.alert(ALERT, AGE_ALERT);

                };
                break;

            case THIRD_QUESTION:
                const validQ3 = ((reg.test(value) === true) && (value > 0));
                setRequiredFieldQ3(!validQ3);
                if (validQ3) {
                    dispatch(dispatch_option({ key: questionData[2].questionId, value: value }));
                } else {
                    Alert.alert(ALERT, DEFAULT_ALERT_MESSAGE);
                };
                break;

            default:
                Alert.alert(ALERT, DEFAULT_ALERT_MESSAGE);
        }

    };
    const setQuestion4 = value => {
        dispatch(dispatch_option({ key: questionData[3].questionId, value: value }));
    };

    const {width} = getDimensions();
    const progressWidth = width;

    useEffect(() => {
        dispatch(section5QThunk({ jwt }));
    }, []);

    const next = () => {
        if ((answers.Q35 == ZERO) && (answers.Q38 == ZERO || answers.Q38 == ONE)) {
            navigation.navigate(SECTION_6);
        }
        else if ((answers.Q35 == ONE) && ((answers.Q36) && (requiredFieldQ2 == false)) && ((answers.Q37) && (requiredFieldQ3 == false)) && (answers.Q38 == ZERO || answers.Q38 == ONE)) {
            navigation.navigate(SECTION_6);
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
    };
};