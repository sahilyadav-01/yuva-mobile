import { useIsFocused, useNavigation} from '@react-navigation/native';
import { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { documentTypeThunk } from '../../../../store/reducers/EmrmSlice';

export const useEmrmCreateRecord = () => {
  const navigation = useNavigation();
  const focused = useIsFocused();

  const dispatch = useDispatch();
  const { dropDownData } = useSelector(state => state.Emrm);
  const [documentType, setDocumentType] = useState('');
  const [date, setDate] = useState(null);
  const [picker, setPicker] = useState(false);
  const [healthCenterName, setHealthCenterName] = useState('');


  const setSelectedDocumentType = (arg) => {
    setDocumentType( dropDownData.find(item => {
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

  const handleDocumentPick = async () => {

      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      const fileUri = res.uri;
      const fileName = res.name;
      const fileType = res.type;
  
      const formData = new FormData();
      formData.append('file', {
        uri: fileUri,
        name: fileName,
        type: fileType,
      });
   
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
    healthCenterName,
    handleDocumentPick
    
};
};
