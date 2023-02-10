import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  verifySmsThunk,
  verifyUserExistenceThunk,
} from '../../store/reducers/AuthSlice';

export const useSignUp = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {emailExisting, numberExisting} = useSelector(state => state.auth);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [checkEmail, setCheckEmail] = useState(false);
  const [checkNumber, setCheckNumber] = useState(false);
  const [enableSignUpButton, setEnableSignUpButton] = useState(false);
  const [existing, setExisting] = useState(false);
  const [terms, setTerms] = useState(false);
  useEffect(() => {
    setExisting(emailExisting || numberExisting);
  }, [emailExisting, numberExisting]);

  useEffect(() => {
    const enable =
      name.length &&
      number.length &&
      email.length &&
      password.length &&
      confirmPassword.length &&
      password === confirmPassword &&
      terms &&
      !existing;
    setEnableSignUpButton(enable);
  }, [name, number, email, password, confirmPassword, existing, terms]);

  const onChangeName = e => {
    setName(e);
  };

  const onChangeNumber = e => setNumber(e.toString());

  const onChangeEmail = e => setEmail(e.toString());

  const onChangePassword = e => setPassword(e.toString());

  const onChangeConfirmPassword = e => setConfirmPassword(e.toString());

  const toggleTerms = () => setTerms(!terms);

  const onLoginPress = from => navigation.navigate('Login', {from});

  const checkEmailText = e => {
    if (email.split('@').length < 2) {
      setCheckEmail(true);
    } else {
      setCheckEmail(false);
      dispatch(
        verifyUserExistenceThunk({emailOrNumber: email, isNumber: false}),
      );
    }
  };

  const checkNumberText = e => {
    const reg = /^\d+$/;
    const num = number ? number.toString() : '';
    if (reg.test(number.toString()) && number.toString().length === 10) {
      setCheckNumber(false);
      dispatch(verifyUserExistenceThunk({emailOrNumber: num, isNumber: true}));
    } else {
      setCheckNumber(true);
    }
  };

  const onSignUp = (number, from) => {
    dispatch(verifySmsThunk({number}));
    navigation.navigate('EnterOTP', {
      number,
      email,
      name,
      password,
      verificationType: 'number',
      from,
    });
  };

  return {
    onChangeName,
    onChangePassword,
    onChangeConfirmPassword,
    onChangeNumber,
    onChangeEmail,
    checkNumberText,
    checkEmailText,
    onSignUp,
    name,
    number,
    email,
    password,
    confirmPassword,
    existing,
    enableSignUpButton,
    checkEmail,
    checkNumber,
    terms,
    toggleTerms,
    onLoginPress,
  };
};
