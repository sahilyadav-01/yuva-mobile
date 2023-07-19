import { useNavigation } from '@react-navigation/native';
import { useState,useEffect } from 'react';
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { resetEmailVerified, resetNumberVerified, verifyEmailThunk, verifySmsThunk } from '../../../../../store/reducers/AuthSlice';
import { profileThunk, resetMesage, uploadFamilyPic, uploadProfilePic } from '../../../../../store/reducers/ProfileSlice';
import { ImageGallery, requestCameraPermission } from '../../../../../utils/utils';
import { ALERT, COVER_MESSAGE, ERROR, HURRAY, MESSAGE, PROFILE_MESSAGE, UNSUCCESSFULL } from '../constants';

export const useUserDetails=(userDetails, edit)=>{
    const [email, setEmail] = useState(userDetails?.email);
    const [phoneNumber, setPhoneNumber] = useState(userDetails?.number);
    const [modalVisible, setModalVisible] = useState(false);
    const [coverPhoto, setCoverPhoto] = useState(false);
    const [userPhoto, setUserPhoto] = useState(false);
    const [numberLoading, setNumberLoading] = useState(false);
    const [emailLoading, setEmailLoading] = useState(false);
    const {messageProfilePic,messageFamilyPic,apiErrorMessage} = useSelector(state => state.profile);
    const {numberErrorMsg, numberError, emailErrorMsg, emailError, emailVerified, numberVerified } = useSelector(state => state.auth);
    const dispatch=useDispatch();
    const navigation = useNavigation();
const onCamera =  () => {
    requestCameraPermission(onSucess,onError,coverPhoto,userPhoto);
  };
const onImage=()=>{
  ImageGallery(onSucess,onError,coverPhoto,userPhoto)
}
const onSucess=(image)=>{
  if(coverPhoto){
    dispatch(uploadFamilyPic(image))
  }
  else if(userPhoto){
    dispatch(uploadProfilePic(image))
  }
  }
const onError=(error)=>{
 Alert.alert(ERROR)
}


const onVerifyPhone = () => {
  dispatch(verifySmsThunk({number: phoneNumber}));
  setNumberLoading(true);
};

useEffect(() => {
  setEmail(userDetails?.email);
}, [userDetails?.email])

useEffect(() => {
  setPhoneNumber(userDetails?.number);
}, [userDetails?.number])

useEffect(() => {
    if(numberError && numberLoading) {
      Alert.alert(numberErrorMsg);
    } else if (numberLoading) {
      navigation.navigate('EnterOTP',{
        from: 'Profile',
        resetPassword: false,
        email: phoneNumber,
        verificationType: 'number',
        signUp:false,
      });
    }
    setNumberLoading(false);
}, [numberLoading, numberError]);

useEffect(() => {
  if(emailError && emailLoading) {
    Alert.alert(emailErrorMsg);
  } else if (emailLoading) {
    navigation.navigate('EnterOTP',{
      from: 'Profile',
      resetPassword: false,
      email: email,
      verificationType: 'email',
      signUp:false,
    });
  }
  setEmailLoading(false);
}, [emailLoading, emailError]);

const onVerifyEmail = () => {
  dispatch(verifyEmailThunk({email:email, name: userDetails?.name}));
  setEmailLoading(true);
}
const onChangeEmail = (text) => {
  setEmail(text);
};

const onChangeNumber = (text) => {
  setPhoneNumber(text);
};

useEffect(()=>{
if(messageFamilyPic?.message)
{
  Alert.alert(HURRAY,COVER_MESSAGE);
  dispatch(profileThunk())
  setModalVisible(false)
}
 else if(messageProfilePic?.message)
{
  Alert.alert(HURRAY,PROFILE_MESSAGE);
  dispatch(profileThunk())
  setModalVisible(false)
}
else if(apiErrorMessage){
  Alert.alert(ALERT,UNSUCCESSFULL)
}
return () => dispatch(resetMesage())
},[messageFamilyPic,messageProfilePic])
useEffect(() => {
  dispatch(resetEmailVerified());
}, [edit])
useEffect(() => {
  dispatch(resetNumberVerified());
}, [edit])
return{
     onImage,
     onCamera,
     modalVisible, setModalVisible,
     setCoverPhoto,
     setUserPhoto,
     onVerifyPhone, 
     onVerifyEmail,
     email,
     phoneNumber,
     onChangeEmail,
     onChangeNumber,
     emailVerified,
     numberVerified
}
}
