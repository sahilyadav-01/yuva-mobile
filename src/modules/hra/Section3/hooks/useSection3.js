import { useEffect } from 'react'
import { Alert } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { useSelector, useDispatch } from 'react-redux';
import { section3QThunk } from '../../../../store/reducers/Section3Slice';
import { getDimensions } from '../../../../utils/utils';
import { ALERT, ALL_QUESTION_CHECK, LOGGEDIN, LOGIN_SCREEN, SECTION_4 } from '../../constant';

export const useSection3 = () => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const answers = useSelector(state => state.section3.answers)
    const questionData = useSelector(state => state.section3.rawQuestions)
    const { user: { jwt }, loggedIn, } = useSelector(state => state.auth)
    const { width } = getDimensions();
    const progressWidth = width

    useEffect(() => {
        dispatch(section3QThunk({ jwt }))
    }, [])

    const next = () => {
        if (Object.keys(answers).map((x) => { return answers[x] }).includes('')) {
            Alert.alert(ALERT, ALL_QUESTION_CHECK)
        }
        else {
            navigation.navigate(SECTION_4)
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