import { useIsFocused, useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addErmThunk, documentTypeThunk, resetSuccessMessage } from '../../../../store/reducers/EmrmSlice';
import DocumentPicker from 'react-native-document-picker';
import { Alert } from 'react-native';
import { ALERT, VALIDATION_MESSAGE1, VALIDATION_MESSAGE2, VALIDATION_MESSAGE3, VALIDATION_MESSAGE4, VALIDATION_MESSAGE5 } from '../constants';

export const useEmrmCreateRecord = () => {
  const navigation = useNavigation();
  const focused = useIsFocused();
  const dispatch = useDispatch();
  const { dropDownData, emrmUploadMessage } = useSelector(state => state.Emrm);
  const [documentType, setDocumentType] = useState('');
  const [date, setDate] = useState();
  const [picker, setPicker] = useState(false);
  const [healthCenterName, setHealthCenterName] = useState('');
  const [medicalDocumentName, setMedicalDocumentName] = useState('');
  const [document, setDocument] = useState(null);
  const [fileName, setFileName] = useState('');
  const setSelectedDocumentType = (arg) => {
    setDocumentType(dropDownData.find(item => {
      if (item.name.toString() === arg.toString()) return item;
    }).id
    );
  }
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
      allowMultiSelection: false
    });
    setDocument(res);
    setFileName(res?.[0].name);

  };
  const handleSubmit = () => {
    if (documentType === '') {
      Alert.alert(ALERT, VALIDATION_MESSAGE1);
    }
    else if (medicalDocumentName === '') {
      Alert.alert(ALERT, VALIDATION_MESSAGE2);
    }
    else if (date === undefined) {
      Alert.alert(ALERT, VALIDATION_MESSAGE3);
    }
    else if (healthCenterName === '') {
      Alert.alert(ALERT, VALIDATION_MESSAGE4);
    }
    else if (document === null) {
      Alert.alert(ALERT, VALIDATION_MESSAGE5);
    }
    else {
      dispatch(addErmThunk({ document: document?.[0], ermRequest: ermRequest }));
    }
  }
  useEffect(() => {
    if (emrmUploadMessage !== '' && navigation.isFocused()) {
      Alert.alert(ALERT, emrmUploadMessage, [
        {
          text: 'Ok',
          onPress: () => {
            dispatch(resetSuccessMessage());

          },
        },
      ]);
    }
  }, [emrmUploadMessage, focused]);

  useEffect(() => {
    if (navigation.isFocused()) {
      dispatch(documentTypeThunk());
    }
  }, [focused]);

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
    fileName,
  };
};
