
import { useState,useEffect } from 'react';
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { profileThunk, resetMesage, uploadFamilyPic, uploadProfilePic } from '../../../../../store/reducers/ProfileSlice';
import { ImageGallery, requestCameraPermission } from '../../../../../utils/utils';
import { ALERT, ERROR, HURRAY, MESSAGE, UNSUCCESSFULL } from '../constants';

export const useUserDetails=()=>{
    const [modalVisible, setModalVisible] = useState(false);
    const [coverPhoto, setCoverPhoto] = useState(false);
    const [userPhoto, setUserPhoto] = useState(false);
    const {messageProfilePic,messageFamilyPic} = useSelector(state => state.profile);
    const dispatch=useDispatch();
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

useEffect(()=>{
if(messageFamilyPic?.message || messageProfilePic?.message)
{
  Alert.alert(HURRAY,MESSAGE);
  dispatch(profileThunk())
  setModalVisible(false)
}
else{
  Alert.alert(ALERT,UNSUCCESSFULL)
}
return () => dispatch(resetMesage())
},[messageFamilyPic,messageProfilePic])

return{
     onImage,
     onCamera,
     modalVisible, setModalVisible,
     setCoverPhoto,
     setUserPhoto,
}
}
