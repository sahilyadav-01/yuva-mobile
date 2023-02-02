import { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { useSelector, useDispatch } from 'react-redux';
import { section4QThunk } from '../../../../store/reducers/Section4Slice';
import { dispatch_option } from '../../../../store/reducers/Section4Slice';
import { getDimensions } from '../../../../utils/utils';
import { ALERT, ALL_QUESTION_CHECK, LOGGEDIN, LOGIN_SCREEN, SECTION_5, ZERO } from '../../constant';

export const useSection4 = () => {

    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [alcohol, setAlochol] = useState(false);
    const answers = useSelector(state => state.section4.answers);
    const questionData = useSelector(state => state.section4.rawQuestions);
    const { user: { jwt }, loggedIn, } = useSelector(state => state.auth);
    const setQuestion1 = value => {
        {
            value == 1 ? setAlochol(true) : setAlochol(false);
        }
        dispatch(dispatch_option({ key: questionData[0].questionId, value: value }));
    };
    const setQuestion2 = value => {
        dispatch(dispatch_option({ key: questionData[1].questionId, value: value }));
    };

    const setQuestion3 = value => {
        dispatch(dispatch_option({ key: questionData[2].questionId, value: value }));
    };
    const setQuestion4 = value => {
        dispatch(dispatch_option({ key: questionData[3].questionId, value: value }));
    };
    const { width } = getDimensions();
    const progressWidth = width;
    useEffect(() => {
        dispatch(section4QThunk({ jwt }));
    }, []);
    const next = () => {

        if (answers.Q31 == ZERO) {
            navigation.navigate(SECTION_5)
        }
        else {
            if (Object.keys(answers).map((x) => { return answers[x] }).includes('')) {
                Alert.alert(ALERT, ALL_QUESTION_CHECK)
            }
            else {
                navigation.navigate(SECTION_5)
            }
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
        setQuestion1,
        setQuestion2,
        setQuestion3,
        setQuestion4,
        answers,
        alcohol,
        next,
    };
};