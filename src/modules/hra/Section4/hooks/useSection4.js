import { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { useSelector, useDispatch } from 'react-redux';
import { section4QThunk } from '../../../../store/reducers/Section4Slice';
import { dispatch_option } from '../../../../store/reducers/Section4Slice';
import { getDimensions } from '../../../../utils/utils';
import { ALERT, ALL_QUESTION_CHECK, SECTION_5, ZERO } from '../../constant';
import { fetchSavedHRA, saveHRAData } from '../../../../store/reducers/HRASlice';

export const useSection4 = () => {

    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [alcohol, setAlochol] = useState(false);
    const [renderData, setRenderData] = useState(false);
    const answers = useSelector(state => state.section4.answers);
    const questionData = useSelector(state => state.section4.rawQuestions);
    const {continueHRA, saveHRALoading, sectionData, sectionId, saveHRAError} = useSelector(state => state.hra);
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
        dispatch(section4QThunk());
    }, []);
    
    useEffect(() => {
        if (continueHRA && questionData.length > 0) dispatch(fetchSavedHRA({sectionId: 4}));
        else if(questionData.length > 0) setRenderData(true);
      }, [continueHRA,questionData]);

      useEffect(()=>{
        if(!saveHRALoading && sectionData !== null && sectionId === 4 && questionData.length>0 && continueHRA){
          dispatch( dispatch_option({key: questionData[0].questionId, value: sectionData.Q31.toString()}));
          if(typeof sectionData?.Q32 === 'number' && typeof sectionData?.Q33 === 'number' && typeof sectionData?.Q34 === 'number'){
          dispatch( dispatch_option({key: questionData[1].questionId, value: sectionData.Q32.toString()}));
          dispatch( dispatch_option({key: questionData[2].questionId, value: sectionData.Q33.toString()}));
          dispatch( dispatch_option({key: questionData[3].questionId, value: sectionData.Q34.toString()}));
          setAlochol(true);
          }
          setRenderData(true);
        }
        else if(!saveHRALoading && saveHRAError) setRenderData(true)
      },[saveHRALoading,questionData,sectionData])

    const next = () => {

        if (answers.Q31 == ZERO) {
            dispatch(
                saveHRAData({
                  answers: {
                    Q31: parseInt(answers.Q31)
                  },
                  sectionId: 4,
                }),
              );
            navigation.navigate(SECTION_5)
        }
        else {
            if (Object.keys(answers).map((x) => { return answers[x] }).includes('')) {
                Alert.alert(ALERT, ALL_QUESTION_CHECK)
            }
            else {
                dispatch(
                    saveHRAData({
                      answers: {
                        Q31: parseInt(answers.Q31),
                        Q32: parseInt(answers.Q32),
                        Q33: parseInt(answers.Q33),
                        Q34: parseInt(answers.Q34),
                      },
                      sectionId: 4,
                    }),
                  );
                navigation.navigate(SECTION_5)
            }
        }
    };

    return {
        progressWidth,
        questionData,
        setQuestion1,
        setQuestion2,
        setQuestion3,
        setQuestion4,
        answers,
        alcohol,
        next,
        renderData
    };
};