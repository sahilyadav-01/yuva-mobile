import { useEffect } from 'react'
import { Alert, Dimensions } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { useSelector, useDispatch } from 'react-redux';
import { section2QThunk, dispatch_option } from '../../../../store/reducers/Section2Slice';
import { ALERT, ALL_QUESTION_CHECK, LOGGEDIN, LOGIN_SCREEN, SECTION_3, WINDOW } from '../../constant';


export const useSection2 = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const answers = useSelector(state => state.section2.answers)
    const questionData = useSelector(state => state.section2.rawQuestions)
    const { user: { jwt }, loggedIn, } = useSelector(state => state.auth);
    const windowWidth = Dimensions.get(WINDOW).width;
    const progressWidth = windowWidth

    useEffect(() => {
        dispatch(section2QThunk({ jwt }))
    }, [])

    const next = () => {
        if (Object.keys(answers).map((x) => { return answers[x] }).includes('')) {
            Alert.alert(ALERT, ALL_QUESTION_CHECK)
        }
        else {
            navigation.navigate(SECTION_3)
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
        dispatch_option,
        questionData,
        next,
        answers,
    };
};