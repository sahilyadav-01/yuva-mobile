import { useEffect, useState } from 'react'
import { Alert } from 'react-native'
import { useIsFocused, useNavigation } from '@react-navigation/core'
import { useSelector, useDispatch } from 'react-redux';
import { section9QThunk, dispatch_option, finalSubmission, reset_complete } from '../../../../store/reducers/Section9Slice';
import { transforSubData } from '../../../../utils/utils'
import { ALERT, ALL_QUESTION_CHECK, SECTION_10 } from '../../constant';
import { getDimensions } from '../../../../utils/utils';
import { fetchSavedHRA } from '../../../../store/reducers/HRASlice';

export const useSection9 = () => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const focused = useIsFocused();
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
    const hraComplete = useSelector(state => state.section9.hraComplete)
    const version = useSelector(state => state.auth.user.version)
    const extra_questions_Q9A = useSelector(state => state.section7.extra_questions_Q9A);
    const extra_questions_Q10A = useSelector(state => state.section7.extra_questions_Q10A);
    const questionData = useSelector(state => state.section9.rawQuestions)
    const {continueHRA, saveHRALoading, sectionData, sectionId, saveHRAError, currentHRAId} = useSelector(state => state.hra);
    const { width } = getDimensions();
    const progressWidth = width
    const [renderData, setRenderData] = useState(false);

    useEffect(() => {
        dispatch(section9QThunk())
    }, [])

    useEffect(()=>{
        if(hraComplete) navigation.navigate(SECTION_10);
    },[hraComplete])

    useEffect(()=>{
        if(!navigation.isFocused()) dispatch(reset_complete())
    },[focused])

    useEffect(() => {
        if (continueHRA && questionData.length > 0) dispatch(fetchSavedHRA({sectionId: 9}));
        else if(questionData.length > 0) setRenderData(true);
      }, [continueHRA,questionData]);

      useEffect(()=>{
        if(!saveHRALoading && sectionData !== null && sectionId === 9 && questionData.length>0 && continueHRA){
            typeof sectionData.Q57 === 'number' && dispatch( dispatch_option({key: questionData[0].questionId, value: sectionData.Q57.toString()}));
          setRenderData(true);
          }
        else if(!saveHRALoading && saveHRAError) setRenderData(true)
      },[saveHRALoading,questionData,sectionData])

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
                illness: extra_questions_Q10A,
                relationId: parseFloat(currentHRAId)
            }
            dispatch(finalSubmission({final_data }))
        }
    }

    return {
        progressWidth,
        dispatch_option,
        questionData,
        computeResult,
        answers,
        renderData
    };
};