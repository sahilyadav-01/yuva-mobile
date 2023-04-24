import { useState } from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import { useSelector } from 'react-redux';
import { ImageGallery, requestCameraPermission } from '../../../../../utils/utils';

export const useUserDetails=(props)=>{
    const {profileImageCamera}=useSelector(state=>state.profile)
    const [modalVisible, setModalVisible] = useState(false);
    const [coverPhoto, setCoverPhoto] = useState(false);
    const [userPhoto, setUserPhoto] = useState(false);
const onCamera =  () => {
    requestCameraPermission(props,coverPhoto,userPhoto);
  };
const onImage=()=>{
  ImageGallery(props,coverPhoto,userPhoto)
}
return{
     onImage,
     onCamera,
     profileImageCamera,
     modalVisible, setModalVisible,
     setCoverPhoto,
     setUserPhoto
}
}