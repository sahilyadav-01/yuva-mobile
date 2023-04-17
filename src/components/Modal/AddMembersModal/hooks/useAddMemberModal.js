import {useState} from 'react';
import {Alert} from 'react-native';

export const useAddMemberModal = (relationsData, onSaveDetailsPress, heading) => {
  const data = [
    {heading: 'Name', placeholder: 'Name'},
    {heading: 'Age', placeholder: 'Age'},
    {heading: heading ?? 'Gender', placeholder: 'Gender'},
  ];
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [selectedRelation, setSelectedRelation] = useState('');
  const [selectedGender, setSelectedGender] = useState('');

  const getTextInputValue = key => {
    switch (key) {
      case 'Name':
        return {value: name, func: setName,type:'input'};
      case 'Age':
        return {value: age, func: setAge,type:'input',keyboardType:'numeric'};
      case 'Gender':
      case 'Relationship':
        return {value: '0',type:'picker'};
    }
  };
  const onTextChange = (text, heading) => {
    const set = getTextInputValue(heading)?.func;
    set(text);
  };
  const onItemSelect = index => {
    const item = relationsData.find(
      item => item.key === index.toString(),
    )?.value;
    const gender = relationsData.find(
      item => item.key === index.toString(),
    )?.gender;
    setSelectedRelation(item);
    setSelectedGender(gender);
  };
  const onSaveDetails = () => {
    const reg = /[- #*;,.<>\{\}\[\]\\\/]/gi
    const nameReg = /^[A-Za-z. ]+$/
    if(!(name && age && selectedRelation)) Alert.alert('Alert', 'Please fill all the details');
    else if(reg.test(age)) Alert.alert('Alert', 'Please enter a proper age');
    else if(!nameReg.test(name)) Alert.alert('Alert', 'Please enter a proper name');
    else onSaveDetailsPress({name, age, selectedRelation,selectedGender});
  };
  return {
    data,
    name,
    age,
    selectedRelation,
    onItemSelect,
    getTextInputValue,
    onTextChange,
    onSaveDetails,
  };
};
