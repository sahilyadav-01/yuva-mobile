import { useState, useEffect } from 'react'
import { Alert } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { Dimensions } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { section1QThunk } from '../../../../store/reducers/Section1Slice';
import { dispatch_option } from '../../../../store/reducers/Section1Slice';


export const useSection1 = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [requiredFieldQ1, setRequiredFieldQ1] = useState(true);
    const [requiredFieldQ2, setRequiredFieldQ2] = useState(true);
    const [requiredFieldQ3, setRequiredFieldQ3] = useState(true);
    const [requiredFieldQ4, setRequiredFieldQ4] = useState(true);
    const totalCheck = [requiredFieldQ1, requiredFieldQ2, requiredFieldQ3, requiredFieldQ4];
    useEffect(() => {
        dispatch(section1QThunk({ jwt }));
    }, [])
    const answers = useSelector(state => state.section1.answers)
    const questionData = useSelector(state => state.section1.rawQuestions)
    const { user: { jwt }, loggedIn, } = useSelector(state => state.auth);
    const inputCheck = (id, value) => {
        const regAge = /^\d+$/;
        switch (id) {
            case 'Q1':
                const validQ1 = (regAge.test(value) === true) && ((value >= 12) && (value <= 100));
                setRequiredFieldQ1(validQ1);
                if (validQ1) {
                    dispatch(dispatch_option({ key: questionData[0].questionId, value: value }));
                } else {
                    Alert.alert("Alert", "Age should be in range of 12 to 100 years");
                };
                break;

            case 'Q2':
                const validQ2 = ((value >= 120) && (value <= 219));
                setRequiredFieldQ2(validQ2);
                if (validQ2) {
                    dispatch(dispatch_option({ key: questionData[1].questionId, value: value }));
                } else {
                    Alert.alert("Alert", "Height should be range of 120 to 219 cm");
                };
                break;

            case 'Q3':
                const validQ3 = ((value >= 20) && (value <= 200));
                setRequiredFieldQ3(validQ3);
                if (validQ3) {
                    dispatch(dispatch_option({ key: questionData[2].questionId, value: value }));
                } else {
                    Alert.alert("Alert", "Weight should be range of 20 to 200 kg");
                };
                break;

            case 'Q4':
                const validQ4 = ((value >= 20) && (value <= 47));
                setRequiredFieldQ4(validQ4);
                if (validQ4) {
                    dispatch(dispatch_option({ key: questionData[3].questionId, value: value }));
                } else {
                    Alert.alert("Alert", "Waist size should be range of 20 to 47 inches");
                };
                break;

            default:
                Alert.alert("Alert", "Worng Input");
        }
    };
    const setQuestion5 = value => {
        dispatch(dispatch_option({ key: questionData[4].questionId, value: value }));
    };
    const windowWidth = Dimensions.get('window').width;
    const progressWidth = windowWidth
    const next = () => {

        if (Object.keys(answers).map((x) => { return answers[x] }).includes('')) {
            Alert.alert("Alert", 'Please Complete the form to proceed next section')
        }
        else if (totalCheck.includes(false)) {
            Alert.alert("Alert", 'Please Complete the form to proceed next section');
        }
        else {
            navigation.navigate("section2");
        }
    }
    const onPressRightIcon = () => {
        if (loggedIn !== 'loggedIn') {
            navigation.navigate('LoginScreen');
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
        next
    };
};