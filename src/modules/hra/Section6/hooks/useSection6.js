import { useEffect } from 'react'
import { Alert, Dimensions } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { useSelector, useDispatch } from 'react-redux';
import { getDimensions } from '../utils/utils';
import { section6QThunk } from '../../../../store/reducers/Section6Slice';
import { ALERT, ALL_QUESTION_CHECK, LOGGEDIN, LOGIN_SCREEN, SECTION_7, WINDOW } from '../../constant';

export const useSection6 = () => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const answers = useSelector(state => state.section6.answers)
    const questionData = useSelector(state => state.section6.rawQuestions)
    const { user: { jwt }, loggedIn, } = useSelector(state => state.auth);
    const {width} = getDimensions();
    const progressWidth = width

    useEffect(() => {
        dispatch(section6QThunk({ jwt }))
    }, [])

    const next = () => {
        if (Object.keys(answers).map((x) => { return answers[x] }).includes('')) {
            Alert.alert(ALERT, ALL_QUESTION_CHECK)
        }
        else {
            navigation.navigate(SECTION_7)
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
        questionData,
        answers,
        next,
    };
};