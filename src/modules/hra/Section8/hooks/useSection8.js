import { useEffect } from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { useSelector, useDispatch } from 'react-redux';
import { getDimensions } from '../../../../utils/utils';
import { section8QThunk, dispatch_option } from '../../../../store/reducers/Section8Slice';
import { ALERT, ALL_QUESTION_CHECK, LOGGEDIN, LOGIN_SCREEN, SECTION_9 } from '../../constant';

export const useSection8 = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const answers = useSelector(state => state.section8.answers);
    const questionData = useSelector(state => state.section8.rawQuestions);
    const { user: { jwt }, loggedIn, } = useSelector(state => state.auth);
    const { width } = getDimensions();
    const progressWidth = width;

    useEffect(() => {
        dispatch(section8QThunk({ jwt }));
    }, []);

    const next = () => {
        if (Object.keys(answers).map((x) => { return answers[x] }).includes('')) {
            Alert.alert(ALERT, ALL_QUESTION_CHECK)
        }
        else {
            navigation.navigate(SECTION_9)
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
        dispatch_option,
        questionData,
        next,
        answers,
    };
};