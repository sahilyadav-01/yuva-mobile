import { useEffect } from 'react'
import { Alert } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { useSelector, useDispatch } from 'react-redux';
import { section9QThunk, dispatch_option, finalSubmission } from '../../../../store/reducers/Section9Slice';
import { transforSubData } from '../../../../utils/utils'
import { ALERT, ALL_QUESTION_CHECK, LOGGEDIN, LOGIN_SCREEN, SECTION_10 } from '../../constant';
import { getDimensions } from '../../../../utils/utils';

export const useSection9 = () => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const answers = useSelector(state => state.section9.answers)
    const answers1 = useSelector(state => state.section1.answers)
    const answers2 = useSelector(state => state.section2.answers)
    const answers3 = useSelector(state => state.section3.answers)
    const answers4 = useSelector(state => state.section4.answers)
    const answers5 = useSelector(state => state.section5.answers)
    const answers6 = useSelector(state => state.section6.answers)
    const answers7 = useSelector(state => state.section7.answers)
    const answers8 = useSelector(state => state.section8.answers)
    const answers9 = useSelector(state => state.section9.answers)
    const version = useSelector(state => state.auth.user.version)
    const extra_questions_Q9A = useSelector(state => state.section7.extra_questions_Q9A);
    const extra_questions_Q10A = useSelector(state => state.section7.extra_questions_Q10A);
    const questionData = useSelector(state => state.section9.rawQuestions)
    const { user: { jwt }, loggedIn, } = useSelector(state => state.auth);
    const { width } = getDimensions();
    const progressWidth = width

    useEffect(() => {
        dispatch(section9QThunk({ jwt }))
    }, [])
    const computeResult = () => {
        if (Object.keys(answers).map((x) => { return answers[x] }).includes('')) {
            Alert.alert(ALERT, ALL_QUESTION_CHECK)
        }
        else {
            let data = transforSubData(answers1, answers2, answers3, answers4, answers5, answers6,
                answers7, answers8, answers9, version)
            let final_data = {
                answers: data,
                cancer: extra_questions_Q9A,
                illness: extra_questions_Q10A
            }
            dispatch(finalSubmission({ jwt, final_data })).then(() => { navigation.navigate(SECTION_10) })
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
        computeResult,
        answers,
    };
};