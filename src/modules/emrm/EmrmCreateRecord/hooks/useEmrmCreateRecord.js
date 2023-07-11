import { useIsFocused, useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addErmThunk, documentTypeThunk } from '../../../../store/reducers/EmrmSlice';
import DocumentPicker from 'react-native-document-picker';
import { getEpoch, getEpochEmrm } from '../../../../utils/utils';



export const useEmrmCreateRecord = () => {
  const navigation = useNavigation();
  const focused = useIsFocused();

  const dispatch = useDispatch();
  const { dropDownData } = useSelector(state => state.Emrm);
  const [documentType, setDocumentType] = useState('');
  const [date, setDate] = useState(new Date());
  const [picker, setPicker] = useState(false);
  const [healthCenterName, setHealthCenterName] = useState('');
  const [medicalDocumentName, setMedicalDocumentName] = useState('');
  const [document, setDocument] = useState(null);
  const [flieName, setFlieName] = useState('');

  // const flieName ='';



  const setSelectedDocumentType = (arg) => {
    setDocumentType(dropDownData.find(item => {
      if (item.name.toString() === arg.toString()) return item;
    }).id
    );
  }
  // date
  const onConfirmDate = date => {
    setDate(date);
    setPicker(false);
  };

  const onChangeTextInput = e => setHealthCenterName(e.toString());
  const onChangeDocumentName = e => setMedicalDocumentName(e.toString());
const ermRequest = {
  medicalDocument: medicalDocumentName,
  date: Date.parse(date).toString(),
  healthCentre: healthCenterName,
  documentType: documentType.toString()
}
  const handleDocumentPick = async () => {
  
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
        // allowMultiSelection: false 
      });
      setFlieName(res.name);
      setDocument(res);
      // Create FormData
    
  
      // // Make the API call to upload the file
      // const response = await RNFetchBlob.fetch('POST', `http://ec2-43-205-141-26.ap-south-1.compute.amazonaws.com:8080/api/v1/yuva/erms`, {
      //   'Content-Type': 'multipart/form-data',
      // }, [
      //   { name: 'file', data: res.data },
      // ]);
  
      // Handle the response from the server
      // console.log(emrmData);
  
   
  };
  console.log(document?.[0],"hiiiiii")
  // const emrmData=document?.map((item,index) => ( { name: item?.name, type: item?.type, uri: item?.uri }));
  // const emrmData=document?.map((item,index) => {return item })
  // const emrmData = document?.map((item, index) => {
  //   const newObj = item; // Save item in a different constant
  //   return newObj;
  // });
   const handleSubmit =  () => {

    dispatch(addErmThunk({document:document?.[0],ermRequest:ermRequest}));
   }

  useEffect(() => {
    dispatch(documentTypeThunk());
  }, [focused]);

  // console.log("epochTime",epochTime);
  const openPicker = () => setPicker(true);
  const closePicker = () => setPicker(false);
  return {
    dropDownData: dropDownData?.map((dropDownData) => ({ label: dropDownData?.id, value: dropDownData?.name, })),
    setSelectedDocumentType,
    picker,
    onConfirmDate,
    closePicker,
    openPicker,
    date,
    onChangeTextInput,
    onChangeDocumentName,
    healthCenterName,
    medicalDocumentName,
    handleDocumentPick,
    handleSubmit,
    flieName

  };
};
